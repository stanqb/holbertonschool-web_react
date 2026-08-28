function NotificationItem({ type = 'default', html, value }) {
  const style = { color: type === 'urgent' ? 'red' : 'blue' };
  const markup =
    typeof html === 'string' ? { __html: html } : html || undefined;

  if (markup && markup.__html) {
    return (
      <li
        data-notification-type={type}
        style={style}
        dangerouslySetInnerHTML={markup}
      />
    );
  }

  return (
    <li data-notification-type={type} style={style}>
      {value}
    </li>
  );
}

export default NotificationItem;
