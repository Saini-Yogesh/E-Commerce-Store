# **E-Commerce Website**

## **Overview**
A feature-rich e-commerce platform built using modern web technologies to provide a seamless online shopping experience. The platform includes user authentication, product browsing, payment integration, and an intuitive admin panel for managing inventory and orders.

---

## **Features**
- **User-Friendly Interface**: Responsive design for desktop and mobile devices.
- **Product Management**: Browse, search, and filter products by categories, price, and ratings.
- **Shopping Cart**: Add, update, and remove items.
- **Secure Payments**: Integrated with PayPal/Stripe for transactions.
- **User Authentication**: Login, signup, and profile management.
- **Admin Dashboard**: Manage products, orders, and users.

---

## **Technologies Used**
- **Frontend**: React, Redux Toolkit, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Integration**: PayPal SDK
- **State Management**: Redux Toolkit
- **Charts and Graphs**: React ApexCharts

---

## **Getting Started**

### **Prerequisites**
Ensure you have the following installed:
- Node.js (>=14.x)
- MongoDB (local or cloud)

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/e-commerce-website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd e-commerce-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### **Environment Variables**
Create a `.env` file in the root directory and add the following:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   PAYPAL_CLIENT_ID=your_paypal_client_id
   JWT_SECRET=your_jwt_secret
   ```

### **Running the App**
- Start the backend server:
   ```bash
   npm run server
   ```
- Start the frontend development server:
   ```bash
   npm run client
   ```

---

## **Scripts**
- `npm run server`: Start the backend server.
- `npm run client`: Start the frontend development server.
- `npm run dev`: Start both frontend and backend concurrently.

---

## **Contributing**
Feel free to contribute to this project! Open an issue or submit a pull request.

