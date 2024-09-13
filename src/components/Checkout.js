import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; // For navigation
// import '../components/Checkout.css'; // Assuming you have a CSS file for styling

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleOrder = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Add items to your cart before proceeding to checkout.');
      return;
    }

    // Process the order (e.g., save to localStorage or handle client-side logic)
    localStorage.setItem('order', JSON.stringify(cart));

    // Clear the cart
    clearCart();

    // Redirect to a confirmation or thank you page
    navigate('/confirmation');
  };

  const totalCost = cart.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
  const totalItems = cart.reduce((acc, { quantity }) => acc + quantity, 0);

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty. Add items to your cart before proceeding.</p>
        </div>
      ) : (
        <div>
          <div className="checkout-summary">
            <p>Total Products: {totalItems}</p>
            <p>Total Cost: Rs {totalCost.toFixed(2)}</p>
          </div>
          <button 
            className="place-order-button"
            onClick={handleOrder}
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
