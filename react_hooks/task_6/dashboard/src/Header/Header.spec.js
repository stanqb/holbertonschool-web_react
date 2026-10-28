import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

const loggedOutUser = { email: '', password: '', isLoggedIn: false };
const loggedInUser = { email: 'user@holberton.com', password: 'longpassword', isLoggedIn: true };

describe('Header component with props', () => {
  test('renders the Holberton logo and the title', () => {
    render(<Header user={loggedOutUser} logOut={() => {}} />);
    expect(screen.getByAltText(/holberton logo/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: /school dashboard/i })).toBeInTheDocument();
  });

  test('does not render the logoutSection when the user is logged out', () => {
    const { container } = render(<Header user={loggedOutUser} logOut={() => {}} />);
    expect(container.querySelector('#logoutSection')).not.toBeInTheDocument();
  });

  test('does not render the logoutSection without props', () => {
    const { container } = render(<Header />);
    expect(container.querySelector('#logoutSection')).not.toBeInTheDocument();
  });

  test('renders the welcome message with the email when the user is logged in', () => {
    const { container } = render(<Header user={loggedInUser} logOut={() => {}} />);
    expect(container.querySelector('#logoutSection')).toHaveTextContent('Welcome user@holberton.com (logout)');
  });

  test('calls the logOut prop when clicking on the logout link', () => {
    const logOut = jest.fn();
    render(<Header user={loggedInUser} logOut={logOut} />);
    fireEvent.click(screen.getByText(/\(logout\)/i));
    expect(logOut).toHaveBeenCalledTimes(1);
  });
});
