import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import WithLogging from './WithLogging';

class MockApp extends React.Component {
  render() {
    return (
      <h1>
        Hello from Mock App Component
      </h1>
    );
  }
}

const MockAppWithLogging = WithLogging(MockApp);

describe('WithLogging HOC', () => {
  let logSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    cleanup();
    logSpy.mockRestore();
  });

  test('renders a heading with the text Hello from Mock App Component', () => {
    render(<MockAppWithLogging />);
    expect(
      screen.getByRole('heading', { name: /hello from mock app component/i }),
    ).toBeInTheDocument();
  });

  test('logs when the wrapped component is mounted and unmounted', () => {
    const { unmount } = render(<MockAppWithLogging />);
    expect(logSpy).toHaveBeenCalledWith('Component MockApp is mounted');
    unmount();
    expect(logSpy).toHaveBeenCalledWith('Component MockApp is going to unmount');
  });

  test('sets the displayName to WithLogging(NAME_OF_THE_WRAPPED_COMPONENT)', () => {
    expect(MockAppWithLogging.displayName).toBe('WithLogging(MockApp)');
  });

  test('defaults the name to Component when the wrapped component has no name', () => {
    const anonymous = () => null;
    Object.defineProperty(anonymous, 'name', { value: '' });
    expect(WithLogging(anonymous).displayName).toBe('WithLogging(Component)');
  });
});
