import './Notifications.css';
import closeButton from './assets/close-button.png';
import { getLatestNotification } from './utils';

function Notifications() {
  return (
    <div className="notification-items">
      <p>Here is the list of notifications</p>

      <button
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
      >
        <img src={closeButton} alt="close icon" width="15px" />
      </button>

      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}

export default Notifications;
