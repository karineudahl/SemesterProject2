import createMenu from "./ui/createMenu.js";
import { baseUrl } from "./settings/api.js";
import { getFromStorage, saveToStorage } from "./utils/localStorage.js";
import { cartList } from "./settings/variables.js";

createMenu(); 

const productsInCart = getFromStorage(cartList); 
const cartContainer = document.querySelector(".cart-items"); 
const nothingInCart = document.querySelector(".no-products-container"); 
const totalContainer = document.querySelector(".cart-total-container"); 
let total = 0;

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
                                        <p>kr. ${cartElement.price}</p>
                                        <i class="fas fa-times" data-id="${cartElement.id}"></i>
                                    </div>
                                </div>`

    total += parseInt(cartElement.price); 
    totalContainer.innerHTML = `<p>Total: ${total} kr</p>`;  
    
    const deleteItem = document.querySelectorAll(".fa-times"); 

    deleteItem.forEach(function(can) {
    can.addEventListener("click", removeFromList);
    });
}); 

if(productsInCart.length === 0) {
    nothingInCart.innerHTML =   `<div class="no-products-content">
                                    <p>No items in shoppingbag.</p>
                                    <a href="products.html">Go shopping</a>
                                </div>`
}; 

function removeFromList(event) {
    for (let i = 0; i < productsInCart.length; i++) {
        if(productsInCart[i].id === parseInt(event.target.dataset.id)){
            productsInCart.splice(i, 1);
            saveToStorage(cartList, productsInCart);
            location.reload();
            break;
        };
    }
};