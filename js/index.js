import createMenu from "./ui/createMenu.js";
import { homeBanner } from "./ui/homeBanner.js";
import { productUrl  } from "./settings/api.js";
import { displayMessage } from "./ui/displayMessage.js";

homeBanner();
createMenu();
 
const featuredContainer = document.querySelector(".featured-container");

async function getProducts() {
    try {
        const response = await fetch(productUrl); 
        const products = await response.json(); 
        
        featuredContainer.innerHTML = ""; 

        for (var i = 0; i < products.length; i++) {
            if(products[i].featured === true) {
                featuredContainer.innerHTML += `<div class="product-content">
                                                    <a href="products-details.html?id=${products[i].id}">
                                                         
                                                        <h2>${products[i].title}<h2>
                                                        <p>kr. ${products[i].price}<p> 
                                                    </a>
                                                </div>`
            }
        }
    }

    catch(error) {
        displayMessage("error", "An error has occoured", ".featured-container"); 
    }
}

getProducts();

{/* <img src="${products[i].image.formats.large.url}" alt="${products[i].title}">  */}