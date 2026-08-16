# 🛒 Amazon Mini Clone

A responsive e-commerce website built using React.js and Tailwind CSS.  
This project is inspired by the basic shopping experience of Amazon and was created to practice React concepts such as routing, reusable components, API integration, state management, and Context API.

## 🚀 Features

- 🏠 Home page with hero section and product categories
- 🛍️ Products page displaying products from an API
- 🔍 Dynamic Product Details page
- 🛒 Add products to Cart
- ❌ Remove products from Cart
- 💰 Automatic cart total calculation
- 🔐 Login page UI
- 📦 Orders page
- 🧭 Navigation using React Router
- 📱 Responsive design using Tailwind CSS
- ♻️ Reusable Product Card component
- 🌐 API integration using Fake Store API
- 🗂️ Cart state management using React Context API

## 🛠️ Technologies Used

- React.js
- React Router
- Tailwind CSS
- JavaScript
- HTML
- Fake Store API
- Vite
- Git & GitHub

## 📂 Project Structure

src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ProductCard.jsx
│
├── Context/
│   └── CartContext.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   ├── Login.jsx
│   ├── Orders.jsx
│   └── NotFound.jsx
│
├── App.jsx
├── main.jsx
└── index.css

## 🔄 Application Flow

Home
  ↓
Products
  ↓
Product Details
  ↓
Add to Cart
  ↓
Cart
  ↓
Checkout

Other available pages:

Login → User Login UI

Orders → Display Previous Orders

## 🧠 React Concepts Practiced

### React Router

Used React Router for navigation between pages and dynamic product routes.

Examples:

- `/`
- `/products`
- `/products/:id`
- `/cart`
- `/login`
- `/orders`

### Dynamic Routing

The Product Details page uses a dynamic route:

`/products/:id`

The product ID is retrieved using `useParams()`.

### API Integration

Products are fetched from the Fake Store API:

`https://fakestoreapi.com/products`

### React State

`useState()` is used for:

- Product data
- Cart data
- Login form fields

### useEffect

`useEffect()` is used to fetch product data when the page loads or when the product ID changes.

### Context API

`CartContext` is used to share cart information between different components without passing props through multiple components.

The Cart Context provides:

- `cart`
- `addToCart()`
- `removeFromCart()`

### Reusable Components

The `ProductCard` component is reused for displaying different products.

## 🎨 Styling

Tailwind CSS is used for the complete UI.

The project uses responsive Tailwind classes to make the application work across different screen sizes.

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/sakshishewale01/React_04_Amazon_Mini_Clone.git
````

Go to the project directory:

```bash
cd React_04_Amazon_Mini_Clone
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local development URL shown in the terminal.



## 🎯 Purpose of the Project

This project was created as a learning project to understand how to build a multi-page e-commerce application using React.

The main focus was on learning:

* Component-based development
* React Router
* Dynamic routes
* API integration
* State management
* Context API
* Reusable components
* Tailwind CSS
* Git and GitHub workflow

```
