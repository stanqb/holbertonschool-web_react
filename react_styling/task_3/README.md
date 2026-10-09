# Task 3 - Update the remaining styles

All remaining component styles are converted to Tailwind classes, and every CSS file except `src/main.css` is removed.

- `Header`: flexbox layout aligning the logo and the title; the title uses `--main-color`
- `Login`: container with a `--main-color` top border and a flexbox form layout
- `BodySection` / `BodySectionWithMarginBottom`: page spacing, bold `h2` titles and a `40px` bottom margin (`mb-10`)
- `Footer`: `--main-color` top border, centered italic text, fixed to the bottom of the viewport
- `App`: the notifications container is positioned at the top right of the page

All existing classes and ids are kept, and all existing tests still pass.
