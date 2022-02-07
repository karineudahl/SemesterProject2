import createMenu from "./ui/createMenu.js";
import { baseUrl } from "./settings/api.js";
import { getFromStorage } from "./utils/localStorage.js";
import { cartList } from "./settings/variables.js";

createMenu(); 

const productsInCart = getFromStorage(cartList); 
const cartContainer = document.querySelector(".cart-container"); 

console.log(productsInCart)

if(productsInCart.length === 0) {
    cartContainer.innerHTML = "No products in the shoppingbag"
}

productsInCart.forEach((cartElement) => {
    cartContainer.innerHTML +=  `<div class="cart-content">
                                    <img src="${baseUrl + cartElement.image.formats.large.url}" alt="${cartElement.title}">                                
                                    <h1>${cartElement.title}</h1>
                                    <p>${cartElement.price}</p>
                                    <button><i class="fas fa-times"></i></button>
                                </div>`
})