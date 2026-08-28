import './Notifications.css';
import closeButton from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

function Notifications({ displayDrawer = false, notifications = [] }) {
  return (
    <>
      <div className="notification-title">Your notifications</div>
      {displayDrawer && (
        <div className="notification-items">
          {notifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <>
              <p>Here is the list of notifications</p>
              <ul>
                {notifications.map(({ id, type, html, value }) => (
                  <NotificationItem
                    key={id}
                    type={type}
                    html={html}
                    value={value}
                  />
                ))}
              </ul>
            </>
          )}
          <button
            type="button"
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => console.log('Close button has been clicked')}
          >
            <img src={closeButton} alt="close icon" width="15" height="15" />
          </button>
        </div>
      )}
    </>
  );
}

export default Notifications;
