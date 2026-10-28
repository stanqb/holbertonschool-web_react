import { fireEvent } from '@testing-library/react';
import newContext from '../Context/context';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  test('renders the Holberton logo', () => {
    render(<Header />);
    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();
  });

  test('renders a h1 element with the correct text', () => {
    render(<Header />);
    const heading = screen.getByRole('heading', {
      level: 1,
      name: /school dashboard/i,
    });
    expect(heading).toBeInTheDocument();
  });
});

describe('Header logout section', () => {
  const loggedInUser = {
    email: 'user@holberton.com',
    password: 'longpassword',
    isLoggedIn: true,
  };

  test('does not render the logoutSection with the default context value', () => {
    const { container } = render(<Header />);
    expect(container.querySelector('#logoutSection')).not.toBeInTheDocument();
  });

  test('renders the logoutSection when the user is logged in', () => {
    const { container, getByText } = render(
      <newContext.Provider value={{ user: loggedInUser, logOut: () => {} }}>
        <Header />
      </newContext.Provider>,
    );
    expect(container.querySelector('#logoutSection')).toBeInTheDocument();
    expect(getByText(/welcome/i)).toBeInTheDocument();
    expect(getByText('user@holberton.com')).toBeInTheDocument();
  });

  test('calls logOut when clicking on the logout link', () => {
    const logOutSpy = jest.fn();
    const { getByText } = render(
      <newContext.Provider value={{ user: loggedInUser, logOut: logOutSpy }}>
        <Header />
      </newContext.Provider>,
    );
    fireEvent.click(getByText('logout'));
    expect(logOutSpy).toHaveBeenCalledTimes(1);
  });
});

describe('Header functional component', () => {
  test('does not render the logoutSection when the context user is logged out', () => {
    const loggedOutUser = { email: '', password: '', isLoggedIn: false };
    const { container } = render(
      <newContext.Provider value={{ user: loggedOutUser, logOut: () => {} }}>
        <Header />
      </newContext.Provider>,
    );
    expect(container.querySelector('#logoutSection')).not.toBeInTheDocument();
  });

  test('renders the welcome message with the email and a logout link', () => {
    const loggedInUser = { email: 'user@holberton.com', password: 'longpassword', isLoggedIn: true };
    const { container, getByText } = render(
      <newContext.Provider value={{ user: loggedInUser, logOut: () => {} }}>
        <Header />
      </newContext.Provider>,
    );
    expect(container.querySelector('#logoutSection')).toHaveTextContent('Welcome user@holberton.com (logout)');
    expect(getByText('logout').tagName).toBe('A');
  });
});
