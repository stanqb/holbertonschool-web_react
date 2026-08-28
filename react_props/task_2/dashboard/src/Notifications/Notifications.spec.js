import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Notifications from './Notifications';

const notifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: '<strong>Urgent requirement</strong>' },
];

describe('Notifications component', () => {
  test('renders the notifications title', () => {
    render(<Notifications notifications={notifications} />);
    expect(
      screen.getByText(/here is the list of notifications/i),
    ).toBeInTheDocument();
  });

  test('renders a close button', () => {
    render(<Notifications notifications={notifications} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('renders the three notification items', () => {
    render(<Notifications notifications={notifications} />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);
    expect(items[0]).toHaveTextContent('New course available');
    expect(items[1]).toHaveTextContent('New resume available');
    expect(items[2]).toHaveTextContent('Urgent requirement');
  });

  test('renders no item when the notifications prop is not given', () => {
    render(<Notifications />);
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });

  test('logs to the console when the close button is clicked', async () => {
    const user = userEvent.setup();
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications notifications={notifications} />);
    await user.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledWith('Close button has been clicked');
    spy.mockRestore();
  });
});
