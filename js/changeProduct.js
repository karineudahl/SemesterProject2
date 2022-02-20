import { productUrl  } from "./settings/api.js";
import createMenu from "./ui/createMenu.js";
import { saveToStorage, getFromStorage } from "./utils/localStorage.js";
import { displayMessage } from "./ui/displayMessage.js";
import { tokenKey, userKey } from "./settings/variables.js";
import { checkLength } from "./ui/checkLength.js"; 

createMenu(); 

const form = document.querySelector(".add-edit-delete-form");
const title = document.querySelector("#title");
const titleError = document.querySelector("#titleError");
const price = document.querySelector("#price");
const priceError = document.querySelector("#priceError");
const description = document.querySelector("#description");
const descriptionError = document.querySelector("#descriptionError");
const images = document.querySelector('input[type="file"]');
const messageContainer = document.querySelector(".message-container");
  
form.addEventListener("submit", validateForm); 

function validateForm(event) {
    event.preventDefault(); 
    messageContainer.innerHTML = ""; 

    if(checkLength(title.value, 2)) {
        titleError.style.display = "none";
    } else {
        titleError.style.display = "block";
    }
    
    if(checkLength(price.value, 2)) {
        priceError.style.display = "none";
    } else {
        priceError.style.display = "block";
    }
    
    if(checkLength(description.value, 5)) {
        descriptionError.style.display = "none";
    } else {
        descriptionError.style.display = "block";
    }

    const titleValue = title.value.trim(); 
    const priceValue = parseFloat(price.value); 
    const descriptionValue = description.value.trim(); 
    const imageValue = images.files[0];

    if(checkLength(title.value, 2) && checkLength(price.value, 2) && checkLength(description.value, 5)) {
        addProduct(titleValue, priceValue, descriptionValue, imageValue);
    }
}

async function addProduct(title, price, description, image ) {
    const data = JSON.stringify({ title: title, price: price, description: description, image: image });
    const token = getFromStorage(tokenKey);

    console.log(data); 


    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
        },
    }; 

    try {
        const response = await fetch(productUrl, options); 
        const json = await response.json(); 
        
        if(json.created_at) {
            displayMessage("success", "Product created", ".message-container"); 
            form.reset(); 
        }
        console.log(json)
    }

    catch(error) {
        console.log(error);
        displayMessage("error", "An error has occured", ".message-container");
    }
}





// function changeAddProduct(event) {
//     event.preventDefault(); 
//     messageContainer.innerHTML = ""; 

//     if(checkLength(title.value, 2)) {
//         titleError.style.display = "none";
//     } else {
//         titleError.style.display = "block";
//     }
    
//     if(checkLength(price.value, 2)) {
//         priceError.style.display = "none";
//     } else {
//         priceError.style.display = "block";
//     }
    
//     if(checkLength(description.value, 5)) {
//         descriptionError.style.display = "none";
//     } else {
//         descriptionError.style.display = "block";
//     }
    
//     const titleValue = title.value.trim(); 
//     const priceValue = parseFloat(price.value); 
//     const descriptionValue = description.value.trim(); 
//     const imageValue = image.files[0];

//     // console.log(priceValue)
//     console.log(imageValue)

//     if(checkLength(title.value, 2) && checkLength(price.value, 2) && checkLength(description.value, 5)) {
//         addProduct(titleValue, priceValue, descriptionValue, imageValue);
//     }
// }

// async function addProduct(title, price, description, image) {
    
//     const data = JSON.stringify({ title: title, price: price, description: description, image: image });
//     const token = getFromStorage(tokenKey);

//     console.log(data)

//     const options = {
//         method: "POST",
//         body: data,
//         headers: {
//             "Content-Type": "application/json",
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`
//         },
//     }; 

//     try {
//         const response = await fetch(productUrl, options); 
//         const json = await response.json(); 
        
//         if(json.created_at) {
//             displayMessage("success", "Product created", ".message-container"); 
//             form.reset(); 
//         }
//         console.log(json)
//     }

//     catch(error) {
//         console.log(error);
//         displayMessage("error", "An error has occured", ".message-container");
//     }
// }