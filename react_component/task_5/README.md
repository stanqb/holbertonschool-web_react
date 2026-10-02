# Task 6 - Declare a pure component

`NotificationItem` now extends `React.PureComponent`: it only re-renders when its props or state change (shallow comparison).

The `markAsRead` callback is bound once in the `Notifications` constructor, so its reference stays stable and does not trigger useless re-renders.
