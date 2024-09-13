import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'react-feather';
import '../pages/UserDashboard.css';

function UserDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = require('../assests/Prakruthi11736.jpg');
    img.onload = () => {
      setLoading(false); // Hide loader when image loads
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="dashboard-container">
      {/* Loader visible only while image is loading */}
      {loading && <div className="loader"></div>}

      <header className="header">
        <div className="hamburger-menu" onClick={toggleMenu}>
          &#9776; {/* Unicode for hamburger menu */}
        </div>

        <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
          <Link to="/">Login</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/cart" className="cart-link">
            <ShoppingCart size={24} />
          </Link>
        </nav>
      </header>

      <div className={`dashboard-content ${loading ? 'hide-content' : ''}`}>
        <div className="jewelry-promo">
          <h1>Exclusive Jewelry Collection</h1>
          <p>Discover the latest designs in our exquisite jewelry store.</p>
          <Link to="/products" className="shop-now-button">Shop Now</Link>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
