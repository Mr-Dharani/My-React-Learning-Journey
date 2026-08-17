let student = {

    name: "Dharani",
    age: 22,
    department: "Biomedical Engineering",
    college: "VCET",
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React"
    ],

    address: {
        city: "Erode",
        state: "Tamil Nadu"
    }

};

console.log(student.name);
console.log(student.age);
console.log(student.department);
console.log(student.college);
console.log(student.skills);
console.log(student.address);



console.log(student.address.city);
console.log(student.address.state);

student.email="mrtdharani@gmail.com";
console.log(student.email);
student.age=21;
console.log(student.age);

student.skills.push("TypeScript");
console.log(student.skills);

let {name, age, department, college} = student;
console.log(name);
console.log(age);
console.log(department);
console.log(college);

console.log(Object.keys(student));
console.log(Object.values(student));

let updated = {
    ...student,
    age: 23,
    github:"Here is the link"

}

console.log(updated);




