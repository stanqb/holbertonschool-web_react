# Task 3 - Log Out implementation

- `Header` is a class component using the `contextType` API (`Header.contextType = newContext`)
- When `user.isLoggedIn` is `true` in the context, a section with the id `logoutSection` displays `Welcome email (logout)` under the header
- Clicking on `logout` calls the `logOut` function from the context, provided by the `App` state

Tests check the section with the default context, with a logged in user, and that the logout link calls a `logOut` spy. `App.spec.js` checks the UI updates on login and logout through the state.
