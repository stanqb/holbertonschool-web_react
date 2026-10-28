# Task 3 - Update the NotificationItem component

`NotificationItem` is converted from a `PureComponent` class into a functional component wrapped with `memo`:

- Same props (`id`, `type`, `value`, `html`, `markAsRead`) and same JSX
- `memo` keeps the PureComponent optimization: the item only re-renders when its props change
- Clicking an item still calls `markAsRead(id)`
- Default values are set in the props destructuring (no `defaultProps`, no React import)
