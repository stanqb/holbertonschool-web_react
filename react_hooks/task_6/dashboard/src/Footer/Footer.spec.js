import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

const loggedOutUser = { email: '', password: '', isLoggedIn: false };
const loggedInUser = { email: 'user@holberton.com', password: 'longpassword', isLoggedIn: true };

describe('Footer component with props', () => {
  test('renders the copyright text', () => {
    render(<Footer user={loggedOutUser} />);
    expect(screen.getByText(`Copyright ${getCurrentYear()} - ${getFooterCopy(false)}`)).toBeInTheDocument();
  });

  test('does not display Contact us when the user is logged out', () => {
    render(<Footer user={loggedOutUser} />);
    expect(screen.queryByText(/contact us/i)).not.toBeInTheDocument();
  });

  test('does not display Contact us without props', () => {
    render(<Footer />);
    expect(screen.queryByText(/contact us/i)).not.toBeInTheDocument();
  });

  test('displays the Contact us link when the user is logged in', () => {
    render(<Footer user={loggedInUser} />);
    expect(screen.getByText(/contact us/i).tagName).toBe('A');
  });
});
