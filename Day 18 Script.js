import student from "./Day 18 student.js";

import {
    calculateGrade,
    checkResult
} from "./Day 18 grade.js";

const Grade=calculateGrade(student.marks);
const Result=checkResult(student.marks);
const { name, marks } = student;

console.log(
    `Name: ${name}
Marks: ${marks}
Grade: ${Grade}
Result: ${Result}`
);
