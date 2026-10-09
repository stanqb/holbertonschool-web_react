import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
  test('renders one th with a colspan of 2 when textSecondCell is null', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader textFirstCell="Available courses" />
        </tbody>
      </table>,
    );
    const headers = screen.getAllByRole('columnheader');
    expect(headers).toHaveLength(1);
    expect(headers[0]).toHaveAttribute('colspan', '2');
  });

  test('renders two th cells when textSecondCell is not null', () => {
    render(
      <table>
        <tbody>
          <CourseListRow
            isHeader
            textFirstCell="Course name"
            textSecondCell="Credit"
          />
        </tbody>
      </table>,
    );
    expect(screen.getAllByRole('columnheader')).toHaveLength(2);
  });

  test('renders two td cells within a tr when isHeader is false', () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow textFirstCell="ES6" textSecondCell="60" />
        </tbody>
      </table>,
    );
    const row = container.querySelector('tr');
    expect(row).toBeInTheDocument();
    expect(row.querySelectorAll('td')).toHaveLength(2);
    expect(screen.getAllByRole('cell')).toHaveLength(2);
  });
});
