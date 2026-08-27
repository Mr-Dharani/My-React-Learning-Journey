// localStorage.setItem("name", "Dharani");
// const name = localStorage.getItem("name");
// console.log(`Name: ${name}`);

// const skills = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React"
// ];

// let savedSkills = JSON.stringify(skills);

// localStorage.setItem("skills", savedSkills);
// const retrievedSkills = localStorage.getItem("skills");
// console.log(`Skills: ${JSON.parse(retrievedSkills)}`);

// const student = {
//     name: "Dharani",
//     department: "Biomedical Engineering",
//     marks: 85
// };

// let savedStudent = JSON.stringify(student);
// localStorage.setItem("student",savedStudent);
// const retrivedStudent= localStorge.getItem("student");
// console.log(`student: ${JSON.parse(retrivedStudent)}`);

const skillInput =
    document.getElementById("skillInput");

const addSkill =
    document.getElementById("addSkill");

const removeSkill =
    document.getElementById("removeSkill");

const clearSkills =
    document.getElementById("clearSkills");

const skillList =
    document.getElementById("skillList");

const skillCount =
    document.getElementById("skillCount");

let skills =
    JSON.parse(localStorage.getItem("skills")) || [];

// Display skills function

function displaySkills() {

    // Clear the old list
    skillList.innerHTML = "";

    // Loop through skills
    skills.forEach((skill) => {

        // Create list item
        const li = document.createElement("li");

        // Add skill name
        li.textContent = skill;

        // Add to webpage
        skillList.appendChild(li);
    });

    // Update skill count
    skillCount.textContent = skills.length;
}

addSkill.addEventListener("click", () => {

    // Get input value
    const skill = skillInput.value.trim();

    // Check empty input
    if (skill === "") {

        alert("Please enter a skill");

        return;
    }

    // Add skill to array
    skills.push(skill);

    // Save array in Local Storage
    localStorage.setItem(
        "skills",
        JSON.stringify(skills)
    );

    // Update webpage
    displaySkills();

    // Clear input
    skillInput.value = "";
});

// Remove Last Skill

removeSkill.addEventListener("click", () => {

    // Check if skills exist
    if (skills.length === 0) {

        alert("No skills to remove");

        return;
    }

    // Remove last skill
    skills.pop();

    // Save updated array
    localStorage.setItem(
        "skills",
        JSON.stringify(skills)
    );

    // Update webpage
    displaySkills();
});


// Clear All Skills

clearSkills.addEventListener("click", () => {

    // Empty the array
    skills = [];

    // Remove data from Local Storage
    localStorage.removeItem("skills");

    // Update webpage
    displaySkills();
});


// Display saved skills when page loads

displaySkills();