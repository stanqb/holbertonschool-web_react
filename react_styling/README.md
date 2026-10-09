# React Styling

## Description

This project continues the Holberton School dashboard built in the `React Component` project. All the legacy CSS files are replaced by **TailwindCSS v4** utility classes (integrated through the `@tailwindcss/vite` plugin, without any configuration file). The project covers theme variables, custom fonts, conditional styling, responsive design and animations, while keeping every existing React Testing Library test passing.

## Learning Objectives

- How to integrate TailwindCSS v4 into a Vite + React project with `@tailwindcss/vite`
- How to define theme variables and use Tailwind's layer system in `main.css`
- How to load custom fonts with `@fontsource/roboto`
- How to reference CSS variables inside Tailwind class names
- How to apply classes conditionally based on props
- How to build responsive layouts with Tailwind breakpoints and flexbox
- How to use Tailwind animations

## Requirements

- Ubuntu 20.04 LTS, `node 20.x.x`, `npm 10.x.x`
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- A `README.md` file at the root of the project and in each task folder
- Jest installed globally: `npm install -g jest@29.7.0`
- TailwindCSS v4 (`tailwindcss`, `@tailwindcss/vite`) and `@fontsource/roboto`
- No TailwindCSS configuration file
- No CSS file other than `src/main.css`, and no CSS import in components
- Existing classes and ids must be kept
- Tested on a headless Chrome browser

## Tasks

| # | Task | Main files |
|---|------|------------|
| 0 | **Set TailwindCSS** — install `@tailwindcss/vite`, define the Roboto font in the theme, set it as default font with `@layer`, import Roboto weights 400, 500 and 700 | `task_0/dashboard/src/main.css`, `main.jsx` |
| 1 | **CourseList styles** — `--color-table-header` / `--color-table-rows` variables, conditional row colors and opacity, gray-400 cell borders, left padding, 80% centered table container | `task_1/dashboard/src/main.css`, `CourseList/*.jsx` |
| 2 | **Notifications panel** — `--main-color`, notification type colors, right-aligned title, dashed border, ~25% width, 6px padding; style tests removed from `NotificationItem.spec.js` | `task_2/dashboard/src/main.css`, `Notifications/*.jsx` |
| 3 | **Remaining styles** — convert `Header`, `Login`, `BodySection`, `BodySectionWithMarginBottom` and `Footer` to Tailwind, footer fixed at the bottom | `task_3/dashboard/src/*/*.jsx` |
| 4 | **Go responsive** — full-screen notifications below 912px, responsive text sizes, stacked layouts on small screens, flexbox app container | `task_4/dashboard/src/*/*.jsx` |
| 5 | **Animation** — bounce animation on `Your notifications` when there are notifications and the drawer is closed | `task_5/dashboard/src/Notifications/Notifications.jsx` |

## Usage

```bash
cd task_X/dashboard
npm install
npm run dev     # start the application
npm test        # run the test suite
npm run lint    # check lint errors
```

## Repository

- GitHub repository: `holbertonschool-web_react`
- Directory: `react_styling`

## Author

Stan Queuniez — Holberton School