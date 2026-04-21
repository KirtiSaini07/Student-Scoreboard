import { useState } from "react";
import Header from "./Components/Header";
import StudentTable from "./Components/StudentTable";
import AddStudentForm from "./Components/AddStudentForm";
import "./App.css";

const initialStudents = [
  { id: 1, name: "Aarush Verma", score: 30 },
  { id: 2, name: "Priya Mehta", score: 87 },
  { id: 3, name: "Rohan Sharma", score: 92 },
  { id: 4, name: "Suhani Singh", score: 35 },
  { id: 5, name: "Kavya Gupta", score: 74 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);

  const handleScoreChange = (id, newScore) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, score: Number(newScore) } : s
      )
    );
  };

  const handleAddStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      score: Number(score),
    };
    setStudents((prev) => [...prev, newStudent]);
  };

  const totalStudents = students.length;
  const passed = students.filter((s) => s.score >= 40).length;
  const failed = totalStudents - passed;
  const avgScore = totalStudents
    ? Math.round(students.reduce((sum, s) => sum + s.score, 0) / totalStudents)
    : 0;

  return (
    <div className="app-wrapper">
      <Header />
      <div className="stats-bar">
        <div className="stat-card total">
          <span className="stat-num">{totalStudents}</span>
          <span className="stat-label">Total Students</span>
        </div>
        <div className="stat-card pass">
          <span className="stat-num">{passed}</span>
          <span className="stat-label">Passed</span>
        </div>
        <div className="stat-card fail">
          <span className="stat-num">{failed}</span>
          <span className="stat-label">Failed</span>
        </div>
        <div className="stat-card avg">
          <span className="stat-num">{avgScore}</span>
          <span className="stat-label">Avg Marks</span>
        </div>
      </div>
      <div className="main-content">
        <StudentTable students={students} onScoreChange={handleScoreChange} />
        <AddStudentForm onAddStudent={handleAddStudent} />
      </div>
    </div>
  );
}

export default App;