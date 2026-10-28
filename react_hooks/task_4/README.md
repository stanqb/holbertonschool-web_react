# Task 5 - Modernizing the Parent

`App` is converted from a class into a functional component:

- `displayDrawer` / `setDisplayDrawer` (initial value `true`), `user` / `setUser` (initial value: the context user object) and `notifications` / `setNotifications` (initial value: `notificationsList`) are created with `useState`
- `handleDisplayDrawer`, `handleHideDrawer`, `logIn`, `logOut` and `markNotificationAsRead` are memoized with `useCallback` and update the state immutably
- The context Provider value is memoized with `useMemo`
- `handleKeyDown` and the lifecycle methods are removed; React itself is not imported

`App.spec.js` tests the drawer handlers, the user updates made by `logIn` and `logOut`, and `markNotificationAsRead` through the UI.

# Task 6 - Side Effect

- `public/notifications.json` and `public/courses.json` hold the data previously hardcoded in `App`
- `notifications` and `courses` start as empty arrays and are fetched with Axios inside `useEffect`
  - notifications: fetched once when `App` mounts (`[]` dependencies), the latest notification html comes from `getLatestNotification()`
  - courses: fetched whenever the `user` state changes (`[user]` dependencies)
- Each effect uses `try/catch` (errors logged in development only) and a cleanup flag
- Tests mock Axios with `jest-mock-axios` (`"^axios$": "jest-mock-axios"` in `moduleNameMapper`)
