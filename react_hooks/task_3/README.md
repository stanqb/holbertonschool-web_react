# Task 4 - Update the Notifications component

`Notifications` is converted from a `PureComponent` class into a functional component wrapped with `memo(Notifications, areEqual)`:

- `areEqual` returns `true` (no re-render) while the notifications length and `displayDrawer` stay the same, and `false` (re-render) when one of them changes
- All previous features still work: open on title click, close button (with its log), bounce animation, responsive panel, `markNotificationAsRead` passed to each `NotificationItem`
- Default values are set in the props destructuring (no `defaultProps`, no React import)

Tests check the memo comparison: no re-render with the same length and drawer state, re-render when the length or `displayDrawer` changes.
