# Task 3 - Reusable components & specialization

New components in `src/BodySection/`:

- `BodySection`: renders a `div.bodySection` with an `h2` title (from the `title` prop) followed by its children (containment)
- `BodySectionWithMarginBottom`: wraps `BodySection` in a `div.bodySectionWithMargin` and passes all its props to it (specialization)
- `BodySectionWithMarginBottom.css`: sets a `40px` bottom margin on `.bodySectionWithMargin`

Tests check the title heading, the rendering of any number of children, the wrapper class and the rendering of `BodySection`.
