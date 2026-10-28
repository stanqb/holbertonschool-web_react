# Task 0 - Adding a local state for notifications

- `App` stores `displayDrawer` in its local state (default `false`, set in the constructor)
- `handleDisplayDrawer` sets `displayDrawer` to `true`, `handleHideDrawer` sets it to `false`; both are passed to `Notifications` with the state value
- In `Notifications`, clicking `Your notifications` calls `handleDisplayDrawer` and the close button calls `handleHideDrawer`
- `shouldComponentUpdate` also re-renders when `displayDrawer` changes

Tests use spies to check both handlers, and `App.spec.js` checks the panel opens and closes through the state.
