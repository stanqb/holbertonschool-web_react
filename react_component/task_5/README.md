# Task 6 - Declare a pure component

`NotificationItem` now extends `React.PureComponent`: it only re-renders when its props or state change (shallow comparison).

The `markAsRead` callback is bound once in the `Notifications` constructor, so its reference stays stable and does not trigger useless re-renders.

# Task 7 - Make your own pure component

`Notifications` implements `shouldComponentUpdate(nextProps)` and only re-renders when the length of the `notifications` prop changes.

Tests in `Notifications.spec.js` use `rerender` to check that the component does not re-render when the length stays the same, and re-renders when it changes.
