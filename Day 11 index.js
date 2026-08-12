let students = [
    "Dharani",
    "Subhiksha",
    "Gwen",
    "Arun"
];
console.log(students);
students.push("Karthik");
console.log(students);
students.pop();
console.log(students);
students.unshift("Priya");
console.log(students);
console.log(students.includes("Dharani"));
console.log(students.indexOf("Subhiksha"));
console.log(students.length);

for(let student of students){
    console.log(student);
}