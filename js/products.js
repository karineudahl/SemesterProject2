import { baseUrl  } from "./settings/api.js";

const productsUrl = baseUrl + "/products";

(async function() {
    const container = document.querySelector(".product-container"); 

    try {
        const response = await fetch(productsUrl); 
        const products = await response.json(); 

        console.log(products)
    
        products.forEach(function(product) {
           container.innerHTML += `<a href="products-details.html?id=${product.id}">
                                        <img src="${baseUrl + product.image.formats.thumbnail.url}" alt="${product.title}">
                                        <h2>${product.title}<h2>
                                        <p>${product.price}<p> 
                                    </a>` 
       }) 
    }
    catch {
        console.log(error);
    }

})();