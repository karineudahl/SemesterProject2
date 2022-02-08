import { baseUrl  } from "./settings/api.js";
import createMenu from "./ui/createMenu.js";

createMenu();

const productsUrl = baseUrl + "/products";

async function getProducts() {
    const container = document.querySelector(".product-container"); 

    try {
        const response = await fetch(productsUrl); 
        const products = await response.json(); 
    
        products.forEach(function(product) {
           container.innerHTML += `<div class="product-content">
                                        <a href="products-details.html?id=${product.id}">
                                            <img src="${baseUrl + product.image.formats.large.url}" alt="${product.title}">  
                                            <h2>${product.title}<h2>
                                            <p>kr. ${product.price}<p> 
                                        </a>
                                    </div>` 
       }) 
    }
    catch {
        console.log(error);
    }

}

getProducts();
