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
const whereAmI = document.querySelector("#where-am-i-products-details"); 

async function detailsProduct() {
    try {
        const response = await fetch(url); 
        const details = await response.json(); 

        const image = details.image.formats.large.url;

        whereAmI.innerHTML = `${details.title}`;
        document.title += `${details.title}`;

        // hører sammen
        const shoesInCart = getFromStorage(cartList);
        let cssClass = "add-to-cart"; 
        const doesObjectExist = shoesInCart.find(function(fav) { 
            return parseInt(fav.id) === details.id;
        })

        if(doesObjectExist) {
            cssClass = "delete"; 
            
        }
        // hører sammen 


        detailsContainer.innerHTML =    `<div class="detail-container">
                                            <div class="detail-img-container">                                    
                                                <img class="detail-img" src="${image}" alt="${details.title}"> 
                                            </div>    
                                            <div class="details-information">
                                                <h1>${details.title}<h1>
                                                <p>kr. ${details.price}<p>                                      
                                                <p>${details.description}<p>
                                                <button class="cta ${cssClass}" data-id="${details.id}" data-title="${details.title}" data-price="${details.price}" data-description="${details.description}" data-image="${image}">Add to cart</button>
                                            </div>                                                                                                             
                                        </div>`;
     
        const btnAddToCart = document.querySelectorAll(".detail-container button"); 
        
        btnAddToCart.forEach(function(button) {
            button.addEventListener("click", addToStorage); 
        });

        function addToStorage() {
            this.classList.toggle("delete");
            this.classList.toggle("add-to-cart");

            const id = this.dataset.id; 
            const title = this.dataset.title; 
            const price = this.dataset.price; 
            const description = this.dataset.description; 
            const image = this.dataset.image;

            const currentShoes = getFromStorage(cartList); 
            let numberInCart = parseInt(getFromStorage(cartCounter)); 

            const productExist = currentShoes.find(function(shoe) {
                return shoe.id === id; 
            });

            if(productExist === undefined) {
                const product = { id: id, title: title, price: price, description: description, image: image };
                currentShoes.push(product);
                saveToStorage(cartList, currentShoes);                
                          
                if(numberInCart) {
                    saveToStorage(cartCounter, numberInCart + 1);
                    cartCount.innerHTML = numberInCart + 1;
                } else {
                    saveToStorage(cartCounter, 1);
                    cartCount.innerHTML = numberInCart = 1;
                }

            }
            else {
                const newFavs = currentShoes.filter((shoe) => shoe.id !== id );
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
//                                                 <button class="cta add-to-cart" data-product="${details.id}">Add to cart</button>
//                                             </div>                                                                                                             
//                                         </div>`;
     
//         const btnAddToCart = document.querySelectorAll(".add-to-cart"); 
        
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
//         detailsContainer.innerHTML = "An error has occured"
//     }
// }

// detailsProduct();