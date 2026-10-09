# Task 5 - Animation

The `Your notifications` title in `Notifications.jsx` uses Tailwind's `animate-bounce` animation, applied conditionally:

- `notifications.length > 0` **and** `displayDrawer` is `false` → the title bounces
- otherwise → no animation

Tests in `Notifications.spec.js` check the three cases.
