function getGrade(marks){

    if(marks < 0 || marks > 100){
        return "Invalid Marks";
    }
    else if(marks >= 90){
        return "A+";
    }
    else if(marks >= 75){
        return "A";
    }
    else if(marks >= 60){
        return "B";
    }
    else if(marks >= 50){
        return "C";
    }
    else if(marks >= 40){
        return "D";
    }
    else{
        return "Fail";
    }

}

function ispassed(grade){
    if(grade==="A+" ||grade==="A" ||grade==="B" ||grade==="C" ||grade==="D"){
        return "Pass";
    }

    else{
        return "Fail";
    }
}

function displayResult(name, marks, grade, result){
    console.log("Student: "+name);
    console.log("Mark: "+marks);
    console.log("Grade: "+grade);
    console.log("Result: "+result);    
}

let name=prompt("Enter Your Name:")
let marks = Number(prompt("Enter your marks:"));

let grade = getGrade(marks);
let result=ispassed(grade);
displayResult(name, marks, grade, result);

// console.log("Marks:", marks);
// console.log("Grade:", grade);

