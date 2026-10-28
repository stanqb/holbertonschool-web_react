import React from 'react';
import PropTypes from 'prop-types';

const mobileClass = 'max-[912px]:border-b max-[912px]:border-black max-[912px]:py-[11px] max-[912px]:pl-2 max-[912px]:text-xl';

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { markAsRead, id } = this.props;
    markAsRead(id);
  }

  render() {
    const { type, html, value } = this.props;
    const colorClass = type === 'urgent'
      ? 'text-[color:var(--urgent-notification-item)]'
      : 'text-[color:var(--default-notification-item)]';

    if (html) {
      return (
        <li
          className={`${colorClass} ${mobileClass}`}
          data-notification-type={type}
          dangerouslySetInnerHTML={{ __html: html }}
          onClick={this.handleClick}
        />
      );
    }

    return (
      <li className={`${colorClass} ${mobileClass}`} data-notification-type={type} onClick={this.handleClick}>
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.string,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
};

export default NotificationItem;
