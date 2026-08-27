# Task 1 - Write the tests for each component

Replace the placeholder specs of task 0 with meaningful unit tests written with
Jest and React Testing Library.

## What was done

- `Header.spec.js`: checks that the Holberton logo is rendered and that the `h1`
  element holds the expected heading text.
- `Login.spec.js`: checks that the form renders 2 `label`, 2 `input` and 1
  `button` elements, and that clicking a label moves the focus to its related
  input, which validates the `htmlFor` / `id` pairing.
- `Footer.spec.js`: checks that the `p` element renders
  `Copyright {the current year} - Holberton School`, the string returned when
  `getFooterCopy()` receives `true` as its `isIndex` argument.
- `App.spec.js` and `Notifications.spec.js` are carried over from task 0 and
  still pass.

## Run

```bash
cd dashboard
npm install
npm test
```

## Requirements met

- All unit tests pass and there is no lint error.
- The browser console shows no error and no warning.
