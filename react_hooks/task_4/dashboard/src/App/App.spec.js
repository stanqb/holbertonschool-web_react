import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const logInThroughForm = (email = 'user@holberton.com', password = 'longpassword') => {
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: email } });
  fireEvent.change(screen.getByLabelText(/password/i), { target: { value: password } });
  fireEvent.click(screen.getByRole('button', { name: /ok/i }));
};

describe('App functional component', () => {
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

  test('renders the Login form by default because the user is logged out', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /log in to continue/i })).toBeInTheDocument();
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });

  test('displays the News from the School section', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /news from the school/i })).toBeInTheDocument();
    expect(screen.getByText(/holberton school news goes here/i)).toBeInTheDocument();
    expect(screen.getByText(/ipsum lorem ipsum dolor sit amet/i).tagName).toBe('P');
  });

  describe('handleDisplayDrawer and handleHideDrawer', () => {
    test('displays the notifications drawer by default', () => {
      render(<App />);
      expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
      expect(screen.getAllByRole('listitem')).toHaveLength(3);
    });

    test('handleHideDrawer hides the drawer when clicking on the close button', () => {
      render(<App />);
      fireEvent.click(screen.getByLabelText(/close/i));
      expect(screen.queryByText(/here is the list of notifications/i)).not.toBeInTheDocument();
    });

    test('handleDisplayDrawer shows the drawer again when clicking on the title', () => {
      render(<App />);
      fireEvent.click(screen.getByLabelText(/close/i));
      fireEvent.click(screen.getByText(/your notifications/i));
      expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
    });
  });

  describe('logIn', () => {
    test('updates the user email, password and isLoggedIn', () => {
      const { container } = render(<App />);
      logInThroughForm('user@holberton.com', 'longpassword');
      const logoutSection = container.querySelector('#logoutSection');
      expect(logoutSection).toBeInTheDocument();
      expect(logoutSection).toHaveTextContent('Welcome user@holberton.com (logout)');
      expect(screen.getByRole('heading', { name: /course list/i })).toBeInTheDocument();
      expect(screen.getByRole('table')).toBeInTheDocument();
      expect(screen.queryByLabelText(/email/i)).not.toBeInTheDocument();
      expect(screen.getByText(/contact us/i)).toBeInTheDocument();
    });
  });

  describe('logOut', () => {
    test('sets isLoggedIn to false and clears the email and password', () => {
      const { container } = render(<App />);
      logInThroughForm('user@holberton.com', 'longpassword');
      fireEvent.click(screen.getByText('logout'));
      expect(container.querySelector('#logoutSection')).not.toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /log in to continue/i })).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toHaveValue('');
      expect(screen.getByLabelText(/password/i)).toHaveValue('');
      expect(screen.queryByText(/contact us/i)).not.toBeInTheDocument();
      expect(screen.queryByRole('table')).not.toBeInTheDocument();
    });
  });

  describe('markNotificationAsRead', () => {
    test('removes the clicked notification and logs the expected message', () => {
      render(<App />);
      fireEvent.click(screen.getByText('New course available'));
      expect(logSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
      expect(screen.queryByText('New course available')).not.toBeInTheDocument();
      expect(screen.getAllByRole('listitem')).toHaveLength(2);
    });

    test('removes every notification and keeps the drawer usable when empty', () => {
      render(<App />);
      [/new course available/i, /new resume available/i, /urgent requirement/i].forEach((text, index) => {
        fireEvent.click(screen.getByText(text));
        expect(logSpy).toHaveBeenCalledWith(`Notification ${index + 1} has been marked as read`);
      });
      expect(screen.getByText(/no new notification for now/i)).toBeInTheDocument();
      fireEvent.click(screen.getByRole('button', { name: /close/i }));
      expect(screen.queryByText(/no new notification for now/i)).not.toBeInTheDocument();
    });
  });

  test('no longer handles the control + h keyboard shortcut', () => {
    render(<App />);
    logInThroughForm();
    fireEvent.keyDown(document, { ctrlKey: true, key: 'h' });
    expect(alertSpy).not.toHaveBeenCalled();
    expect(screen.getByRole('table')).toBeInTheDocument();
  });
});
