import newContext from '../Context/context';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getFooterCopy, getCurrentYear } from '../utils/utils';

describe('Footer component', () => {
  test('renders the copyright text when getFooterCopy is called with false', () => {
    render(<Footer />);
    const expected = `Copyright ${getCurrentYear()} - ${getFooterCopy(false)}`;
    expect(screen.getByText(expected)).toBeInTheDocument();
  });

  test('renders the string Holberton School inside a p element', () => {
    const { container } = render(<Footer />);
    const paragraph = container.querySelector('p');
    expect(paragraph).toHaveTextContent(
      `Copyright ${new Date().getFullYear()} - Holberton School`,
    );
  });
});

describe('Footer Contact us link', () => {
  test('does not display the Contact us link when the user is logged out', () => {
    render(<Footer />);
    expect(screen.queryByText(/contact us/i)).not.toBeInTheDocument();
  });

  test('displays the Contact us link when the user is logged in', () => {
    const contextValue = {
      user: { email: 'user@holberton.com', password: 'longpassword', isLoggedIn: true },
      logOut: () => {},
    };
    render(
      <newContext.Provider value={contextValue}>
        <Footer />
      </newContext.Provider>,
    );
    const link = screen.getByText(/contact us/i);
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe('A');
  });
});
