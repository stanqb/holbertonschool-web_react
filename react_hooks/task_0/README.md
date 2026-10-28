# Task 0 - Convert Header Component

`Header` is converted from a class into a functional component:

- The context is consumed with the `useContext` hook (no more `contextType`)
- The JSX structure is unchanged
- When the user is logged in, `#logoutSection` displays `Welcome email (logout)` and the logout link calls `logOut` from the context
- React itself is not imported in the component (only the `useContext` hook)
