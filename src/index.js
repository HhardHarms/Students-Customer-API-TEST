// TEST QUESTION

// Using 00P, and an instance of this class that keeps running till a user says NO.

// 1. Design a banking system that;
//    (i.) Allows a user register.
//    (ii.) Views his/her account balance.
//    (iii.) Add money to his/her balance.
//    (iv.) Transfer to another user.

// 2. A class for SCHOOL;
//     (i.) That allows students register.
//     (ii.) Get list of students, score, grade and other info.
//     (iii.)Get a single student, score, grade and other info.
//
//
//
//          ANSWERS
//
//       POSTMAN ROUTES
//
// 1. (i.) GET:- http://localhost:7070/api/user
//
// (ii.)
//      GET:-
//
//      - http://localhost:7070/api/user/1/balance
//      - http://localhost:7070/api/user/2/balance
//      - http://localhost:7070/api/user/3/balance
//      - http://localhost:7070/api/user/4/balance
//      - http://localhost:7070/api/user/5/balance
//
//
// (111.)
//       PUT:-
//
//          - http://localhost:7070/api/user/1/balance
//          - http://localhost:7070/api/user/2/balance
//          - http://localhost:7070/api/user/3/balance
//          - http://localhost:7070/api/user/4/balance
//          - http://localhost:7070/api/user/5/balance
//
//  (iv.)
//       POST:- http://localhost:7070/api/user/transfer
//
//  2. (i.) POST:- http://localhost:7070/students/register
//
//     (ii.) GET:- http://localhost:7070/students
//
//     (iii.) GET:- http://localhost:7070/students/"student's name"
//
//     (iv.) POST:- http://localhost:7070/students/add
//
//     (V.) DELETE:- http://localhost:7070/students/"student's name"

const express = require("express");
const port = 7070;

const userRoutes = require("./Routes/user.routes");
const studentRoutes = require("./Routes/school.routes");
const app = express();

app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/students", studentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
