# Task 3 - Reusable components & specialization

New components in `src/BodySection/`:

- `BodySection`: renders a `div.bodySection` with an `h2` title (from the `title` prop) followed by its children (containment)
- `BodySectionWithMarginBottom`: wraps `BodySection` in a `div.bodySectionWithMargin` and passes all its props to it (specialization)
- `BodySectionWithMarginBottom.css`: sets a `40px` bottom margin on `.bodySectionWithMargin`

Tests check the title heading, the rendering of any number of children, the wrapper class and the rendering of `BodySection`.

# Task 4 - Use the new components

In `App.jsx`:

- `CourseList` is wrapped in `BodySectionWithMarginBottom` with the title `Course list`
- `Login` is wrapped in `BodySectionWithMarginBottom` with the title `Log in to continue`
- A `BodySection` titled `News from the School` displays the paragraph `Holberton School News goes here`

A test in `App.spec.js` checks that the news title and paragraph are displayed by default.
