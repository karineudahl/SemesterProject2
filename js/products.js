import { productUrl  } from "./settings/api.js";
import createMenu from "./ui/createMenu.js";
import { searchBar } from "./ui/searchBar.js";

createMenu();

const containerShoes = document.querySelector(".product-container"); 

async function getProducts() {
    try {
        const response = await fetch(productUrl); 
        const products = await response.json(); 
    
        showAllShoes(products); 
        searchBar(products); 
    }

    catch {
        console.log(error)
        containerShoes.innerHTML = "An error has occured"
    }
}

getProducts();


export function showAllShoes(products) {
    products.forEach(function(product) {
        containerShoes.innerHTML += `<div class="product-content">
                                     <a href="products-details.html?id=${product.id}">
                                         <img src="${product.image.formats.large.url}" alt="${product.title}">  
                                         <h2>${product.title}<h2>
                                         <p>kr. ${product.price}<p> 
                                     </a>
                                 </div>` 
    }); 
}