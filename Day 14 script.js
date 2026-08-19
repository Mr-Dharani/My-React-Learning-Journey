// let skills=document.querySelectorAll(".skill");
// skills.forEach(skill => {
//     console.log(skill.textContent);
// });

// let nameInput=document.getElementById("name");
// console.log(nameInput.value)

// let button=document.getElementById("btn");

// button.addEventListener("click", () =>{
//     alert("Submit Button Clicked")
// })

// let paragraph=document.createElement("p");
// paragraph.textContent="Hello!"
// document.body.appendChild(paragraph)

// let heading=document.getElementById("title");
// let button=document.getElementById("changeBtn")

// button.addEventListener("click",()=>{
//     heading.textContent="Welcome to Dharani's Website";
// })

let darkBtn = document.getElementById("darkBtn");
let bioBtn = document.getElementById("bioBtn");
let bio = document.getElementById("bio");

let skillInput = document.getElementById("skillInput");
let addSkill = document.getElementById("addSkill");
let removeSkill = document.getElementById("removeSkill");

let skillList = document.getElementById("skillList");
let skillCount = document.getElementById("skillCount");



let skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
];

addSkill.addEventListener("click",()=>{
   let skill=skillInput.value;
   skills.push(skill);
   let li = document.createElement("li");

    li.textContent = skill;

    skillList.appendChild(li);
    skillCount.textContent=skills.length;
})

skills.forEach(skill => {

    let li = document.createElement("li");

    li.textContent = skill;

    skillList.appendChild(li);

});

removeSkill.addEventListener("click",()=>{

     if (skills.length === 0) {
        return;
    }

    let removedSkill = skills.pop();

    skillList.lastElementChild.remove();
    skillCount.textContent=skills.length;

})

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});

bioBtn.addEventListener("click", () =>{
    let newBio = prompt("Enter your new bio:");
    if (newBio !== null && newBio !== "") {
        bio.textContent = newBio;
    }


})


