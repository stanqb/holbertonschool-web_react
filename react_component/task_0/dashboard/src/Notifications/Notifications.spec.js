import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';

const notificationsList = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  {
    id: 3,
    type: 'urgent',
    value: 'Urgent requirement - complete by EOD',
    html: getLatestNotification(),
  },
];

describe('Notifications component', () => {
  test('always renders the Your notifications text', () => {
    render(<Notifications />);
    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
  });

  describe('when displayDrawer is false', () => {
    test('does not render the close button, the paragraph or the items', () => {
      render(<Notifications notifications={notificationsList} />);
      expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
      expect(screen.queryByLabelText(/close/i)).not.toBeInTheDocument();
      expect(
        screen.queryByText(/here is the list of notifications/i),
      ).not.toBeInTheDocument();
      expect(screen.queryAllByRole('listitem')).toHaveLength(0);
    });
  });

  describe('when displayDrawer is true', () => {
    test('renders the close button, the paragraph and the items', () => {
      render(
        <Notifications displayDrawer notifications={notificationsList} />,
      );
      expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/close/i)).toBeInTheDocument();
      expect(
        screen.getByText(/here is the list of notifications/i),
      ).toBeInTheDocument();
      expect(screen.getAllByRole('listitem')).toHaveLength(3);
    });

    test('renders the empty message when notifications is empty', () => {
      render(<Notifications displayDrawer notifications={[]} />);
      expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
      expect(
        screen.getByText(/no new notification for now/i),
      ).toBeInTheDocument();
      expect(
        screen.queryByText(/here is the list of notifications/i),
      ).not.toBeInTheDocument();
      expect(screen.queryAllByRole('listitem')).toHaveLength(0);
    });

    test('logs a message when the close button is clicked', async () => {
      const user = userEvent.setup();
      const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
      render(
        <Notifications displayDrawer notifications={notificationsList} />,
      );
      await user.click(screen.getByLabelText(/close/i));
      expect(spy).toHaveBeenCalledWith('Close button has been clicked');
      spy.mockRestore();
    });
  });
});
