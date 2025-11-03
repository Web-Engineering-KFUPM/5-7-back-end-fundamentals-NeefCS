import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// initial data
let students = [
  { name: "Aisha" },
  { name: "Hasan" },
];

// get all students
app.get("/api/students", (req, res) => {
  res.json(students);
});

// add new student
app.post("/api/students", (req, res) => {
  const newStudent = req.body;
  students.push(newStudent);
  res.json(newStudent);
});

app.listen(3000, () => {
  console.log("✅ API running at http://localhost:3000");
});
