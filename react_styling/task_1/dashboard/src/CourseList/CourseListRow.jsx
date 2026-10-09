const headerRowClass = 'bg-table-header/66';
const rowClass = 'bg-table-rows/45';
const cellClass = 'border border-gray-400';

function CourseListRow({ isHeader = false, textFirstCell = '', textSecondCell = null }) {
  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr className={headerRowClass}>
          <th colSpan="2" className={cellClass}>{textFirstCell}</th>
        </tr>
      );
    }
    return (
      <tr className={headerRowClass}>
        <th className={cellClass}>{textFirstCell}</th>
        <th className={cellClass}>{textSecondCell}</th>
      </tr>
    );
  }

  return (
    <tr className={rowClass}>
      <td className={`${cellClass} pl-2`}>{textFirstCell}</td>
      <td className={`${cellClass} pl-2`}>{textSecondCell}</td>
    </tr>
  );
}

export default CourseListRow;
