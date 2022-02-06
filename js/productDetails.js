import { productUrl  } from "./settings/api.js";
import { baseUrl } from "./settings/api.js";
import createMenu from "./ui/createMenu.js";
import { saveToStorage, getFromStorage } from "./utils/localStorage.js";

createMenu(); 

const detailsContainer = document.querySelector(".product-details-container");

const queryString = document.location.search; 
const params = new URLSearchParams(queryString); 
const id = params.get("id"); 
const url = productUrl + id; 

let cartArray = getFromStorage(); 

async function detailsProduct() {
    try {
        const response = await fetch(url); 
        const details = await response.json(); 

        detailsContainer.innerHTML =    `<div class="detail-container">
                                            <div class="detail-img">                                    
                                                <img src="${baseUrl + details.image.formats.thumbnail.url}" alt="${details.title}"> 
                                            </div>    
                                            <div>
                                                <h1>${details.title}<h1>
                                                <p>kr. ${details.price}<p>   
                                                <h2>Description<h2>  
                                                <p>${details.description}<p>
                                                <button class="cta-add-to-cart" data-product="${details.id}">Add to cart</button>
                                            </div>                                                                                                             
                                        </div>`;
     
        const buttons = document.querySelectorAll(".cta-add-to-cart"); 

        buttons.forEach(function(button) {
            button.addEventListener("click", addToStorage); 
        });

        function addToStorage() {
            cartArray.push(details);
            saveToStorage("list", cartArray); 
        }


        // function buttonAddToCart() {
        //     cartArray = JSON.parse(localStorage.getItem("cartList")); 
        //     if(cartArray === null) cartArray = []; 
        //     cartArray.push(details); 
        //     localStorage.setItem("cartList", JSON.stringify(cartArray)); 
        // }
    }

    catch(error) {
        console.log(error); 
    }
}

detailsProduct();