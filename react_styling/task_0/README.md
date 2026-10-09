# Task 0 - Set TailwindCSS

TailwindCSS v4 is integrated with the `@tailwindcss/vite` plugin (no Tailwind configuration file).

- `src/main.css` imports Tailwind, defines the Roboto font family in `@theme` (`--font-roboto`) and sets it as the default font in `@layer base`
- `src/main.jsx` imports Roboto weights `400` (body text), `500` (semi-emphasized text) and `700` (headings) from `@fontsource/roboto`

All existing React Testing Library tests still pass.
