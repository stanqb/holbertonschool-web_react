# Task 8 - State Symphony

The Context API is replaced by `useReducer` for centralized state management:

- `src/App/appReducer.js` exports `APP_ACTIONS` (`LOGIN`, `LOGOUT`, `TOGGLE_DRAWER`, `MARK_NOTIFICATION_READ`, `SET_NOTIFICATIONS`, `SET_COURSES`), `initialState` (`displayDrawer: true`, empty `user`, empty `notifications` and `courses`) and `appReducer(state = initialState, action)` with immutable updates
- `App` uses a single `useReducer(appReducer, initialState)`, dispatches actions to toggle the drawer, login/logout, marking notifications as read and the fetched data, and no longer uses the Context Provider
- `Header` and `Footer` receive `user` (and `logOut` for `Header`) as props
- Tests pass props to `Header` and `Footer` and check the reducer behaviour through UI interactions in `App.spec.js`
