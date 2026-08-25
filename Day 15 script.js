let registrationForm = document.getElementById("registrationForm");

let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let age = document.getElementById("age");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let ageError = document.getElementById("ageError");

let successMessage = document.getElementById("successMessage");


registrationForm.addEventListener("submit", (event) => {

    event.preventDefault();

    let isValid = true;

    // Clear previous messages

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    ageError.textContent = "";

    successMessage.textContent = "";


    // Name Validation

    if (name.value.trim() === "") {

        nameError.textContent = "Name is required";
        isValid = false;

    }
    else if (name.value.trim().length < 3) {

        nameError.textContent =
            "Name must contain at least 3 characters";

        isValid = false;
    }


    // Email Validation

    if (email.value.trim() === "") {

        emailError.textContent = "Email is required";
        isValid = false;

    }
    else if (!email.validity.valid) {

        emailError.textContent =
            "Please enter a valid email";

        isValid = false;
    }


    // Password Validation

    if (password.value === "") {

        passwordError.textContent =
            "Password is required";

        isValid = false;

    }
    else if (password.value.length < 6) {

        passwordError.textContent =
            "Password must contain at least 6 characters";

        isValid = false;
    }


    // Age Validation

    let userAge = Number(age.value);

    if (age.value === "") {

        ageError.textContent = "Age is required";
        isValid = false;

    }
    else if (userAge < 18) {

        ageError.textContent =
            "Age must be 18 or above";

        isValid = false;
    }


    // Final Result

    if (isValid) {

        successMessage.textContent =
            "Registration Successful!";

        registrationForm.reset();
    }

}); 

// name.addEventListener(
//     "input", (event)=>{
//         if(name.value===""){
//             nameError.textContent="Not Valid";
//         }
//         else if(name.value.length <3){
//             nameError.textContent="Not Valid";
//         }
//         else{
//             nameError.textContent="Valid";
//         }
//     }
// )

// password.addEventListener(
//     "input", (event)=>{
//         if(password.value.length<6){
//             passwordError.textContent="Not Valid";
//         }
//         else{
//             passwordError.textContent="Valid";
//         }
//     }
// )

// let userAge = Number(age.value);
// age.addEventListener(
//     "input", (event)=>{
//         if(userAge >=18){
//             ageError.textContent="Valid";
//         }
//         else{
//             ageError.textContent="Not Valid"
//         }
//     }
// )

// submit.addEventListener(
//     "submit", (event)=>{
//         if(nameError==="Valid" && passwordError==="Valid" && ageError==="Valid"){
//             successMessage.textContent="Registration Successfull";
//         }
//         registrationForm.reset();
//     }
// )

