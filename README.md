🛒 Amazon UI Clone (React)
📌 Project Overview

This project is a frontend Amazon-like e-commerce UI clone built using React and Vite.
It demonstrates core React concepts such as component architecture, routing, global state management, and responsive design.

The application allows users to browse products, view product details, add items to a cart, and perform a mock login.

🎯 Features

🏠 Home page with product listing
🔍 Product detail page
🛒 Cart management
🔐 Mock login functionality
🌐 Client-side routing using React Router
🌙 Dark Amazon-style UI
📱 Fully responsive layout
🧠 Global state management using Context API + Reducer

🧰 Tech Stack
React (with Vite)
React Router DOM
Context API & useReducer
CSS Grid & Flexbox
JavaScript (ES6)

📂 Folder Structure

src/
├── assets/
│   └── products.js
├── components/
│   ├── Navbar.jsx
│   └── ProductCard.jsx
├── context/
│   ├── StoreContext.jsx
│   └── reducer.js
├── pages/
│   ├── Home.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   └── Login.jsx
├── App.jsx
├── App.css
├── main.jsx
└── index.css

⚙️ Installation & Setup
1️⃣ Extract the ZIP
Unzip the project folder.

2️⃣ Install dependencies
npm install

3️⃣ Install React Router
npm install react-router-dom

4️⃣ Run the project
npm run dev

5️⃣ Open in browser
http://localhost:3000

🔀 Routes Used
Route	Description
/	Home page
/product/:id	Product detail page
/cart	Cart page
/checkout	Checkout page
/login	Login page

🧠 State Management
Global state is managed using Context API + useReducer, handling:
Cart items
User login state
This avoids prop drilling and keeps the app scalable.

🎨 UI Fix Highlight
To prevent product images from overlapping, fixed image dimensions and object-fit: contain were applied in CSS, ensuring each product stays within its grid slot.

🚀 Future Enhancements
Search and filter functionality
Quantity control in cart
Dark/Light mode toggle
Backend integration
Payment gateway simulation

👨‍🎓 Academic Use
This project is suitable for:
React assignments
Frontend mini-projects
UI/UX demonstrations
College practical submissions
