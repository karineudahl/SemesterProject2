# Sneakers (Semester Project 2 at Noroff) 

The goal was to apply all I had learned over the first 1,5 year of study. 

Username and password to log in to admin site 
- Username: Karine
- Password: password1

### Live version
[Sneakers](https://cool-sherbet-345f43.netlify.app/)

<img width="1007" alt="Screenshot 2022-09-28 at 20 35 58" src="https://user-images.githubusercontent.com/74554925/192862072-c6501cf6-0bac-48aa-b49a-f86804d5811e.png">

# Description (assignment)

- Goal is to create an e-commerce website that has both customer-facing and admin sections. 
- You can choose the theme of your website. 
- Design your website using your favourite tool, good UX and UI
- The website must be responsive on all devices.
- Create an API for the site that is publicly hosted. 

## User site must include
- Home page with a hero banner with an image that is uploaded to Strapi and a list of featured products. 
- Products page with a list of all products. Each product must display its title, price and image. The product should link to its products detail page. A search text box, only the products that include the searched text in their title or description should be listed.
- Product details page witch is reached by a user clicking on a product on the product list page. The product details page must include: title, description, image, price, an add to cart button. This will toggle the product in and out of a cart array stored in local storage.
- Cart/Basket page must display a list of all products added to the cart. Load the items that have been added to local storage and display them on the page. If the cart is empty display a message indicating this.
- Each product in the cart must display: title, price, a link to the product view page, image, after the list of products, display the total price of all the products in the cart.
- Log in page. Admin should only be accessible to logged in admin users. Use local storage to keep the user logged in. 

## Admin section must include
- When logged in, display a logout button in the layout that logs the user out. Logging out should not clear the cart.
- Add/edit/delete products: create form(s) that allow products to be added, edited and deleted. The form must allow the user to toggle whether a product is featured. Display confirmation dialog before product is deleted. 

# Built with 
- 💻 API from WordPress installation
- 📄 HTML
- 👁 SASS
- 👩🏽‍💻 JavaScript using modules to split up code
- 🏞 Adobe XD for design

# Getting started 
## Installing
- Clone the repo
```
gh repo clone karineudahl/SemesterProject2
```
## Running 
- Right click on an HTML file, and "Open with Live Server". 
