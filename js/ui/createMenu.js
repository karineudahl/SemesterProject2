import { getFromStorage, getUsername } from "../utils/localStorage.js";
import { cartCounter } from "../settings/variables.js";

export default function createMenu() {

    const container = document.querySelector(".menu-container"); 
    const { pathname } = document.location; 
    const username = getUsername();
    
    console.log(username)

    let authLink = `<li><a href="login.html" class="${pathname === "/login.html" ? "active" : ""}"><i class="fas fa-user"></i></a></li>`;
    

    if(username) {
        authLink = `<span>Logged in as ${username}</span>`; 

    }
    

    container.innerHTML =   `<nav class="menu">
                                <div> 
                                    <a href="/" class="logo">Sneakers</a>
                                    <a href="/"><i class="fas fa-circle"></i></a>
                                </div>        
                                <ul class="menu-links">
                                    <li><a href="products.html" class="${pathname === "/products.html" ? "active" : ""}">Shoes</a></li> 
                                    <li><a href="about.html" class="${pathname === "/about.html" ? "active" : ""}">About</a></li> 
                                    <li><a href="login.html" class="${pathname === "/login.html" ? "active" : ""}"><i class="fas fa-user"></i></a></li> 
                                    <li><a href="cart.html" class="${pathname === "/cart.html" ? "active" : ""}"><i class="fas fa-shopping-bag"><span class="cart-count">0</span></i></a></li> 
                                </ul>
                            </nav>
                            <div>
                                <p>${authLink}</p>
                            </div>`;
    
                            

                            

    function displayCart() {
        const cartCount = document.querySelector(".cart-count");
        let prodCount = getFromStorage(cartCounter); 
        if(prodCount) {
            cartCount.innerHTML = prodCount;
        }
    }
                            
    displayCart();
} 


// import { getFromStorage } from "../utils/localStorage.js";
// import { cartCounter } from "../settings/variables.js";

// export default function createMenu() {

//     const container = document.querySelector(".menu-container"); 

//     container.innerHTML =   `<nav class="menu">
//                                 <div> 
//                                     <a href="/" class="logo">Sneakers</a>
//                                     <a href="/"><i class="fas fa-circle"></i></a>
//                                 </div>        
//                                 <ul class="menu-links">
//                                     <li><a href="products.html">Shoes</a></li> 
//                                     <li><a href="about.html">About</a></li> 
//                                     <li><a href="login.html"><i class="fas fa-user"></i></a></li> 
//                                     <li><a href="cart.html"><i class="fas fa-shopping-bag"><span class="cart-count">0</span></i></a></li> 
//                                 </ul>
//                             </nav>`;
                            
//     function displayCart() {
//         const cartCount = document.querySelector(".cart-count");
//         let prodCount = getFromStorage(cartCounter); 
//         if(prodCount) {
//             cartCount.innerHTML = prodCount;
//         }
//     }
                            
//     displayCart();
// }