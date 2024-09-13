import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
      let updatedCart;

      if (existingProductIndex >= 0) {
        updatedCart = prevCart.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }

      console.log('Updated Cart:', updatedCart); // Debugging output
      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(item => item.id !== productId);
      console.log('Removed product from cart:', updatedCart); // Debugging output
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    console.log('Cart cleared'); // Debugging output
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
