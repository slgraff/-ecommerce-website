import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useCart } from '../context/CartContext';
import '../components/Cart.css';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleImageError = (e) => {
    e.target.src = '/path/to/placeholder-image.jpg'; 
  };

  const totalCost = cart.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
  const totalItems = cart.reduce((acc, { quantity }) => acc + quantity, 0);

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Add items to your cart before proceeding to checkout.');
      return;
    }

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Navigate after 1 second
    setTimeout(() => {
      navigate('/user-dashboard');
    }, 1000);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div>
          <ul className="cart-item-list">
            {cart.map(({ id, image, name, price, quantity }) => (
              <li key={id} className="cart-item">
                <img
                  src={require(`../assests/${image}`)} // Ensure this path is correct
                  alt={name}
                  className="cart-item-image"
                  onError={handleImageError}
                />
                <div className="cart-item-details">
                  <h3>{name}</h3>
                  <p>Rs: {price} x {quantity}</p>
                </div>
                <button 
                  className="remove-item-button"
                  onClick={() => removeFromCart(id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Total Products: {totalItems}</p>
            <p>Total Cost: Rs {totalCost.toFixed(2)}</p>
          </div>
          <div className="cart-actions">
            <button 
              className="clear-cart-button"
              onClick={clearCart}
            >
              Clear Cart
            </button>
            <button 
              className="checkout-button"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Success!</h3>
            <p>Your order has been placed successfully.</p>
            <button className="modal-close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
