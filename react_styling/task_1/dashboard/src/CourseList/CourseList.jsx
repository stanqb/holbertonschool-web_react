import WithLogging from '../HOC/WithLogging';
import CourseListRow from './CourseListRow';

function CourseList({ courses = [] }) {
  return (
    <div className="relative overflow-x-auto w-4/5 mx-auto my-32">
      {courses.length === 0 ? (
        <table id="CourseList" className="w-full">
          <thead>
            <CourseListRow textFirstCell="No course available yet" />
          </thead>
        </table>
      ) : (
        <table id="CourseList" className="w-full">
          <thead>
            <CourseListRow textFirstCell="Available courses" isHeader />
            <CourseListRow
              textFirstCell="Course name"
              textSecondCell="Credit"
              isHeader
            />
          </thead>
          <tbody>
            {courses.map(({ id, name, credit }) => (
              <CourseListRow
                key={id}
                textFirstCell={name}
                textSecondCell={credit}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default WithLogging(CourseList);
