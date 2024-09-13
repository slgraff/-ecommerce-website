import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ContactUs from './components/ContactUs'; // Add this line
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact-us" element={<ContactUs />} /> {/* Fixed path */}
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;

