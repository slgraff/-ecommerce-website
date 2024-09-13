
export const products = [
    {
      id: 1,
      name: "Gold Chain",
      category: "Chain",
      price: 100,
      image: "chain-11.jpg"
    },
    {
      id: 2,
      name: "Silver Chain",
      category: "Chain",
      price: 80,
      image: "chain-12.jpg"
    },
    {
      id: 3,
      name: "Platinum Chain",
      category: "Chain",
      price: 200,
      image: "chain-13.jpg"
    },
    {
      id: 4,
      name: "P2 Chain",
      category: "Chain",
      price: 200,
      image: "chain-14.jpg"
    },
    {
      id: 5,
      name: "P3 Chain",
      category: "Chain",
      price: 200,
      image: "chain-15.jpg"
    },
    {
      id: 6,
      name: "Gold ring",
      category: "Ring",
      price: 100,
      image: "ring-1.jpg"
    },
    {
      id: 7,
      name: "Gold ring2",
      category: "Ring",
      price: 100,
      image: "ring-2.jpg"
    },
    {
      id: 8,
      name: "Gold ring3",
      category: "Ring",
      price: 100,
      image: "ring-3.jpg"
    },
    {
      id: 9,
      name: "Gold ring4",
      category: "Ring",
      price: 100,
      image: "ring-4.jpg"
    },
    {
      id: 10,
      name: "Gold ring5",
      category: "Ring",
      price: 100,
      image: "ring-5.jpg"
    },
    {
      id: 11,
      name: "earring1",
      category: "earRing",
      price: 100,
      image: "earring-1.jpg"
    },
    {
      id: 12,
      name: "earring2",
      category: "earRing",
      price: 100,
      image: "earring-2.jpg"
    },
    {
      id: 13,
      name: "earring3",
      category: "earRing",
      price: 100,
      image: "earring-3.jpg"
    },
    {
      id: 14,
      name: "earring4",
      category: "earRing",
      price: 100,
      image: "earring-4.jpg"
    },
    {
      id: 15,
      name: "earring5",
      category: "earRing",
      price: 100,
      image: "earring-5.jpg"
    }
  ];
  
  // Cart Management
  let cart = []; // Initialize an empty cart
  
  export const getCart = () => {
    return cart;
  };
  
  export const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  };
  
  export const getCartTotal = () => {
    return cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
  };
  