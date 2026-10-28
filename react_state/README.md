# React State

## Description

This project continues the Holberton School dashboard built in the `React Styling` project. Now that the application is modular and styled, it adds **logic and state**: local component state, controlled form components, state callbacks, React Context (provider, `contextType` and consumer), login / logout flows and advanced state management of notifications and courses. Every feature is covered by Jest and React Testing Library tests.

## Learning Objectives

- How to create and update a local state in a class component
- How to lift state up and pass callbacks as props
- How to build controlled components and validate a form in real time
- How to use a state callback to enable or disable a submit button
- How to create a React Context and provide values with a Provider
- How to consume a context with `contextType` (class) and `Context.Consumer` / hooks (function)
- How to avoid useless re-renders caused by Context reference identity
- How to test state changes, callbacks and context-dependent rendering with spies

## Requirements

- Ubuntu 20.04 LTS, `node 20.x.x`, `npm 10.x.x`
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- A `README.md` file at the root of the project and in each task folder
- Jest installed globally: `npm install -g jest@29.7.0`
- No console errors and no linting errors

## Tasks

| # | Task | Main files |
|---|------|------------|
| 0 | **Local state for notifications** — `displayDrawer` state in `App`, `handleDisplayDrawer` / `handleHideDrawer` passed to `Notifications` (title click opens, close button hides), `shouldComponentUpdate` updated | `task_0/dashboard/src/App/App.jsx`, `Notifications/Notifications.jsx` + specs |
| 1 | **Controlled components and state callback** — `Login` as a class with `form`, `email` / `password` controlled inputs, `handleLoginSubmit` without page reload, submit enabled only for a valid email and an 8+ characters password | `task_1/dashboard/src/Login/Login.jsx`, `Login.spec.js` |
| 2 | **Context** — `newContext` with a default user and `logOut`, `logIn` / `logOut` methods in `App` state, Provider wrapping the app, `Login` calling `logIn` | `task_2/dashboard/src/Context/context.js`, `App/App.jsx`, `Login/Login.jsx` + specs |
| 3 | **Log out implementation** — `Header` uses `contextType`, shows `Welcome email (logout)` in `#logoutSection` when logged in, the link calls `logOut` | `task_3/dashboard/src/Header/Header.jsx`, `App/App.jsx` + specs |
| 4 | **Context consumer & advanced state** — `Footer` subscribed to the context shows a `Contact us` link when logged in; `notifications` / `courses` in `App` state, `markNotificationAsRead` removes a notification; `Notifications` becomes a `PureComponent` | `task_4/dashboard/src/Footer/Footer.jsx`, `App/App.jsx`, `Notifications/Notifications.jsx` + specs |

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
- Directory: `react_state`

## Author

Stan Queuniez — Holberton School
