import { showAllShoes } from "../products.js";

export function searchBar(products) {
    const containerShoes = document.querySelector(".product-container"); 
    const searchBar = document.querySelector("#search"); 

    searchBar.onkeyup = function() {
        const searchValue = event.target.value.trim().toLowerCase();
        
        const filteredSearch = products.filter((product) => {
            return (
                product.title.toLowerCase().includes(searchValue) ||
                product.description.toLowerCase().includes(searchValue) 
            );
        });
        
        containerShoes.innerHTML = ""; 
        showAllShoes(filteredSearch);
    }
}