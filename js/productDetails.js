import { productUrl  } from "./settings/api.js";
import createMenu from "./ui/createMenu.js";
import { saveToStorage, getFromStorage } from "./utils/localStorage.js";
import { cartList, cartCounter } from "./settings/variables.js";
import { displayMessage } from "./ui/displayMessage.js";

createMenu(); 

const queryString = document.location.search; 
const params = new URLSearchParams(queryString); 
const id = params.get("id"); 
const url = productUrl + id; 

const detailsContainer = document.querySelector(".product-details-container");
const cartCount = document.querySelector(".cart-count");

async function detailsProduct() {
    try {
        const response = await fetch(url); 
        const details = await response.json(); 

        const image = details.image.formats.large.url;

        detailsContainer.innerHTML =    `<div class="detail-container">
                                            <div class="detail-img-container">                                    
                                                <img class="detail-img" src="${image}" alt="${details.title}"> 
                                            </div>    
                                            <div>
                                                <h1>${details.title}<h1>
                                                <p>kr. ${details.price}<p>                                      
                                                <p>${details.description}<p>
                                                <button class="cta add-to-cart" data-id="${details.id}" data-title="${details.title}" data-price="${details.price}" data-description="${details.description}" data-image="${image}">Add to cart</button>
                                            </div>                                                                                                             
                                        </div>`;
     
        const btnAddToCart = document.querySelectorAll(".cta"); 
        
        btnAddToCart.forEach(function(button) {
            button.addEventListener("click", addToStorage); 
        });

        function addToStorage() {

            this.classList.toggle("remove-from-cart"); //this = event.target
            this.classList.toggle("add-to-cart"); 

            const id = this.dataset.id; 
            const title = this.dataset.title; 
            const price = this.dataset.price; 
            const description = this.dataset.description; 
            const image = this.dataset.image;

            const currentFavs = getFromStorage(cartList); 
            let numberInCart = getFromStorage(cartCounter);

            const productExist = currentFavs.find(function(fav) {
                return fav.id === id; 
            });

            if(productExist === undefined) {
                const product = { id: id, title: title, price: price, description: description, image: image };
                currentFavs.push(product);
                saveToStorage(cartList, currentFavs);

                saveToStorage(cartCounter, numberInCart + 1);
                cartCount.innerHTML = numberInCart + 1;
            }
            else {
                const newFavs = currentFavs.filter((fav) => fav.id !== id );
                saveToStorage(cartList, newFavs); 

                saveToStorage(cartCounter, numberInCart - 1);
                cartCount.innerHTML = numberInCart - 1;
            }
        }
    }

    catch(error) {
        displayMessage("error", "An error has occoured", ".product-details-container"); 
    }
}

detailsProduct();






// import { productUrl  } from "./settings/api.js";
// import createMenu from "./ui/createMenu.js";
// import { saveToStorage, getFromStorage } from "./utils/localStorage.js";
// import { cartList, cartCounter } from "./settings/variables.js";
// import { displayMessage } from "./ui/displayMessage.js";

// createMenu(); 

// const queryString = document.location.search; 
// const params = new URLSearchParams(queryString); 
// const id = params.get("id"); 
// const url = productUrl + id; 

// const detailsContainer = document.querySelector(".product-details-container");
// const cartCount = document.querySelector(".cart-count");
// let cartArray = getFromStorage(cartList); 

// async function detailsProduct() {
//     try {
//         const response = await fetch(url); 
//         const details = await response.json(); 

//         detailsContainer.innerHTML =    `<div class="detail-container">
//                                             <div class="detail-img-container">                                    
//                                                 <img class="detail-img" src="${details.image.formats.large.url}" alt="${details.title}"> 
//                                             </div>    
//                                             <div>
//                                                 <h1>${details.title}<h1>
//                                                 <p>kr. ${details.price}<p>                                      
//                                                 <p>${details.description}<p>
//                                                 <button class="btn cta-add-to-cart" data-product="${details.id}">Add to cart</button>
//                                             </div>                                                                                                             
//                                         </div>`;
     
//         const btnAddToCart = document.querySelectorAll(".cta-add-to-cart"); 
        
//         btnAddToCart.forEach(function(button) {
//             button.addEventListener("click", addToStorage); 
//         });

//         function addToStorage() {
//             cartArray.push(details);
//             saveToStorage(cartList, cartArray); 
            
//             let numberInCart = parseInt(getFromStorage(cartCounter));           
//             if(numberInCart) {
//                 saveToStorage(cartCounter, numberInCart + 1);
//                 cartCount.innerHTML = numberInCart + 1;
//             } else {
//                 saveToStorage(cartCounter, 1);
//                 cartCount.innerHTML = numberInCart = 1;
//             }
//         }
//     }

//     catch(error) {
//         displayMessage("error", "An error has occoured", ".product-details-container"); 
//     }
// }

// detailsProduct();