# Task 4 - CourseList & CourseListRow

Add a course table to the dashboard and display it only once the user is
logged in.

## What was done

- Created `CourseListRow`, which returns a `tr` and renders either header cells
  or data cells depending on `isHeader`. When `isHeader` is true and
  `textSecondCell` is null it renders a single `th` spanning two columns,
  otherwise two `th`; when `isHeader` is false it renders two `td`.
- Created `CourseList`, a `table#CourseList` with a `thead` holding the two
  header rows and a `tbody` mapping over the `courses` prop, falling back to a
  single `No course available yet` row when the array is empty.
- Added `CourseList.css` for the table styling.
- `App` now owns a `coursesList` array and an `isLoggedIn` flag, defaulting to
  false, and renders either the `Login` form or the `CourseList` table.
- Added specs for both components and extended `App.spec.js` to cover the two
  logged-in states.

## Run

```bash
cd dashboard
npm install
npm run dev
npm test
```

## Requirements met

- The browser console shows no error and no warning.
- All unit tests pass and there is no lint error.
