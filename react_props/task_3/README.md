# Task 3 - React DevTools extension

Inspect the running dashboard with the React Developer Tools extension for
Chrome and capture the results.

## What was done

- `change_property.png`: using the Components tab, the `type` prop of the first
  `NotificationItem` was edited live from `default` to `urgent`. The
  notification colour switches from blue to red, which confirms that the
  inline styling is driven by the prop rather than by a static CSS rule.
- `profiler.png`: the application load was recorded with the Profiler tab. The
  ranked view shows the render duration of each component and identifies which
  one takes the longest to render after `App`.

## Run

```bash
cd dashboard
npm install
npm run dev
```

Open the browser DevTools, then use the Components and Profiler tabs added by
the React Developer Tools extension.
