import { heroBannerUrl  } from "../settings/api.js";

export async function homeBanner() {
    const heroBannerContainer = document.querySelector(".hero-banner-container");
    
    try {
        const response = await fetch(heroBannerUrl); 
        const products = await response.json(); 
   
        heroBannerContainer.innerHTML = `<div>
                                            <div style="background-image: url(${products.hero_banner.formats.medium.url})" class="hero-banner"></div> 
                                        </div>` 
    }

    catch {
        console.log(error)
        heroBannerContainer.innerHTML = "An error has occured"
    }
}