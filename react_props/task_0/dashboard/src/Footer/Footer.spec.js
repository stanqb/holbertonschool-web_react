import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders the Footer component without crashing', () => {
  expect(() => render(<Footer />)).not.toThrow();
});
