import createMenu from "./ui/createMenu.js";
import { baseUrl } from "./settings/api.js";
import { displayMessage } from "./ui/displayMessage.js";
import { saveToStorage } from "./utils/localStorage.js"
import { tokenKey, userKey } from "./settings/variables.js";

createMenu(); 

const logInForm = document.querySelector(".login-form"); 
const username = document.querySelector("#username"); 
const password = document.querySelector("#password");
const messageContainer = document.querySelector(".message-container");

logInForm.addEventListener("submit", tryTologIn); 

function tryTologIn(event) {
    event.preventDefault(); 

    messageContainer.innerHTML = ""; 

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim(); 

    if(usernameValue.length === 0 || passwordValue.length === 0) {
        return displayMessage("error", "Username and/o r password is wrong", ".message-container"); 
    }

    loggedIn(usernameValue, passwordValue); 
}

async function loggedIn(username, password) {
    const url = baseUrl + "auth/local"; 

    const data = JSON.stringify( { identifier: username, password: password} )

    const options = {
        method: "POST", 
        body: data,
        headers: {
            "Content-Type": "application/json"
        }
    }; 

    try {
        const response = await fetch(url, options); 
        const json = await response.json(); 

        if(json.user) {
            saveToStorage(tokenKey, json.jwt);
            saveToStorage(userKey, json.user);
            location.href = "/change-product.html"; 
        }

        if(json.error) {
            displayMessage ("error", "Username and/or password is wrong", ".message-container"); 
        }

    }
    catch(error) {
        displayMessage ("error", "An error has occured", ".message-container");
    }
}

// function tryTologIn(event) {
//     event.preventDefault(); 

//     messageContainer.innerHTML = ""; 

//     const usernameValue = username.value.trim();
//     const passwordValue = password.value.trim(); 

//     if(usernameValue.length === 0 || passwordValue.length === 0) {
//         return displayMessage("error", "Username and/or password is wrong", ".message-container"); 
//     }

//     loggedIn(usernameValue, passwordValue); 
// }

// async function loggedIn(username, password) {
//     const url = baseUrl + "auth/local"; 

//     const data = JSON.stringify( { identifier: username, password: password} )

//     const options = {
//         method: "POST", 
//         body: data,
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }; 

//     try {
//         const response = await fetch(url, options); 
//         const json = await response.json(); 

//         if(json.user) {
//             saveToStorage(tokenKey, json.jwt);
//             saveToStorage(userKey, json.user);
//             location.href = "/change-product.html"; 
//         }

//         if(json.error) {
//             displayMessage ("error", "Username and/or password is wrong", ".message-container"); 
//         }

//     }
//     catch(error) {
//         displayMessage ("error", "An error has occured", ".message-container");
//     }
// }