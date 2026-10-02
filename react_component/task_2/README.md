# Task 2 - Handling Events

`Notifications` and `NotificationItem` are converted into React class components.

- `Notifications` has a new `markAsRead(id)` method that logs `Notification {id} has been marked as read`
- `markAsRead` and the notification `id` are passed as props to `NotificationItem`
- The `li` element of `NotificationItem` calls `markAsRead(id)` on click

Tests check the console message when an item is clicked (console mock restored) and that the `markAsRead` prop is called on click.
