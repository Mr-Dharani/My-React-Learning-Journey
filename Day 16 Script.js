// // const name="Dharani";
// // const role="React Developer";
// // const experience=0;
// // console.log(`My Name is ${name}`);
// // console.log(`I am a ${role}`);
// // console.log(`i had ${experience} year experience`);

// const basicSalary=2000000;
// const bonus=10000

// const calculateSalary=(basicSalary, bonus)=>{
//     return basicSalary+bonus
// };

// console.log(calculateSalary(basicSalary, bonus));

// const marks=98;
// const result=marks>=35? "pass": "Fail";
// console.log(result);

// const developer = {
//     name: "Dharani",
//     role: "React Developer",
//     skills: ["HTML", "CSS", "JavaScript", "React"]
// };

// const{name, role, skills}=developer;
// console.log(name);


// const frontend = ["HTML", "CSS"];
// const javascript = ["JavaScript", "TypeScript"];
// const framework = ["React"];

// const newRole=[
//     ...frontend,...javascript,...framework
// ]

// console.log(newRole);

// function showSkills(...skills){
//     console.log(skills);
    
// }

// showSkills("HTML", "CSS", "JavaScript", "React");

// const user = {
//     name: "Dharani"
// };

// console.log(user.address?.city);


const developer = {
    name: "Dharani T",
    role: "React Developer",
    experience: 1,
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React"
    ]
};

// Object Destructuring

const {
    name,
    role,
    experience,
    skills
} = developer;

// Ternary Operator

const status =
    experience <= 1
        ? "Beginner"
        : experience <= 4
            ? "Intermediate"
            : "Experienced";


// Join Skills

const skillList = skills.join("\n");


// Spread Operator

const additionalSkills = [
    "TypeScript",
    "Git"
];

const updatedSkills = [
    ...skills,
    ...additionalSkills
];

// Template Literal

const profile = `
============================

Name: ${name}
Role: ${role}

Experience: ${experience} years

Skills:
${skillList}

Status: ${status}

Updated Skills:
${updatedSkills}

============================
`;


// Display Profile

console.log(profile);