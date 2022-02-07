import { productUrl  } from "./settings/api.js";
import { baseUrl } from "./settings/api.js";
import createMenu from "./ui/createMenu.js";
import { saveToStorage, getFromStorage } from "./utils/localStorage.js";
import { cartList } from "./settings/variables.js";

createMenu(); 

const queryString = document.location.search; 
const params = new URLSearchParams(queryString); 
const id = params.get("id"); 
const url = productUrl + id; 

const detailsContainer = document.querySelector(".product-details-container");
let cartArray = getFromStorage(cartList); 

async function detailsProduct() {
    try {
        const response = await fetch(url); 
        const details = await response.json(); 

        detailsContainer.innerHTML =    `<div class="detail-container">
                                            <div class="detail-img-container">                                    
                                                <img class="detail-img" src="${baseUrl + details.image.formats.large.url}" alt="${details.title}"> 
                                            </div>    
                                            <div>
                                                <h1>${details.title}<h1>
                                                <p>kr. ${details.price}<p>                                      
                                                <p>${details.description}<p>
                                                <button class="btn cta-add-to-cart" data-product="${details.id}">Add to cart</button>
                                            </div>                                                                                                             
                                        </div>`;
     
        const buttons = document.querySelectorAll(".cta-add-to-cart"); 

        buttons.forEach(function(button) {
            button.addEventListener("click", addToStorage); 
        });

        function addToStorage() {
            cartArray.push(details);
            saveToStorage(cartList, cartArray); 
        }
    }

    catch(error) {
        detailsContainer.innerHTML = "An error has occured"
    }
}

detailsProduct();