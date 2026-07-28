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

  test('renders an img element', () => {
    render(<App />);
    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();
  });

  test('renders 2 input elements', () => {
    const { container } = render(<App />);
    const inputs = container.querySelectorAll('input');
    expect(inputs).toHaveLength(2);
  });

  test('renders 2 label elements with the text Email and Password', () => {
    render(<App />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test('renders a button with the text OK', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /^ok$/i });
    expect(button).toBeInTheDocument();
  });
});
