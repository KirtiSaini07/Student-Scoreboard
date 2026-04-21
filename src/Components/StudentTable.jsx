import StudentRow from "./StudentRow";

function StudentTable({ students, onScoreChange }) {
  return (
    <div className="table-wrapper">
      <h2 className="section-title">Student Records</h2>
      <div className="table-scroll">
        <table className="student-table">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Student Name</th>
              <th>Score</th>
              <th>Update Score</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan="5" className="empty-msg">No students found. Add one below!</td>
              </tr>
            ) : (
              students.map((student, index) => (
                <StudentRow
                  key={student.id}
                  student={student}
                  index={index + 1}
                  onScoreChange={onScoreChange}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentTable;
