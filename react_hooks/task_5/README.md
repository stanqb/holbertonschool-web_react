# Task 7 - Custom React hook

- `src/hooks/useLogin.jsx` is a custom hook that receives an `onLogin` callback and manages the login form with React hooks:
  - state: `email`, `password` and `enableSubmit`
  - validation: valid email format and password of at least 8 characters
  - submission: prevents the default behaviour and calls `onLogin(email, password)`
  - returns `{ email, password, enableSubmit, handleChangeEmail, handleChangePassword, handleLoginSubmit }`
- `Login` has no state or handler logic anymore: it calls `useLogin(logIn)` and uses the returned values and handlers

The submit button (`OK`) starts disabled and is enabled only when the email and password are valid.
