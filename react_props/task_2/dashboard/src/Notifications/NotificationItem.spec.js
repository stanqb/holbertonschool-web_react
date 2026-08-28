import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  test('renders a blue default item with the right attribute', () => {
    render(<NotificationItem type="default" value="test" />);
    const item = screen.getByRole('listitem');
    expect(item).toHaveAttribute('data-notification-type', 'default');
    expect(item).toHaveStyle({ color: 'blue' });
  });

  test('renders a red urgent item with the right attribute', () => {
    render(<NotificationItem type="urgent" value="test" />);
    const item = screen.getByRole('listitem');
    expect(item).toHaveAttribute('data-notification-type', 'urgent');
    expect(item).toHaveStyle({ color: 'red' });
  });

  test('renders the html prop when it is provided', () => {
    render(<NotificationItem type="urgent" html="<u>test</u>" />);
    expect(screen.getByRole('listitem')).toContainHTML('<u>test</u>');
  });
});
