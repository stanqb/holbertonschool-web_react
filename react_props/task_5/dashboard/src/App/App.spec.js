import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders without crashing', () => {
    expect(() => render(<App />)).not.toThrow();
  });

  test('renders the Login form when isLoggedIn is false', () => {
    render(<App isLoggedIn={false} />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });

  test('renders the CourseList table when isLoggedIn is true', () => {
    render(<App isLoggedIn />);
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText('Available courses')).toBeInTheDocument();
    expect(screen.queryByLabelText(/email/i)).not.toBeInTheDocument();
  });
});
