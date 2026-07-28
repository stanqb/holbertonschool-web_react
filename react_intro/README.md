# React Intro

## Description

This project is an introduction to **React**, built with **Vite** as the build tool and tested with **Jest** and **React Testing Library**. It is part of the Holberton School front-end curriculum (`holbertonschool-web_react`).

Across six progressive tasks, a simple school dashboard is built from scratch: starting with a static header, body and footer, then adding components, embedded expressions, a sign-in form, a notifications panel, a full test suite, a GitHub Pages deployment, and finally a reorganised folder structure.

## Learning Objectives

- How to create a basic React application using Vite
- How to use JSX and render nested React components
- How to embed JavaScript expressions and functions inside JSX
- How to write tests for React components with Jest and React Testing Library
- How to simulate user events in tests
- How to deploy a React application to GitHub Pages
- How to structure a React project into feature folders

## Requirements

- Node.js and npm installed
- Each task folder contains its own self-contained `dashboard` application
- All components are written as functional components
- ESLint must pass without errors on every task

## Tooling

| Tool | Purpose |
|---|---|
| Vite | Development server and build tool |
| Jest | Test runner |
| React Testing Library | Component testing utilities |
| Babel | JSX and modern JavaScript transpilation for Jest |
| ESLint | Static analysis and code style |
| gh-pages | Deployment to GitHub Pages |

## Project Structure

```
react_intro/
|-- task_0/dashboard/       Basic application + first tests
|-- task_1/dashboard/       Expressions, functions, Notifications component
|-- task_2/dashboard/       Sign-in form + notifications list
|-- task_3/dashboard/       Utility and Notifications test suites
|-- task_4/dashboard/       GitHub Pages deployment
|-- task_5/dashboard/       Reorganised folder structure
`-- README.md
```

## Tasks

### Task 0 - Basic application

Scaffold a Vite React application named `dashboard`. Remove the unused starter files, set the page title to `Holberton - School dashboard`, and use the Holberton logo as the favicon.

The `App` component renders three sections:

- `App-header` with the Holberton logo and an `h1` reading `School dashboard`
- `App-body` with a paragraph inviting the user to log in
- `App-footer` with a copyright line

Jest is configured at the end of `package.json`, alongside `.babelrc`, `setupTests.js` and `fileTransformer.js` for handling static assets in tests.

### Task 1 - Basic tests

First test suite in `App.spec.js`, verifying that the heading, the two paragraphs and the logo image are rendered. Queries are case-insensitive and the image is matched by its `alt` text for robustness.

### Task 2 - Embedding expressions and functions

Introduces `utils.js` with `getCurrentYear()` and `getFooterCopy(isIndex)`, both consumed by the footer. Adds a `Notifications` component rendered as a child of `App`.

### Task 3 - Modify the App

Adds a sign-in form to the body: labelled email and password inputs plus an OK button. Labels are correctly associated with their inputs so clicking a label focuses the matching field.

### Task 4 - Test the sign-in form

Extends `App.spec.js` to assert that both inputs, both labels and the submit button are present.

### Task 5 - Update the Notifications

Adds `getLatestNotification()` to the utilities and fleshes out the notifications panel: a close button with an `aria-label`, an icon, and a list of three notifications carrying `data-priority` attributes. The most urgent entry is injected with `dangerouslySetInnerHTML`.

### Task 6 - Utils tests

Unit tests for the three utility functions. The year assertion is computed rather than hard-coded, so the suite does not break next January.

### Task 7 - Test the notifications list

Tests the notifications title, the close button, the three list items, and verifies that clicking the button logs the expected message to the console.

### Task 8 - Deploy to GitHub Pages

Deploys the application to the `gh-pages` branch, with the resulting URL recorded in `holberton-dashboard.txt`.

### Task 9 - Reorganize the files

Restructures the source tree into feature folders (`App/`, `Notifications/`, `utils/`, `assets/`), updating every import so the full test suite still passes.

## Usage

Each task is independent. Move into the desired dashboard folder, install dependencies, then start the dev server:

```bash
cd task_0/dashboard
npm install
npm run dev
```

Run the test suite:

```bash
npm test
```

Check for lint errors:

```bash
npm run lint
```

## Notes

- `node_modules/` and `dist/` must not be committed to the repository.
- Image filenames must be kept as provided: `holberton-logo.jpg`, `close-button.png`, `favicon.ico`.
- Jest must be declared as the test runner in the ESLint configuration so test globals do not raise lint errors.

## Author

Stan QUEUNIEZ - Holberton School - React Intro project