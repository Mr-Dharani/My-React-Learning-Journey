// function greet(name, callback) {

//     console.log("Hello " + name);

//     callback();
// }

// greet("Dharani", () => {
//     console.log("Welcome!");
// });

// const promise = new Promise((resolve, reject) => {

//     resolve("Success");

// });

// console.log(promise);

// const myPromise = new Promise((resolve, reject) => {

//     setTimeout(() => {

//         resolve("User data loaded");

//     }, 2000);

// });

// myPromise.then((result) => {

//     console.log(result);

// });

// async function getUsers() {

//     try {

//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );

//         const users = await response.json();

//         users.forEach((user) => {

//             console.log(
//                 `${user.name} - ${user.email}`
//             );

//         });

//     } catch (error) {

//         console.log("Something went wrong:", error);

//     }

// }

// getUsers();

const loadUsers = document.getElementById("loadUsers");
const userList = document.getElementById("userList");
const message = document.getElementById("message");

async function getUsers() {

    try {
        message.textContent = "Loading users...";
        const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
);
    const users = await response.json();
    userList.innerHTML = "";

    users.forEach((user) => {
        const userCard = document.createElement("div");

userCard.classList.add("user-card");

userCard.innerHTML = `
    <h3>${user.name}</h3>
    <p>📧 Email: ${user.email}</p>
    <p>🏙️ City: ${user.address.city}</p>
`;
userList.appendChild(userCard);
message.textContent = "Users loaded successfully!";

    // Create a card here

});
// API code will come here

    } catch (error) {

        console.log(error);
         message.textContent = "Failed to load users!";     

    }

}

loadUsers.addEventListener("click", getUsers);