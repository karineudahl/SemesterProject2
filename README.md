# Sneakers (Semester Project 2 at Noroff) 

## Username and password to log in to admin site 

Username: Karine

Password: password1

<img width="1007" alt="Screenshot 2022-09-28 at 20 35 58" src="https://user-images.githubusercontent.com/74554925/192862072-c6501cf6-0bac-48aa-b49a-f86804d5811e.png">

# Description 

- Goal is to create an e-commerce website that has both customer-facing and admin sections. Both sections should be responsive and the website will be populated by a Strapi API supplied by Noroff.
- You can choose the theme of your website. 
- Design your website using your favourite tool. You will need to find a suitable logo.
- You must apply all that you have learned in your studies so far. The site must have a good user experience and UI design, following today’s trends and design patterns.
- Build a frontend with home, product list, product detail and cart pages.
- Build admin pages to create, update and delete products.
- The website must be responsive on all devices.
- Create an API for the site that is publicly hosted. 

## User site must include
- Home page with a hero banner with an image that is uploaded to Strapi. You can find this in the Home single type in the provided Strapi project.
A list of featured products. On Strapi products can be marked as ‘featured’. When a product is marked as ‘featured’ it should be displayed on the homepage. 
- Products page with a list of all products added to Strapi. Each product must display its title, price and image. The product should link to its products detail page. A search text box. When searching (filtering), only the products that include the searched text in their title or description should be listed.
- Product details page witch is reached by a user clicking on a product on the product list page. The product details page must include: title, description, image, price, an add to cart button. This will toggle the product in and out of a cart array stored in local storage.
- Cart/Basket page must display a list of all products added to the cart. Load the items that have been added to local storage and display them on the page. If the cart is empty display a message indicating this.
- Each product in the cart must display: title, price, a link to the product view page, image, after the list of products, display the total price of all the products in the cart.

## Admin section must include
- Admin section (apart from the log in form) must only be accessible to logged in admin users and must include the following features.
Login/Logout
- Create an admin login form that allows administrator users to login. Use local storage to keep the user logged in.
- When logged in, display a logout button in the layout that logs the user out. Logging out should not clear the cart.
- Add/edit/delete products: create form(s) that allow products to be added, edited and deleted. The form must allow the user to toggle whether a product is featured.
- Allow products to be deleted. Before a product is deleted you must display a confirmation dialog. The product should only be deleted if the user confirms.

# Built with 
- JavaScript and split code up using modules (imports/exports)
- SASS

# Getting started 
- Clone the repo

# Running 
- Right click and run open with live server. 
