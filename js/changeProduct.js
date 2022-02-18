import { productUrl  } from "./settings/api.js";
import createMenu from "./ui/createMenu.js";
import { saveToStorage, getFromStorage } from "./utils/localStorage.js";
import { displayMessage } from "./ui/displayMessage.js";
import { tokenKey, userKey } from "./settings/variables.js";

createMenu(); 

const form = document.querySelector(".add-edit-delete-form"); 
const title = document.querySelector("#title"); 
const price = document.querySelector("#price"); 
const description = document.querySelector("#description"); 
const messageContainer = document.querySelector(".message-container");
  

form.addEventListener("submit", changeAddProduct); 


function changeAddProduct(event) {

    event.preventDefault(); 

    messageContainer.innerHTML = ""; 

    const titleValue = title.value.trim(); 
    const priceValue = parseFloat(price.value); 
    const descriptionValue = description.value.trim(); 

    // denne valideringen er ikke god nok for en ordentlig side, kun noe han lagde for å ha en message - må fikse på den
    if(titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
        displayMessage("warning", "Pleace fill in all fields", ".message-container"); 
    }
    //

    addProduct(titleValue, priceValue, descriptionValue)
}

function addProduct(title, price, description) {
    const data = JSON.stringify({ title: title, price: price, description: description }); 

    const token = getFromStorage(tokenKey);


}