# Task 2 - Context

- `src/Context/context.js` creates `newContext` (default export only) with a default `user` (`email`, `password`, `isLoggedIn: false`) and an empty `logOut` function
- `App` state holds `displayDrawer`, a `user` object mirroring the context and a `logOut` property
- `logIn(email, password)` logs the user in; `logOut()` resets the user
- The `isLoggedIn` and `logOut` props are removed: `App` renders `CourseList` or `Login` from its state
- The whole app is wrapped in `newContext.Provider` with `value={this.state}` (no object created in the value prop)
- `Login` gets `email` and `password` from its props and calls the `logIn` prop on submit

Tests check the login flow through the state and that `logIn` is called with the entered email and password.
