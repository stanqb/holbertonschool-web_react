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
