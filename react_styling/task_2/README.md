# Task 2 - Update the Notifications Panel

- `src/main.css` defines `--main-color` (`#e1003c`), `--default-notification-item` (`blue`) and `--urgent-notification-item` (`red`)
- `NotificationItem` uses `text-[color:var(--default-notification-item)]` or `text-[color:var(--urgent-notification-item)]` depending on the notification type (no inline style)
- `Notifications` shows the `Your notifications` title at the right on top of the panel; the panel takes about `25%` of the width, with a dashed `--main-color` border and a `6px` padding (`p-1.5`)

`Notifications.css` and its import are removed, and the style assertions are removed from `NotificationItem.spec.js`.
