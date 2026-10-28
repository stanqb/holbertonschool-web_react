import { render, screen, fireEvent } from '@testing-library/react';
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
    html: { __html: getLatestNotification() },
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
      expect(screen.queryByText(/here is the list of notifications/i)).not.toBeInTheDocument();
      expect(screen.queryAllByRole('listitem')).toHaveLength(0);
    });
  });

  describe('when displayDrawer is true', () => {
    test('renders the close button, the paragraph and the items', () => {
      render(<Notifications displayDrawer notifications={notificationsList} />);
      expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/close/i)).toBeInTheDocument();
      expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
      expect(screen.getAllByRole('listitem')).toHaveLength(3);
    });

    test('renders the empty message when notifications is empty', () => {
      render(<Notifications displayDrawer notifications={[]} />);
      expect(screen.getByText(/no new notification for now/i)).toBeInTheDocument();
      expect(screen.queryByText(/here is the list of notifications/i)).not.toBeInTheDocument();
      expect(screen.queryAllByRole('listitem')).toHaveLength(0);
    });

    test('logs a message when the close button is clicked', async () => {
      const user = userEvent.setup();
      const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
      render(<Notifications displayDrawer notifications={notificationsList} />);
      await user.click(screen.getByLabelText(/close/i));
      expect(spy).toHaveBeenCalledWith('Close button has been clicked');
      spy.mockRestore();
    });
  });
});

describe('Notifications markNotificationAsRead prop', () => {
  test('calls markNotificationAsRead with the id of the clicked item', () => {
    const markNotificationAsRead = jest.fn();
    render(
      <Notifications
        displayDrawer
        notifications={notificationsList}
        markNotificationAsRead={markNotificationAsRead}
      />,
    );
    fireEvent.click(screen.getAllByRole('listitem')[1]);
    expect(markNotificationAsRead).toHaveBeenCalledTimes(1);
    expect(markNotificationAsRead).toHaveBeenCalledWith(2);
  });
});

describe('Notifications as a PureComponent', () => {
  test('re-renders when a new notifications list with the same length is passed', () => {
    const initialList = [{ id: 1, type: 'default', value: 'First notification' }];
    const sameLengthList = [{ id: 1, type: 'default', value: 'Updated notification' }];
    const { rerender } = render(<Notifications displayDrawer notifications={initialList} />);
    rerender(<Notifications displayDrawer notifications={sameLengthList} />);
    expect(screen.getByText('Updated notification')).toBeInTheDocument();
  });

  test('re-renders when the length of notifications changes', () => {
    const initialList = [{ id: 1, type: 'default', value: 'First notification' }];
    const longerList = [
      { id: 1, type: 'default', value: 'First notification' },
      { id: 2, type: 'urgent', value: 'Second notification' },
    ];
    const { rerender } = render(<Notifications displayDrawer notifications={initialList} />);
    rerender(<Notifications displayDrawer notifications={longerList} />);
    expect(screen.getByText('Second notification')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});

describe('Notifications drawer handlers', () => {
  const handlerList = [{ id: 1, type: 'default', value: 'New course available' }];

  test('calls handleDisplayDrawer when clicking on the menu item', () => {
    const handleDisplayDrawer = jest.fn();
    render(<Notifications notifications={handlerList} handleDisplayDrawer={handleDisplayDrawer} />);
    fireEvent.click(screen.getByText(/your notifications/i));
    expect(handleDisplayDrawer).toHaveBeenCalledTimes(1);
  });

  test('calls handleHideDrawer when clicking on the close button', () => {
    const handleHideDrawer = jest.fn();
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications notifications={handlerList} displayDrawer handleHideDrawer={handleHideDrawer} />);
    fireEvent.click(screen.getByLabelText(/close/i));
    expect(handleHideDrawer).toHaveBeenCalledTimes(1);
    logSpy.mockRestore();
  });
});

describe('Notifications title animation', () => {
  const animList = [{ id: 1, type: 'default', value: 'New course available' }];

  test('bounces when there are notifications and displayDrawer is false', () => {
    render(<Notifications notifications={animList} displayDrawer={false} />);
    expect(screen.getByText(/your notifications/i)).toHaveClass('animate-bounce');
  });

  test('does not bounce when displayDrawer is true', () => {
    render(<Notifications notifications={animList} displayDrawer />);
    expect(screen.getByText(/your notifications/i)).not.toHaveClass('animate-bounce');
  });

  test('does not bounce when there are no notifications', () => {
    render(<Notifications notifications={[]} displayDrawer={false} />);
    expect(screen.getByText(/your notifications/i)).not.toHaveClass('animate-bounce');
  });
});
