import { getFromStorage } from "../utils/localStorage.js";
import { cartCounter } from "../settings/variables.js";
const cartCount = document.querySelector(".cart-count");
export function displayCart() {
    
    let prodCount = getFromStorage(cartCounter); 
    if(prodCount) {
        cartCount.innerHTML = prodCount;
    }
}

displayCart();