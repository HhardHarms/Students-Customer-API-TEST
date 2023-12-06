class Student {
  constructor(name, level, age, gender, department, score) {
    this.name = name;
    this.level = level;
    this.age = age;
    this.gender = gender;
    this.department = department;
    this.score = score;
  }

  getGrade() {
    if (this.score >= 70) {
      return "A";
    } else if (this.score >= 60) {
      return "B";
    } else if (this.score >= 50) {
      return "C";
    } else if (this.score >= 40) {
      return "D";
    } else {
      return "F";
    }
  }
}

const students = [
  new Student("Alice", "Junior", 16, "Female", "Science", 85),
  new Student("Bob", "Senior", 17, "Male", "Arts", 75),
  new Student("Carol", "Sophomore", 15, "Female", "Mathematics", 60),
  new Student("David", "Freshman", 18, "Male", "History", 90),
  new Student("Eva", "Senior", 17, "Female", "Science", 78),
  new Student("Frank", "Junior", 16, "Male", "Arts", 55),
  new Student("Grace", "Sophomore", 15, "Female", "Mathematics", 70),
  new Student("Henry", "Freshman", 18, "Male", "Science", 65),
  new Student("Ivy", "Senior", 17, "Female", "History", 80),
  new Student("Jack", "Junior", 16, "Male", "Arts", 72),
];

class SchoolService {
  constructor() {
    this.students = students; // Array to store student objects
  }

  registerStudent(name, level, age, gender, department, score) {
    const newStudent = new Student(name, level, age, gender, department, score);
    this.students.push(newStudent); // Add the new student to the array
  }

  getStudentInfo(studentName) {
    const student = this.students.find(
      (student) => student.name === studentName
    );
    if (student) {
      return {
        name: student.name,
        level: student.level,
        age: student.age,
        gender: student.gender,
        department: student.department,
        score: student.score,
        grade: student.getGrade(),
      };
    } else {
      return "Student not found";
    }
  }

  getAllStudentsInfo() {
    return this.students.map((student) => ({
      name: student.name,
      level: student.level,
      age: student.age,
      gender: student.gender,
      department: student.department,
      score: student.score,
      grade: student.getGrade(),
    }));
  }

  addNewStudent(newStudent) {
    const existingStudent = this.students.find(
      (student) => student.name === newStudent.name
    );
    if (existingStudent) {
      return "Student already exists";
    } else {
      this.students.push(newStudent);
      return "New student added successfully";
    }
  }

  deleteStudent(studentName) {
    const studentIndex = this.students.findIndex(
      (student) => student.name === studentName
    );
    if (studentIndex !== -1) {
      this.students.splice(studentIndex, 1);
      return "Student deleted successfully";
    } else {
      return "Student not found";
    }
  }
}

module.exports = new SchoolService();
