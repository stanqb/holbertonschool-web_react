# Task 2 - Separation of Concerns

Move the notification data up to the `App` component and extract the repeated
`li` markup into its own reusable component.

## What was done

- `App` now owns a `notificationsList` array whose items hold an `id`, a `type`
  and either a `value` or an `html` string, and passes it down through the
  `notifications` prop.
- Created `NotificationItem`, a functional component rendering a single `li`.
  It accepts `type`, `html` and `value`, sets `data-notification-type` from the
  `type` prop, and conditionally renders either the raw HTML through
  `dangerouslySetInnerHTML` or the plain `value` text.
- The item colour is applied with inline styling, blue for default
  notifications and red for urgent ones, and the matching rules were removed
  from `Notifications.css`.
- `Notifications` accepts the `notifications` prop, defaulting to an empty
  array, and maps over it to render one `NotificationItem` per entry, using the
  notification `id` as the React `key`.
- Added `NotificationItem.spec.js` covering the colour and the
  `data-notification-type` attribute for both types, and extended
  `Notifications.spec.js` to assert that the three items render with the
  expected text.

## Run

```bash
cd dashboard
npm install
npm run dev
npm test
```

## Requirements met

- The dashboard still renders the same design.
- The browser console shows no error and no warning.
- All unit tests pass and there is no lint error.
