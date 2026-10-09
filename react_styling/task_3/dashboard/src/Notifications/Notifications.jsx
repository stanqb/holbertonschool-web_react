import React from 'react';
import PropTypes from 'prop-types';
import closeButton from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const { notifications } = this.props;
    return nextProps.notifications.length !== notifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { notifications, displayDrawer } = this.props;

    return (
      <>
        <div className="notification-title text-right mr-3 mt-1">Your notifications</div>
        {displayDrawer && (
          <div className="Notifications notification-items relative w-1/4 ml-auto mr-3 mt-1 p-1.5 border-[3px] border-dotted border-[color:var(--main-color)]">
            {notifications.length > 0 ? (
              <>
                <p className="ml-0.5 mt-0.5">Here is the list of notifications</p>
                <button
                  aria-label="Close"
                  className="absolute top-1.5 right-1.5 cursor-pointer"
                  onClick={() => console.log('Close button has been clicked')}
                >
                  <img src={closeButton} alt="close icon" className="w-3 h-3" />
                </button>
                <ul className="list-[square] pl-5 ml-0.5 mb-0.5">
                  {notifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      id={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </>
            ) : (
              <p className="ml-0.5 my-0.5">No new notification for now</p>
            )}
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.string,
    }),
  ),
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  notifications: [],
  displayDrawer: false,
};

export default Notifications;
