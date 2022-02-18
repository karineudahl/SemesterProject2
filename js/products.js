import { productUrl  } from "./settings/api.js";
import createMenu from "./ui/createMenu.js";
import { searchBar } from "./ui/searchBar.js";
import { displayMessage } from "./ui/displayMessage.js";

createMenu();

const containerShoes = document.querySelector(".product-container"); 

async function getProducts() {
    try {
        const response = await fetch(productUrl); 
        const products = await response.json(); 
    
        showAllShoes(products); 
        searchBar(products); 
    }

    catch(error) {
        displayMessage("error", "An error has occoured", ".product-container"); 
    }
}

getProducts();


export function showAllShoes(products) {
    containerShoes.innerHTML = ""; 
    products.forEach(function(product) {
        containerShoes.innerHTML += `<div class="product-content">
                                     <a href="products-details.html?id=${product.id}">                                          
                                         <h2>${product.title}<h2>
                                         <p>kr. ${product.price}<p> 
                                     </a>
                                 </div>` 
    }); 
}

{/* <img src="${product.image.formats.large.url}" alt="${product.title}"></img> */}