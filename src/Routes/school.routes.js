const express = require("express");
const router = express.Router();
const studentController = require("../Controllers/school");

router.post("/register", studentController.registerStudent);
router.get("/:name", studentController.getStudentInfo);
router.get("/", studentController.getAllStudentsInfo);
router.post("/add", studentController.addNewStudent);
router.delete("/:name", studentController.deleteStudent);

module.exports = router;
