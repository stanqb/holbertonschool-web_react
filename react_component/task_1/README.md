# Task 1 - Lifecycles

Lifecycle methods are added to the `App` class component:

- New `logOut` prop (default: empty function)
- A `keydown` listener is added in `componentDidMount` and removed in `componentWillUnmount`
- Pressing `Control` + `h` shows the alert `Logging you out` and calls `logOut`

Tests in `App.spec.js` check that `logOut` is called once and that `window.alert` is called with `Logging you out` (the alert mock is restored after each test).
