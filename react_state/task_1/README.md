# Task 1 - Controlled components and state callback

`Login` is converted into a class component:

- Local state set in the constructor: `isLoggedIn` (`false`), `email` and `password` (empty strings), `enableSubmit` (`false`)
- The inputs are wrapped in a `form`; the button is replaced by an `input` of type `submit`
- `handleLoginSubmit` prevents the page reload and sets `isLoggedIn` to `true`
- `handleChangeEmail` and `handleChangePassword` keep the inputs controlled by the state
- A `setState` callback enables the submit input only when the email is valid (regex) and the password has at least 8 characters

Tests check that the submit input is disabled by default and enabled only when both inputs are valid.
