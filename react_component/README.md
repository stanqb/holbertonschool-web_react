# React Component

## Description

This project continues the Holberton School dashboard built in the `React Props` project. It converts functional components into class components, introduces lifecycle methods, event handling, component containment, Higher-Order Components (HOC), and performance optimization with pure components and `shouldComponentUpdate`. Every feature is covered by tests written with Jest and React Testing Library.

## Learning Objectives

- When to use a class or a function to create a component
- The lifecycle of a class component
- How to test a component
- How to use a Jest spy to verify that a function is called correctly
- What an HOC is and how to use it
- How to optimize performance and control which components re-render

## Requirements

- Ubuntu 20.04 LTS, `node 20.x.x`, `npm 10.x.x`
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files end with a new line
- A `README.md` file at the root of the project and in each task folder
- Jest installed globally: `npm install -g jest@29.7.0`
- No lint errors, no browser console errors or warnings

## Tasks

| # | Task | Main files |
|---|------|------------|
| 0 | **Switch to class components** — convert `App` to a class component; all tests still pass | `task_0/dashboard/src/App/App.jsx` |
| 1 | **Lifecycles** — add a `logOut` prop (default: empty function), listen for `Ctrl + H` on mount, show the alert `Logging you out`, call `logOut`, remove the listener on unmount; test with mocked `window.alert` | `task_1/dashboard/src/App/App.jsx`, `App.spec.js` |
| 2 | **Handling events** — convert `Notifications` and `NotificationItem` to classes, add `markAsRead(id)` logging `Notification {id} has been marked as read`, trigger it on `li` click | `task_2/dashboard/src/Notifications/*` |
| 3 | **Containment** — create `BodySection` (title `h2` + children) and `BodySectionWithMarginBottom` (`margin-bottom: 40px`) with tests | `task_3/dashboard/src/BodySection/*` |
| 4 | **Use the new components** — wrap `CourseList` (`Course list`) and `Login` (`Log in to continue`), add a `News from the School` section | `task_3/dashboard/src/App/App.jsx`, `App.spec.js` |
| 5 | **HOC** — `WithLogging` logs mount/unmount, sets `displayName` to `WithLogging(Name)` (defaults to `Component`); wraps `Login` and `CourseList` | `task_4/dashboard/src/HOC/WithLogging.jsx`, `WithLogging.spec.js` |
| 6 | **Pure component** — make `NotificationItem` a `PureComponent` | `task_5/dashboard/src/Notifications/NotificationItem.jsx` |
| 7 | **Custom pure component** — `Notifications` re-renders only when the length of the `notifications` prop changes (`shouldComponentUpdate`) | `task_5/dashboard/src/Notifications/Notifications.jsx`, `Notifications.spec.js` |

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
- Directory: `react_component`

## Author

Stan Queuniez — Holberton School