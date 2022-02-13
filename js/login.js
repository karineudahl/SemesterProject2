import createMenu from "./ui/createMenu.js";
import { baseUrl  } from "./settings/api.js";
import { displayMessage } from "./ui/displayMessage.js";
import { getFromStorage, saveToStorage } from "./utils/localStorage.js"
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
        return displayMessage("error", "Username and/or password is wrong", ".message-container"); 
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

        console.log(json); 

        if(json.user) {
            // displayMessage ("success", "You are logged in", ".message-container");

            saveToStorage(tokenKey, json.jwt);
            saveToStorage(userKey, json.user);

            location.href = "/change-product.html"; 
        }

        if(json.error) {
            displayMessage ("error", "Username and/or password is wrong", ".message-container"); 
        }

    }
    catch(error) {
        console.log(error)
    }
}


//denne funksjonen har jeg ikke funnet ut hvor han har callet - den er fra saving logged in data
function getUsername() {
    const user = getFromStorage(userKey); 

    if(user) {
        return user.username; 
    }

    return null; 
}