# Task 5 - High Order Component (HOC)

`src/HOC/WithLogging.jsx` is a Higher-Order Component that wraps any component and:

- logs `Component NAME is mounted` in `componentDidMount()`
- logs `Component NAME is going to unmount` in `componentWillUnmount()`
- sets its `displayName` to `WithLogging(NAME)`, where `NAME` is the wrapped component name (default: `Component`)

`Login` and `CourseList` are exported wrapped with `WithLogging`, so the logs appear when `isLoggedIn` changes.

`WithLogging.spec.js` tests the rendering of a mock class component, the mount/unmount logs and the `displayName`, with `cleanup` after each test.
