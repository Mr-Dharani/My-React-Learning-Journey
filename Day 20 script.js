// class Developer{
//     constructor(name, role, experience){
//         this.name=name;
//         this.role=role;
//         this.experience=experience;
//     }
//     displayInfo(){
//         console.log(`Name:${this.name},\nRole:${this.role},\nExperience:${this.experience} years`);
//     }
// }

// const Developer1=new Developer("Dharani","React Developer",2);
// const Developer2=new Developer("Subhiksha","VLSI Developer",3);

// Developer1.displayInfo();
// Developer2.displayInfo();

class Student{
    constructor(name, department, marks){
        this.name=name;
        this.department=department;
        this.marks=marks;
    }
    calculateGrade(){
        if(this.marks<0 || this.marks>100){
            console.log("Invalid marks. Please enter marks between 0 and 100.");
            return;
        }
        if(this.marks>=90){
            return `Grade: A`;
        } else if(this.marks>=75){
            return `Grade: B`;
        } else {
            return `Grade: C`;
        }
    }
    checkResult(){
        if(this.marks>=40){
            return `Result: Pass`;
        }
        else{
            return `Result: Fail`;
        }
    }
    displayReport(){
        console.log(`
----- STUDENT REPORT -----

Name: ${this.name}
Department: ${this.department}
Marks: ${this.marks}
${this.calculateGrade()}
${this.checkResult()}

--------------------------
            `);

    }
}

const student1 =
    new Student(
        "Dharani",
        "Biomedical Engineering",
        85
    );

const student2 =
    new Student(
        "Subhiksha",
        "Electronics and Communication Engineering",
        90
    );

const student3= new Student("Gwen", "Biomedical ENgineering", 95);

student1.displayReport();
student2.displayReport();
student3.displayReport();