import { useState } from "react";

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Student name cannot be empty.");
      return;
    }
    if (score === "" || isNaN(score) || Number(score) < 0 || Number(score) > 100) {
      setError("Please enter a valid score between 0 and 100.");
      return;
    }

    onAddStudent(name, score);
    setName("");
    setScore("");
    setError("");
  };

  return (
    <div className="form-wrapper">
      <h2 className="section-title">Add New Student</h2>
      <form className="add-form" onSubmit={handleSubmit} noValidate>
        {error && <p className="form-error">{error}</p>}

        <div className="form-group">
          <label htmlFor="student-name" className="form-label">
            Student Name
          </label>
          <input
            id="student-name"
            type="text"
            className="form-input"
            placeholder="e.g. Sneha Gupta"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="student-score" className="form-label">
            Score (0 – 100)
          </label>
          <input
            id="student-score"
            type="number"
            className="form-input"
            placeholder="e.g. 75"
            min="0"
            max="100"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudentForm;
