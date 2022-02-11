import { heroBannerUrl  } from "./settings/api.js";
import createMenu from "./ui/createMenu.js";

createMenu();

const heroBannerContainer = document.querySelector(".hero-banner-container"); 

async function heroBanner() {
    try {
        const response = await fetch(heroBannerUrl); 
        const products = await response.json(); 
    
        products.forEach(function(product) {
            heroBannerContainer.innerHTML += `<div class="product-content">
                                             <img src="${product.hero_banner.formats.medium.url}" alt="">  
                                     </div>` 
        }); 
    }

    catch {
        heroBannerContainer.innerHTML = "An error has occured"
    }
}

heroBanner();



    
