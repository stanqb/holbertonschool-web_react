import { memo } from 'react';
import PropTypes from 'prop-types';

const mobileClass = 'max-[912px]:border-b max-[912px]:border-black max-[912px]:py-[11px] max-[912px]:pl-2 max-[912px]:text-xl';

function NotificationItem({
  id,
  type = 'default',
  value,
  html,
  markAsRead = () => {},
}) {
  const colorClass = type === 'urgent'
    ? 'text-[color:var(--urgent-notification-item)]'
    : 'text-[color:var(--default-notification-item)]';

  const handleClick = () => {
    markAsRead(id);
  };

  if (html) {
    return (
      <li
        className={`${colorClass} ${mobileClass}`}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={handleClick}
      />
    );
  }

  return (
    <li className={`${colorClass} ${mobileClass}`} data-notification-type={type} onClick={handleClick}>
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  markAsRead: PropTypes.func,
};

export default memo(NotificationItem);
