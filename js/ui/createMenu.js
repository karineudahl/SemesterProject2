export default function createMenu() {

    const container = document.querySelector(".menu-container"); 

    container.innerHTML =   `<nav class="menu">
                                <div> 
                                    <a href="/" class="logo">Sneakers</a>
                                    <a href="/"><i class="fas fa-circle"></i></a>
                                </div>        
                                <ul class="menu-links">
                                    <li><a href="products.html">Shoes</a></li> 
                                    <li><a href="about.html">About</a></li> 
                                    <li><a href="login.html"><i class="fas fa-user"></i></a></li> 
                                    <li><a href="cart.html"><i class="fas fa-shopping-bag"></i></a></li> 
                                </ul>
                            </nav>`;
}
