import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders a h1 element with the text School dashboard', () => {
    render(<App />);
    const heading = screen.getByRole('heading', {
      level: 1,
      name: /school dashboard/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test('renders the body paragraph with the login text', () => {
    render(<App />);
    const bodyText = screen.getByText(/login to access the full dashboard/i);
    expect(bodyText).toBeInTheDocument();
  });

  test('renders the footer paragraph with the copyright text', () => {
    render(<App />);
    const footerText = screen.getByText(/copyright \d{4} - holberton school/i);
    expect(footerText).toBeInTheDocument();
  });

  test('renders an img element', () => {
    render(<App />);
    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();
  });
});
