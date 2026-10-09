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

describe('App keyboard logout', () => {
  let alertSpy;

  beforeEach(() => {
    alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    alertSpy.mockRestore();
  });

  test('calls logOut once when control and h keys are pressed', () => {
    const logOutMock = jest.fn();
    render(<App logOut={logOutMock} />);
    document.dispatchEvent(new KeyboardEvent('keydown', { ctrlKey: true, key: 'h', bubbles: true }));
    expect(logOutMock).toHaveBeenCalledTimes(1);
  });

  test('calls alert with "Logging you out" when control and h keys are pressed', () => {
    render(<App />);
    document.dispatchEvent(new KeyboardEvent('keydown', { ctrlKey: true, key: 'h', bubbles: true }));
    expect(alertSpy).toHaveBeenCalledWith('Logging you out');
  });
});

describe('App News from the School section', () => {
  test('displays the News from the School title and paragraph by default', () => {
    const { getByRole, getByText } = render(<App />);
    expect(getByRole('heading', { name: /news from the school/i })).toBeInTheDocument();
    const paragraph = getByText(/ipsum lorem ipsum dolor sit amet/i);
    expect(paragraph).toBeInTheDocument();
    expect(paragraph.tagName).toBe('P');
  });
});
