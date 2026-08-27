import { render } from '@testing-library/react';
import Login from './Login';

test('renders the Login component without crashing', () => {
  expect(() => render(<Login />)).not.toThrow();
});
