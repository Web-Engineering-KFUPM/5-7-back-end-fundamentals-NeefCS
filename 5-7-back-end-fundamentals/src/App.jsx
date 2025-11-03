import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState("");

  // fetch all students
  useEffect(() => {
    fetch("http://localhost:3000/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  // handle form submit
  function handleSubmit(e) {
    e.preventDefault();
    if (!newStudent) return;
    fetch("http://localhost:3000/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newStudent }),
    })
      .then((res) => res.json())
      .then((data) => setStudents([...students, data]));
    setNewStudent("");
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Class Roster</h1>
      <ul>
        {students.map((s, i) => (
          <li key={i}>{s.name}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          value={newStudent}
          onChange={(e) => setNewStudent(e.target.value)}
          placeholder="Enter new student"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
