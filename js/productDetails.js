import { productUrl  } from "./settings/api.js";
import { baseUrl } from "./settings/api.js";
import createMenu from "./ui/createMenu.js";
import { saveToStorage, getFromStorage } from "./utils/localStorage.js";
import { cartList, cartCounter } from "./settings/variables.js";
// import { displayCart } from "./ui/displayCart.js";

createMenu(); 
// displayCart();

const queryString = document.location.search; 
const params = new URLSearchParams(queryString); 
const id = params.get("id"); 
const url = productUrl + id; 

const detailsContainer = document.querySelector(".product-details-container");
const cartCount = document.querySelector(".cart-count");
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
     
        const btnAddToCart = document.querySelectorAll(".cta-add-to-cart"); 
        
        btnAddToCart.forEach(function(button) {
            button.addEventListener("click", addToStorage); 
        });

        function addToStorage() {
            cartArray.push(details);
            saveToStorage(cartList, cartArray); 
            
            let numberInCart = parseInt(getFromStorage(cartCounter));           
            if(numberInCart) {
                saveToStorage(cartCounter, numberInCart + 1);
                cartCount.innerHTML = numberInCart + 1;
            } else {
                saveToStorage(cartCounter, 1);
                cartCount.innerHTML = numberInCart = 1;
            }
        }



    }

    catch(error) {
        detailsContainer.innerHTML = "An error has occured"
    }
}

detailsProduct();

export function displayCart() {
    let prodCount = getFromStorage(cartCounter); 
    if(prodCount) {
        cartCount.innerHTML = prodCount;
    }
}

displayCart();