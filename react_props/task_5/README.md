# Task 5 - Enhance the Notifications component

Give the notifications panel a title that is always visible and a drawer that
can be opened or closed through a prop.

## What was done

- Added a `div.notification-title` holding the text `Your notifications`,
  rendered right before the `div.notification-items` container and displayed in
  every case.
- Added a `displayDrawer` prop, defaulting to `false`. When it is false the
  close button, the `Here is the list of notifications` paragraph and the
  notification items are hidden; when it is true they are all displayed.
- When `displayDrawer` is true and the `notifications` prop is an empty array,
  the component displays `No new notification for now` instead of the list.
- Updated `Notifications.css` so that the title sits above the drawer.
- Extended `Notifications.spec.js` to cover the three rendering cases, always
  asserting that the `Your notifications` text is present.

## Run

```bash
cd dashboard
npm install
npm run dev
npm test
```

## Requirements met

- All unit tests pass and there is no lint error.
- The browser console shows no error and no warning.
