# Project Name

**Pooja jewellery Store**

## Description

This is a React-based web application for an online jewellery store. Users can browse products, add items to their cart, and place orders. The project includes a user-friendly UI and responsive design.

**Responsive Design:** Fully adapts to various screen sizes, including desktop, tablet, and mobile views.

## Features

- User login functionality
- Product listing with search functionality
- Add to Cart and Checkout features
- Responsive UI
- JSON Server for backend simulation
- Deployed on GitHub 

## Tech Stack

- React
- React Router
- Context API for state management (e.g., CartContext)
- JSON Server (for backend simulation)
- Custom CSS for styling


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git

2. Navigate to the project folder:

    cd ecommerce-app

3. Install dependencies: 
    
    npm install

4. Start the application:
    
    npm start


 # Folder Structure


 ├── public
├── src
│   ├── assests
│   ├── componentst
│   ├── context  
│   ├── pages
│   ├── App.js
│   ├── index.js
│   └── index.css 
├── README.md
├── package.json
└── db.json (if using JSON Server)


# Login Credentials
To access the application, use the following login credentials:

Username: user
Password: userpass

## UserDashboard

After the user successfully logs in, they are redirected to the **UserDashboard**. This page serves as the main entry point for users  navigate through the various sections of the application, such as products and the shopping cart.

### Key Features

1. **Responsive Header with Navigation:**
   - The navigation bar has links to:
     - `Login` page
     - `Products` page
     - `Contact Us` page
     - `Cart` page (with a shopping cart icon).
   -
 **Loading State for Image:**
   - When the dashboard loads, a loader is displayed while the background image is being fetched.
   - The `useEffect` hook handles image loading and hides the loader once the image is loaded.


## ProductList

# Search Functionality: 
Users can search for products by name, category, or price using a dynamic search bar.

# Product Liking:
 Users can "like" products, which are added to a personalized favorites list.

# View Liked Products:
 Liked products can be viewed in a separate popup that shows all the items marked as favorites.

# Add to Cart: 
Products can be added to the cart, with a notification confirming the action.

# Image Popup: 
Clicking on a product image opens an enlarged view for better details.


## Cart

# Shows Cart Items: 
Displays items in the cart with images, names, prices, and quantities.

# Manage Cart: 
Allows users to remove items or clear the entire cart.

# Place Order:
 Opens a success modal when an order is placed.

# State Management: 
Uses useCart for cart data and useState for modal control.


