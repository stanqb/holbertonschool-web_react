# Task 2 - Convert Login component

`Login` is converted from a class into a functional component (still wrapped with the `WithLogging` HOC):

- `enableSubmit` / `setEnableSubmit` state, initial value `false`
- `formData` / `setFormData` state, initial value `{ email: '', password: '' }`
- `handleChangeEmail` and `handleChangePassword` update `formData` while keeping the other value, then update `enableSubmit` (valid email and password of at least 8 characters)
- `handleLoginSubmit` always prevents the default form submission and calls the `logIn` prop with the current email and password

The JSX structure is unchanged and React itself is not imported in the component.
