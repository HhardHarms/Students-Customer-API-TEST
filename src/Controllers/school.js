const schoolService = require("../Services/school.service");

exports.registerStudent = (req, res) => {
  const { name, level, age, gender, department, score } = req.body;
  schoolService.registerStudent(name, level, age, gender, department, score);
  res.status(201).send("Student registered successfully");
};

exports.getStudentInfo = (req, res) => {
  const studentName = req.params.name;
  const studentInfo = schoolService.getStudentInfo(studentName);
  res.status(200).json(studentInfo);
};

exports.getAllStudentsInfo = (req, res) => {
  const allStudentsInfo = schoolService.getAllStudentsInfo();
  res.status(200).json(allStudentsInfo);
};

exports.addNewStudent = (req, res) => {
  const { name, level, age, gender, department, score } = req.body;
  const newStudent = {
    name: "Daniel",
    level: "Senior",
    age: 18,
    gender: "Male",
    department: "Science",
    score: 90,
  };
  const message = schoolService.addNewStudent(newStudent);
  res.status(201).send(message);
};

exports.deleteStudent = (req, res) => {
  const studentName = req.params.name;
  const message = schoolService.deleteStudent(studentName);
  res.status(200).send(message);
};
