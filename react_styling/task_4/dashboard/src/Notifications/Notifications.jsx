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
    const { notifications, displayDrawer = false } = this.props;

    return (
      <>
        <div className="notification-title text-right mr-3 mt-1 max-[912px]:mr-6">Your notifications</div>
        {displayDrawer && (
          <div className="Notifications notification-items relative w-1/4 ml-auto mr-3 mt-1 p-1.5 border-[3px] border-dotted border-[color:var(--main-color)] max-[912px]:fixed max-[912px]:inset-0 max-[912px]:z-50 max-[912px]:w-full max-[912px]:h-screen max-[912px]:m-0 max-[912px]:p-3 max-[912px]:bg-white max-[912px]:text-xl">
            {notifications.length > 0 ? (
              <>
                <p className="ml-0.5 mt-0.5 max-[912px]:m-0">Here is the list of notifications</p>
                <button
                  aria-label="Close"
                  className="absolute top-1.5 right-1.5 cursor-pointer max-[912px]:top-3 max-[912px]:right-3"
                  onClick={() => console.log('Close button has been clicked')}
                >
                  <img src={closeButton} alt="close icon" className="w-3 h-3" />
                </button>
                <ul className="list-[square] pl-5 ml-0.5 mb-0.5 max-[912px]:list-none max-[912px]:p-0 max-[912px]:m-0 max-[912px]:mt-0.5">
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
              <p className="ml-0.5 my-0.5 max-[912px]:m-0">No new notification for now</p>
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
};

export default Notifications;
