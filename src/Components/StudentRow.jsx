import { useState } from "react";

function StudentRow({ student, index, onScoreChange }) {
  const [inputScore, setInputScore] = useState(student.score);
  const isPassed = student.score >= 40;

  const handleUpdate = () => {
    onScoreChange(student.id, inputScore);
  };

  return (
    <tr className={`student-row ${isPassed ? "row-pass" : "row-fail"}`}>
      <td className="cell-index">{index}</td>
      <td className="cell-name">{student.name}</td>
      <td className="cell-score">{student.score}</td>
      <td className="cell-update">
        <div className="update-group">
          <input
            type="number"
            min="0"
            max="100"
            value={inputScore}
            onChange={(e) => setInputScore(e.target.value)}
            className="score-input"
          />
          <button
            onClick={handleUpdate}
            className="update-btn"
          >
            Update
          </button>
        </div>
      </td>
      <td className="cell-status">
        <span className={`badge ${isPassed ? "badge-pass" : "badge-fail"}`}>
          {isPassed ? "Pass" : "Fail"}
        </span>
      </td>
    </tr>
  );
}

export default StudentRow;
