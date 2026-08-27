# Task 0 - Basic components

Split the monolithic `App` component of the React intro project into small,
reusable functional components.

## What was done

- Created a `Header` folder with `Header.jsx`, `Header.css` and `Header.spec.js`,
  holding the logo and the `h1` heading previously written in `App.jsx`.
- Created a `Footer` folder with `Footer.jsx`, `Footer.css` and `Footer.spec.js`,
  holding the copyright paragraph.
- Created a `Login` folder with `Login.jsx`, `Login.css` and `Login.spec.js`,
  holding the login form (labels, inputs and submit button).
- Moved every component-related rule out of `App.css` into the matching CSS file.
- Turned `App.jsx` into the shell of the application: it imports `Notifications`,
  `Header`, `Login` and `Footer` and renders them, in that order, inside a
  React `<Fragment>`.
- Added a spec file for each new component checking that it renders without crashing.

## Run

```bash
cd dashboard
npm install
npm run dev
npm test
```

## Requirements met

- The page layout is identical to the one rendered by the React intro project.
- The browser console shows no error and no warning.
- All unit tests pass and there is no lint error.
