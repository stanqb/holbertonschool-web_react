import { renderHook, act } from '@testing-library/react';
import useLogin from '../hooks/useLogin';
import { fireEvent } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('Login component', () => {
  test('renders 2 labels, 2 inputs and 1 submit input', () => {
    const { container } = render(<Login />);
    expect(container.querySelectorAll('label')).toHaveLength(2);
    expect(container.querySelectorAll('input')).toHaveLength(3);
    expect(container.querySelectorAll('input[type="submit"]')).toHaveLength(1);
    expect(container.querySelectorAll('button')).toHaveLength(0);
  });

  test('focuses the email input when its label is clicked', async () => {
    const user = userEvent.setup();
    render(<Login />);
    await user.click(screen.getByText(/^email$/i));
    expect(screen.getByLabelText(/email/i)).toHaveFocus();
  });

  test('focuses the password input when its label is clicked', async () => {
    const user = userEvent.setup();
    render(<Login />);
    await user.click(screen.getByText(/^password$/i));
    expect(screen.getByLabelText(/password/i)).toHaveFocus();
  });
});

describe('Login submit button state', () => {
  let logSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  test('the submit button is disabled by default', () => {
    render(<Login />);
    expect(screen.getByRole('button', { name: /ok/i })).toBeDisabled();
  });

  test('the submit button is enabled only when email and password are valid', () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submit = screen.getByRole('button', { name: /ok/i });

    fireEvent.change(emailInput, { target: { value: 'not-an-email' } });
    fireEvent.change(passwordInput, { target: { value: 'longpassword' } });
    expect(submit).toBeDisabled();

    fireEvent.change(emailInput, { target: { value: 'user@holberton.com' } });
    fireEvent.change(passwordInput, { target: { value: 'short' } });
    expect(submit).toBeDisabled();

    fireEvent.change(passwordInput, { target: { value: 'longpassword' } });
    expect(submit).toBeEnabled();
  });
});

describe('Login logIn prop', () => {
  test('calls logIn with the email and password when the form is submitted', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const logIn = jest.fn();
    render(<Login logIn={logIn} />);
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'user@holberton.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'longpassword' } });
    fireEvent.click(screen.getByRole('button', { name: /ok/i }));
    expect(logIn).toHaveBeenCalledTimes(1);
    expect(logIn).toHaveBeenCalledWith('user@holberton.com', 'longpassword');
    logSpy.mockRestore();
  });
});

describe('Login functional component', () => {
  let logSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  test('keeps both inputs controlled by the formData state', () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    fireEvent.change(emailInput, { target: { value: 'user@holberton.com' } });
    fireEvent.change(passwordInput, { target: { value: 'longpassword' } });
    expect(emailInput).toHaveValue('user@holberton.com');
    expect(passwordInput).toHaveValue('longpassword');
  });

  test('disables the submit button again when the password becomes too short', () => {
    render(<Login />);
    const submit = screen.getByRole('button', { name: /ok/i });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'user@holberton.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'longpassword' } });
    expect(submit).toBeEnabled();
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'short' } });
    expect(submit).toBeDisabled();
  });
});

describe('useLogin custom hook', () => {
  test('returns empty values and a disabled submit by default', () => {
    const { result } = renderHook(() => useLogin(jest.fn()));
    expect(result.current.email).toBe('');
    expect(result.current.password).toBe('');
    expect(result.current.enableSubmit).toBe(false);
  });

  test('enables submit only with a valid email and a password of at least 8 characters', () => {
    const { result } = renderHook(() => useLogin(jest.fn()));
    act(() => {
      result.current.handleChangeEmail({ target: { value: 'not-an-email' } });
    });
    act(() => {
      result.current.handleChangePassword({ target: { value: 'longpassword' } });
    });
    expect(result.current.enableSubmit).toBe(false);
    act(() => {
      result.current.handleChangeEmail({ target: { value: 'user@holberton.com' } });
    });
    expect(result.current.enableSubmit).toBe(true);
    act(() => {
      result.current.handleChangePassword({ target: { value: 'short' } });
    });
    expect(result.current.enableSubmit).toBe(false);
  });

  test('prevents the default submission and calls onLogin with the email and password', () => {
    const onLogin = jest.fn();
    const preventDefault = jest.fn();
    const { result } = renderHook(() => useLogin(onLogin));
    act(() => {
      result.current.handleChangeEmail({ target: { value: 'user@holberton.com' } });
    });
    act(() => {
      result.current.handleChangePassword({ target: { value: 'longpassword' } });
    });
    act(() => {
      result.current.handleLoginSubmit({ preventDefault });
    });
    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(onLogin).toHaveBeenCalledWith('user@holberton.com', 'longpassword');
  });
});
