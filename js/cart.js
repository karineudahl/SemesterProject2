import createMenu from "./ui/createMenu.js";
import { baseUrl } from "./settings/api.js";
import { getFromStorage } from "./utils/localStorage.js";
import { cartList } from "./settings/variables.js";

createMenu(); 

const productsInCart = getFromStorage(cartList); 
const cartContainer = document.querySelector(".cart-container"); 
const nothingInCart = document.querySelector(".no-products-container"); 
const totalContainer = document.querySelector(".cart-total-container"); 

console.log(productsInCart)

if(productsInCart.length === 0) {
    nothingInCart.innerHTML =   `<div class="no-products-content">
                                    <p>No items in shoppingbag.</p>
                                    <a href="products.html">Go shopping</a>
                                </div>`
}

productsInCart.forEach((cartElement) => {
    cartContainer.innerHTML +=  `<div class="cart-content">
                                    <div class="cart-content-container">                                
                                        <img src="${baseUrl + cartElement.image.formats.large.url}" alt="${cartElement.title}"> 
                                        <div>
                                            <p>${cartElement.title}</p>
                                            <a href="products-details.html?id=${cartElement.id}">View product</a>
                                        </div>   
                                        
                                    </div>                           
                                    <div class="cart-content-container">  
                                        <p>${cartElement.price}</p>
                                        <i class="fas fa-times"></i>
                                    </div>
                                </div>`
                                
                                

}); 

const total = productsInCart.price;
totalContainer.innerHTML = `<p>Total: ${total} kr</p>`;


