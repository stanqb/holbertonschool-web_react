import userEvent from '@testing-library/user-event';
import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import mockAxios from 'axios';
import App from './App';

const notificationsData = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
];

const coursesData = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const coursesFetchCount = () => mockAxios.get.mock.calls.filter(([url]) => url === 'http://localhost:5173/courses.json').length;

const renderApp = async () => {
  const utils = render(<App />);
  await screen.findByText('New course available');
  return utils;
};

const logInThroughForm = (email = 'user@holberton.com', password = 'longpassword') => {
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: email } });
  fireEvent.change(screen.getByLabelText(/password/i), { target: { value: password } });
  fireEvent.click(screen.getByRole('button', { name: /ok/i }));
};

describe('App functional component', () => {
  let logSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    mockAxios.get.mockImplementation((url) => {
      if (url === 'http://localhost:5173/notifications.json') return Promise.resolve({ data: notificationsData });
      if (url === 'http://localhost:5173/courses.json') return Promise.resolve({ data: coursesData });
      return Promise.reject(new Error(`Unexpected URL: ${url}`));
    });
  });

  afterEach(() => {
    mockAxios.reset();
    logSpy.mockRestore();
  });

  test('renders the header, the footer and the News section', async () => {
    await renderApp();
    expect(screen.getByRole('heading', { level: 1, name: /school dashboard/i })).toBeInTheDocument();
    expect(screen.getByText(/copyright/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /news from the school/i })).toBeInTheDocument();
    expect(screen.getByText(/holberton school news goes here/i)).toBeInTheDocument();
  });

  describe('data fetching', () => {
    test('retrieves the notifications data when the App loads', async () => {
      await renderApp();
      expect(mockAxios.get).toHaveBeenCalledWith('http://localhost:5173/notifications.json');
      expect(screen.getAllByRole('listitem')).toHaveLength(3);
      expect(screen.getByText('Urgent requirement').tagName).toBe('STRONG');
    });

    test('retrieves the courses data whenever the user state changes', async () => {
      await renderApp();
      expect(coursesFetchCount()).toBe(0);

      logInThroughForm();
      await waitFor(() => expect(coursesFetchCount()).toBe(1));
      expect(await screen.findByText('ES6')).toBeInTheDocument();
      expect(screen.getByText('Webpack')).toBeInTheDocument();

      fireEvent.click(screen.getByText(/\(logout\)/i));
      expect(screen.queryByRole('table')).not.toBeInTheDocument();
      expect(coursesFetchCount()).toBe(1);
    });

    test('keeps deleted notifications deleted through login and logout', async () => {
      await renderApp();
      fireEvent.click(screen.getByText('New course available'));
      expect(screen.getAllByRole('listitem')).toHaveLength(2);

      logInThroughForm();
      await screen.findByText('ES6');
      fireEvent.click(screen.getByText(/\(logout\)/i));

      expect(screen.queryByText('New course available')).not.toBeInTheDocument();
      expect(screen.getAllByRole('listitem')).toHaveLength(2);
    });
  });

  describe('handleDisplayDrawer and handleHideDrawer', () => {
    test('displays the drawer by default, hides it and shows it again', async () => {
      await renderApp();
      expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
      fireEvent.click(screen.getByLabelText(/close/i));
      expect(screen.queryByText(/here is the list of notifications/i)).not.toBeInTheDocument();
      fireEvent.click(screen.getByText(/your notifications/i));
      expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
    });
  });

  describe('logIn and logOut', () => {
    test('logIn updates the user email, password and isLoggedIn', async () => {
      const { container } = await renderApp();
      logInThroughForm('user@holberton.com', 'longpassword');
      expect(container.querySelector('#logoutSection')).toHaveTextContent('Welcome user@holberton.com (logout)');
      expect(await screen.findByRole('table')).toBeInTheDocument();
      expect(screen.queryByLabelText(/email/i)).not.toBeInTheDocument();
      expect(screen.getByText(/contact us/i)).toBeInTheDocument();
    });

    test('logOut sets isLoggedIn to false and clears the email and password', async () => {
      const { container } = await renderApp();
      logInThroughForm();
      fireEvent.click(screen.getByText(/\(logout\)/i));
      expect(container.querySelector('#logoutSection')).not.toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toHaveValue('');
      expect(screen.getByLabelText(/password/i)).toHaveValue('');
      expect(screen.queryByText(/contact us/i)).not.toBeInTheDocument();
      expect(coursesFetchCount()).toBe(1);
    });
  });

  describe('markNotificationAsRead', () => {
    test('removes exactly the clicked notification and logs the expected message', async () => {
      await renderApp();
      fireEvent.click(screen.getByText('New resume available'));
      expect(logSpy).toHaveBeenCalledWith('Notification 2 has been marked as read');
      expect(screen.queryByText('New resume available')).not.toBeInTheDocument();
      expect(screen.getByText('New course available')).toBeInTheDocument();
      expect(screen.getAllByRole('listitem')).toHaveLength(2);
    });

    test('removes every notification and shows the empty message', async () => {
      await renderApp();
      [/new course available/i, /new resume available/i, /urgent requirement/i].forEach((text) => {
        fireEvent.click(screen.getByText(text));
      });
      expect(screen.getByText(/no new notifications for now/i)).toBeInTheDocument();
      expect(screen.queryAllByRole('listitem')).toHaveLength(0);
    });
  });
});

describe('App notifications through login and logout', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
    mockAxios.get.mockImplementation((url) => {
      if (url === 'http://localhost:5173/notifications.json') return Promise.resolve({ data: notificationsData });
      if (url === 'http://localhost:5173/courses.json') return Promise.resolve({ data: coursesData });
      return Promise.reject(new Error(`Unexpected URL: ${url}`));
    });
  });

  afterEach(() => {
    mockAxios.reset();
    jest.restoreAllMocks();
  });

  test('notifications remain unchanged through login and logout', async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(await screen.findByText(/new course available/i)).toBeInTheDocument();

    await user.type(screen.getByLabelText(/email/i), 'student@example.com');
    await user.type(screen.getByLabelText(/password/i), 'password123');
    await user.click(screen.getByDisplayValue('OK'));

    expect(await screen.findByText('ES6')).toBeInTheDocument();
    expect(screen.getByText(/new course available/i)).toBeInTheDocument();

    await user.click(screen.getByText(/\(logout\)/i));
    expect(screen.getByText(/new course available/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /log in to continue/i })).toBeInTheDocument();
  });
});
