import { render } from '@testing-library/react';
import Header from './Header';

test('renders the Header component without crashing', () => {
  expect(() => render(<Header />)).not.toThrow();
});
