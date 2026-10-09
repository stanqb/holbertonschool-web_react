# Task 4 - Go Responsive

The dashboard adapts to small screens with Tailwind breakpoints (`max-[912px]` and `max-[520px]`):

- `App`: flex column container (`min-h-screen`) so the footer sticks to the bottom; the long text is used in `News from the School`
- `Notifications`: below `912px` the panel becomes full screen (`fixed`, `z-50`, white background, `12px` padding), without bullets
- `NotificationItem`: bigger text, bottom border and padding on small screens
- `Header`: logo and title stacked and centered below `520px`, smaller title
- `Login`: vertical form with wider inputs below `520px`
- `CourseList`: responsive table container (80% width, horizontal scroll if needed)
- `Footer`: kept at the bottom of the layout, smaller text on small screens
