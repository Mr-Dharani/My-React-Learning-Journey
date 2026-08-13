// let num=[18,88,66,45,3,7,17,21];

// let eligible=num.filter(
//     numbers => numbers>=18
// );

// console.log(eligible);


// let name=[
//     "Dharani",
//     "Subhiksha",
//     "DD",
//     "Gwen"
// ]

// let greet=name.map(
//     names=>"Hello "+names
// );

// console.log(greet);

let students = [
    { name: "Dharani", marks: 85 },
    { name: "Subhiksha", marks: 92 },
    { name: "Ram", marks: 67 },
    { name: "Gwen", marks: 90 },
    { name: "Karthik", marks: 35 }
];

let names=students.map(student => student.name);
console.log(names);

let passed=students.filter(pass=>pass.marks>=40);
console.log(passed);

let failed=students.filter(fail=>fail.marks<40);
console.log(failed);

let found=students.find(fi=>fi.name === "Gwen");
console.log(found);

let ifound=students.findIndex(fi=>fi.name === "Ram");
console.log(ifound);

let topper=students.some(top=>top.marks>=90);
console.log(topper);

let isFail=students.every(fail=>fail.marks>=40);
console.log(isFail);

let total=students.reduce(
    (sum,mark)=>sum+mark.marks,0
);
console.log(total);

let avg=total/students.length;
console.log(avg);




