# Task 4 - Context consumer & advanced state

- `Footer` (still a function) subscribes to `newContext` with `useContext` and shows a `Contact us` link when the user is logged in
- `App` state holds `notifications` and `courses`; `markNotificationAsRead(id)` logs `Notification {id} has been marked as read` and removes the notification from the state
- `Notifications` is now a `PureComponent` (no more `shouldComponentUpdate`) and uses the `markNotificationAsRead` prop instead of its own `markAsRead`

Tests check the Contact us link with logged out / logged in contexts, the removal and log when clicking a notification in `App`, and the refactored `Notifications` behaviour.
