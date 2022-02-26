import { baseUrl, productUrl  } from "./settings/api.js";
import createMenu from "./ui/createMenu.js";
import { saveToStorage, getFromStorage } from "./utils/localStorage.js";
import { cartList, cartCounter } from "./settings/variables.js";
import { displayMessage } from "./ui/displayMessage.js";
import { checkLength } from "./ui/checkLength.js";
import { tokenKey } from "./settings/variables.js";

createMenu(); 

const queryString = document.location.search; 
const params = new URLSearchParams(queryString); 
const id = params.get("id"); 
const idUrl = productUrl + id; 

const form = document.querySelector(".edit-delete-form");
const title = document.querySelector("#title");
const titleError = document.querySelector("#titleError");
const price = document.querySelector("#price");
const priceError = document.querySelector("#priceError");
const description = document.querySelector("#description");
const descriptionError = document.querySelector("#descriptionError");
const images = document.querySelector('input[type="file"]');
const idInput = document.querySelector("#id"); 
const messageContainer = document.querySelector(".message-container");

const imageContainer = document.querySelector(".image-container")

async function editProducts() {

    try {
        const response = await fetch(idUrl); 
        const details = await response.json(); 

        title.value = details.title; 
        price.value = details.price; 
        description.value = details.description; 
        idInput.value = details.id; 
        images.file = details.image.formats.large.url; 

        deleteButton(details.id); 


        // imageContainer.innerHTML = `<img src="${details.image.formats.large.url}">`

        console.log(details); 
    }
    catch(error) {
        console.log(error); 
    }
    finally {
        // loading.style.display = "none"; // lærer har med denne fordi han har loading indicator på siden 
        form.style.display = "block"; 
    }
}

editProducts();

form.addEventListener("submit", submitForm); 

function submitForm(event) {
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
    const idValue = idInput.value;

    if(checkLength(title.value, 2) && checkLength(price.value, 2) && checkLength(description.value, 5)) {
        heihei()
    }
}


async function heihei() {
    
    var inputs = document.querySelector(".edit-delete-form").elements;
    // let checkbox = document.querySelector(".checkbox");

    const body = new FormData();       
    const inputData = {};          

    for(let inputElement of inputs) {
        if(inputElement.type === "file") {
            for (let file of inputElement.files) {                            
            body.append(`files.${inputElement.name}`, file, file.image);               
            } 
        }         
        else {
            inputData[inputElement.name] = inputElement.value;
        }
    }

    body.append('data', JSON.stringify(inputData));             
  
    try {
        const response = await fetch(idUrl, {
            method: "PUT",
            body: body
          });
        
          const result = await response.json(); 
          console.log(result);
          
          if(result.created_at) {
            displayMessage("success", "Product updated", ".message-container"); 
            form.reset(); 
        }
    }
    catch(error) {
        console.log(error);
        displayMessage("error", "An error has occured", ".message-container");
    }
}


function deleteButton(id) {
    const deleteContainer = document.querySelector(".delete-container");
    deleteContainer.innerHTML = `<button type="button" class="btn delete">Delete</button>` 

    const button = document.querySelector(".delete");
    
    button.onclick = async function() {
        console.log(id);


        const doDelete = confirm("Are you sure?");

        if(doDelete) {
            const idUrl = productUrl + id; 

            const token = getFromStorage(tokenKey); 
    
            const options = {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                },
            };
    
            try {
                const response = await fetch(idUrl, options); 
                const json = await response.json(); 

                location.href = "/products.html";
    
                console.log(json);
            }
            catch(error) {
                console.log(error);
            }
        }
    }
}