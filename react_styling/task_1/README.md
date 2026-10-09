# Task 1 - Update CourseList and CourseListRow styles

- `src/main.css` defines the `--color-table-header` (`#deb5b5`) and `--color-table-rows` (`#CDCDCD`) theme colors
- `CourseListRow` uses `bg-table-header/66` for header rows and `bg-table-rows/45` for other rows, `border-gray-400` borders on all cells and `pl-2` (8px) on `td` elements
- `CourseList` wraps the table in a responsive container taking `80%` of the page width, centered with vertical spacing; the table fills its container (`w-full`), with or without courses

`CourseList.css` and its import are removed. All existing tests still pass.
