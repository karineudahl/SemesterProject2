import createMenu from "./ui/createMenu.js";
// import { displayCart } from "./productDetails.js";
// displayCart();
createMenu(); 


function displayCart() {
    const cartCount = document.querySelector(".cart-count");
    let prodCount = localStorage.getItem("cartsCount"); 
    if(prodCount) {
        cartCount.textContent = prodCount;
    }
}

displayCart();