import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  test('renders a blue item with the default type', () => {
    render(<NotificationItem type="default" value="test" />);
    const item = screen.getByRole('listitem');
    expect(item).toHaveAttribute('data-notification-type', 'default');
    expect(item).toHaveStyle({ color: 'blue' });
  });

  test('renders a red item with the urgent type', () => {
    render(<NotificationItem type="urgent" value="test" />);
    const item = screen.getByRole('listitem');
    expect(item).toHaveAttribute('data-notification-type', 'urgent');
    expect(item).toHaveStyle({ color: 'red' });
  });

  test('renders the value when no html is given', () => {
    render(<NotificationItem value="New course available" />);
    expect(screen.getByRole('listitem')).toHaveTextContent(
      'New course available',
    );
  });

  test('renders the html prop given as a string', () => {
    render(<NotificationItem type="urgent" html="<u>test</u>" />);
    expect(screen.getByRole('listitem')).toContainHTML('<u>test</u>');
  });

  test('renders the html prop given as a dangerouslySetInnerHTML object', () => {
    render(
      <NotificationItem type="urgent" html={{ __html: '<u>test</u>' }} />,
    );
    expect(screen.getByRole('listitem')).toContainHTML('<u>test</u>');
  });
});
