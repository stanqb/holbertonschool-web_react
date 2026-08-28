import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getFooterCopy, getCurrentYear } from '../utils/utils';

describe('Footer component', () => {
  test('renders the copyright text when getFooterCopy is called with true', () => {
    render(<Footer />);
    const expected = `Copyright ${getCurrentYear()} - ${getFooterCopy(true)}`;
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
