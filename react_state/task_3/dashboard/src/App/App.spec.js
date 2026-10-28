import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const logInThroughForm = () => {
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'user@holberton.com' } });
  fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'longpassword' } });
  fireEvent.click(screen.getByRole('button', { name: /ok/i }));
};

describe('App component', () => {
  let logSpy;
  let alertSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
    alertSpy.mockRestore();
  });

  test('renders the header, the footer and the notifications title', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: /school dashboard/i })).toBeInTheDocument();
    expect(screen.getByText(/copyright/i)).toBeInTheDocument();
    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
  });

  test('renders the Login form by default because the user is logged out in the state', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /log in to continue/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });

  test('displays the News from the School title and paragraph by default', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /news from the school/i })).toBeInTheDocument();
    expect(screen.getByText(/ipsum lorem ipsum dolor sit amet/i).tagName).toBe('P');
  });

  test('displays the CourseList and removes the Login form after logging in', () => {
    render(<App />);
    logInThroughForm();
    expect(screen.getByRole('heading', { name: /course list/i })).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.queryByLabelText(/email/i)).not.toBeInTheDocument();
  });

  test('alerts "Logging you out" and logs the user out when control and h are pressed', () => {
    render(<App />);
    logInThroughForm();
    fireEvent.keyDown(document, { ctrlKey: true, key: 'h' });
    expect(alertSpy).toHaveBeenCalledWith('Logging you out');
    expect(screen.getByRole('heading', { name: /log in to continue/i })).toBeInTheDocument();
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });

  test('opens and closes the notifications panel using the local state', () => {
    render(<App />);
    expect(screen.queryByText(/here is the list of notifications/i)).not.toBeInTheDocument();
    fireEvent.click(screen.getByText(/your notifications/i));
    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText(/close/i));
    expect(screen.queryByText(/here is the list of notifications/i)).not.toBeInTheDocument();
  });
});

describe('App login and logout through the state', () => {
  test('shows the logout section after login and the Login form after logout', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { container } = render(<App />);
    expect(container.querySelector('#logoutSection')).not.toBeInTheDocument();

    logInThroughForm();
    const logoutSection = container.querySelector('#logoutSection');
    expect(logoutSection).toBeInTheDocument();
    expect(logoutSection).toHaveTextContent('Welcome user@holberton.com (logout)');

    fireEvent.click(screen.getByText('logout'));
    expect(container.querySelector('#logoutSection')).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /log in to continue/i })).toBeInTheDocument();
    logSpy.mockRestore();
  });
});
