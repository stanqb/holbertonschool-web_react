# React Hooks

## Description

This project continues the Holberton School dashboard built in the `React State` project and modernizes it with **functional components and hooks**. Class components and lifecycle methods are replaced by `useState`, `useContext`, `useEffect`, `useCallback` and `memo`. Data is fetched dynamically with Axios, form logic is extracted into a custom hook, and the Context API is finally replaced by centralized state management with `useReducer`. Every step is covered by Jest and React Testing Library tests.

## Learning Objectives

- How to convert class components into functional components
- How to manage local state with `useState` and consume a context with `useContext`
- How to replace `PureComponent` with `React.memo` and a custom comparison function
- How to memoize callbacks with `useCallback` to keep references stable
- How to fetch data as a side effect with `useEffect` and Axios, with error handling and cleanup
- How to mock HTTP requests in tests with `jest-mock-axios`
- How to build a custom hook to reuse form state and validation logic
- How to centralize state with `useReducer`, action types and immutable updates

## Requirements

- Ubuntu 20.04 LTS, `node 20.x.x`, `npm 10.x.x`
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- React is imported only in `main.jsx`, not in individual component files
- All files end with a new line
- A `README.md` file at the root of the project and in each task folder
- Jest installed globally: `npm install -g jest@29.7.0`
- `axios` and `jest-mock-axios` installed for data fetching tasks
- No console errors or warnings, and no lint errors

## Tasks

| # | Task | Main files |
|---|------|------------|
| 0 | **Convert Header** — functional component consuming the context with `useContext`, same JSX, working logout link | `task_0/dashboard/src/Header/Header.jsx` + spec |
| 1 | **Update Footer** — context consumed with `useContext`, conditional `Contact us` link | `task_0/dashboard/src/Footer/Footer.jsx` + spec |
| 2 | **Convert Login** — functional component with `enableSubmit` and `formData` state, same validation, `WithLogging` kept | `task_1/dashboard/src/Login/Login.jsx` + spec |
| 3 | **Update NotificationItem** — functional component wrapped in `memo`, same props and click handler | `task_2/dashboard/src/Notifications/NotificationItem.jsx` + spec |
| 4 | **Update Notifications** — functional component with `memo` and a custom comparison function | `task_3/dashboard/src/Notifications/Notifications.jsx` + spec |
| 5 | **Modernizing the Parent** — `App` with `useState` hooks (`displayDrawer`, `user`, `notifications`), memoized handlers, keydown logic removed | `task_4/dashboard/src/App/App.jsx` + specs |
| 6 | **Side Effect** — notifications and courses fetched with Axios from `public/*.json` in `useEffect`, tested with `jest-mock-axios` | `task_4/dashboard/src/App/App.jsx`, `public/notifications.json`, `public/courses.json` |
| 7 | **Custom React hook** — `useLogin` holds the form state, validation and submit logic used by `Login` | `task_5/dashboard/src/hooks/useLogin.jsx`, `Login/Login.jsx` + spec |
| 8 | **State Symphony** — `appReducer` with `APP_ACTIONS` and `initialState` replaces the Context API; `Header` and `Footer` receive props | `task_6/dashboard/src/App/appReducer.js`, `App/App.js`, `Header/Header.jsx`, `Footer/Footer.jsx` + specs |

## Usage

```bash
cd task_X/dashboard
npm install
npm run dev     # start the application
npm test        # run the test suite
npm run lint    # check lint errors
```

## Repository

- GitHub repository: `holbertonschool-web_react`
- Directory: `react_hooks`

## Author

Stan Queuniez — Holberton School
