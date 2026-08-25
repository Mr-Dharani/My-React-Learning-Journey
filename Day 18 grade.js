export function calculateGrade(marks) {
    if (marks >= 90 && marks<=100) {
        return "A+";
    }
    else if(marks >=80){
        return "A";
    }
    else if(marks>=70){
        return "B+";
    }
    else if(marks>=60){
        return "B";
    }
    else if(marks>=45){
        return "c";
    }
    else{
        return "Fail";
    }
}

export function checkResult(marks){
    if(marks>=45){
        return "Pass";
    }
    else{
        return "Fail";
    }
}