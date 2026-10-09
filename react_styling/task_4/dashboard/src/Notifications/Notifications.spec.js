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

describe('Notifications markAsRead', () => {
  let logSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  test('logs "Notification {id} has been marked as read" when an item is clicked', () => {
    const clickList = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'Another notification' },
    ];
    const { container } = render(<Notifications notifications={clickList} displayDrawer={true} />);
    const items = container.querySelectorAll('li');
    items[1].click();
    expect(logSpy).toHaveBeenCalledWith('Notification 2 has been marked as read');
  });
});

describe('Notifications shouldComponentUpdate', () => {
  test('does not re-render when the length of notifications stays the same', () => {
    const initialList = [{ id: 1, type: 'default', value: 'First notification' }];
    const sameLengthList = [{ id: 1, type: 'default', value: 'Updated notification' }];
    const { rerender, getByText, queryByText } = render(
      <Notifications displayDrawer={true} notifications={initialList} />,
    );
    rerender(<Notifications displayDrawer={true} notifications={sameLengthList} />);
    expect(getByText('First notification')).toBeInTheDocument();
    expect(queryByText('Updated notification')).not.toBeInTheDocument();
  });

  test('re-renders when the length of notifications changes', () => {
    const initialList = [{ id: 1, type: 'default', value: 'First notification' }];
    const longerList = [
      { id: 1, type: 'default', value: 'First notification' },
      { id: 2, type: 'urgent', value: 'Second notification' },
    ];
    const { rerender, getByText, getAllByRole } = render(
      <Notifications displayDrawer={true} notifications={initialList} />,
    );
    rerender(<Notifications displayDrawer={true} notifications={longerList} />);
    expect(getByText('Second notification')).toBeInTheDocument();
    expect(getAllByRole('listitem')).toHaveLength(2);
  });
});
