import { getUsername } from "../utils/localStorage.js";
import { logoutButton } from "./logoutButton.js";
import { displayCartNumber } from "./displayCartNumber.js";

export default function createMenu() {
    const container = document.querySelector(".menu-container"); 
    const { pathname } = document.location; 
    const username = getUsername();

    let logout = "";
    let addProduct = ""; 
    let notUserName = "";
    
    if(username) { 
        addProduct = `<a href="change-product.html" class="${pathname === "/change-product.html" ? "active" : ""}">Add</a>`
        logout = `<button id="logoutButton" class="btn-logout">Logout, ${username}</button>`; 
    }

    if(!username) {
        notUserName = `<li><a href="login.html" class="${pathname === "/login.html" ? "active" : ""}"><i class="fas fa-user"></i></a></li>`;
    }

    container.innerHTML =   `<nav class="menu">
                                <div class="menu-container"> 
                                    <div> 
                                        <a href="/" class="logo">Sneakers<i class="fas fa-circle"></i></a>
                                    </div>        
                                    <ul>
                                        <li><a href="products.html" class="${pathname === "/products.html" ? "active" : ""}">Shoes</a></li> 
                                        <li><a href="about.html" class="${pathname === "/about.html" ? "active" : ""}">About</a></li> 
                                        <li>${addProduct}</li>
                                        <li>${notUserName}</li>     
                                        <li><a href="cart.html" class="${pathname === "/cart.html" ? "active" : ""}"><i class="fas fa-shopping-bag"><span class="cart-count">0</span></i></a></li>                                   
                                    </ul>
                                </div>
                                <div class="menu-logout-button-container">
                                    <li>${logout}</li>
                                </div>
                            </nav>`;
                             
    logoutButton();         
    displayCartNumber();
} 