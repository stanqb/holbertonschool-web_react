import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

describe('CourseList component', () => {
  test('renders 5 rows when it receives a list of courses', () => {
    render(<CourseList courses={listCourses} />);
    expect(screen.getAllByRole('row')).toHaveLength(5);
  });

  test('renders 1 row when the courses array is empty', () => {
    render(<CourseList courses={[]} />);
    expect(screen.getAllByRole('row')).toHaveLength(1);
    expect(screen.getByText('No course available yet')).toBeInTheDocument();
  });

  test('renders 1 row when no courses prop is given', () => {
    render(<CourseList />);
    expect(screen.getAllByRole('row')).toHaveLength(1);
  });

  test('renders the course names and credits', () => {
    render(<CourseList courses={listCourses} />);
    expect(screen.getByText('ES6')).toBeInTheDocument();
    expect(screen.getByText('Webpack')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
  });
});
