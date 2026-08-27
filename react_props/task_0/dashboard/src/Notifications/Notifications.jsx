import closeIcon from '../assets/close-icon.svg';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';

function Notifications() {
  const handleClose = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <button
        type="button"
        aria-label="Close"
        onClick={handleClose}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <img src={closeIcon} alt="close icon" width="12" height="12" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-notification-type="default">New course available</li>
        <li data-notification-type="urgent">New resume available</li>
        <li
          data-notification-type="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}

export default Notifications;
