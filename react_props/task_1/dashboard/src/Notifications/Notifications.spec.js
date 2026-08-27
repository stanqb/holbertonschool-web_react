import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('renders the notifications title', () => {
    render(<Notifications />);
    expect(
      screen.getByText('Here is the list of notifications'),
    ).toBeInTheDocument();
  });

  test('renders three list items', () => {
    render(<Notifications />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('logs a message when the close button is clicked', async () => {
    const user = userEvent.setup();
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications />);
    await user.click(screen.getByRole('button', { name: /close/i }));
    expect(spy).toHaveBeenCalledWith('Close button has been clicked');
    spy.mockRestore();
  });
});
