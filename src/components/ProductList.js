import React, { useState } from "react";
import { ShoppingCart, Heart, User, ArrowLeft, Search } from "react-feather"; // Import Search icon
import { Link, useNavigate } from "react-router-dom";
import "../components/Productlist.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { products } from "../components/products";
import { useCart } from "../context/CartContext";

function ProductList() {
 const [searchTerm, setSearchTerm] = useState("");
 const [likedProducts, setLikedProducts] = useState([]);
 const [selectedImage, setSelectedImage] = useState(null);
 const [showLikedPopup, setShowLikedPopup] = useState(false);
 const {cart, addToCart } = useCart();
 const navigate = useNavigate();

 console.log("cart",cart)

 const filteredProducts = products.filter(
 (product) =>
 product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
 product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
 product.price.toString().includes(searchTerm)
 );

 const uniqueProducts = Array.from(
 new Map(filteredProducts.map((product) => [product.id, product])).values()
 );

 const toggleLike = (id) => {
 setLikedProducts((prevState) =>
 prevState.includes(id)
 ? prevState.filter((productId) => productId !== id)
 : [...prevState, id]
 );
 };

 const getImagePath = (imageName) => {
 try {
 return require(`../assests/${imageName}`);
 } catch (error) {
 console.error("Error loading image:", error);
 return "";
 }
 };

 const handleAddToCart = (product) => {
 addToCart(product);
 console.log("Product added to cart:", product);
 toast.success("Product added to cart", {
 position: "top-right",
 autoClose: 3000,
 hideProgressBar: false,
 closeOnClick: true,
 pauseOnHover: true,
 draggable: true,
 progress: undefined,
 });
 };

 const handleImageClick = (imageName) => {
 setSelectedImage(getImagePath(imageName));
 };

 const closePopup = () => {
 setSelectedImage(null);
 };

 const handleBack = () => {
 navigate("/user-dashboard");
 };

 const openLikedPopup = () => {
 setShowLikedPopup(true);
 };

 const closeLikedPopup = () => {
 setShowLikedPopup(false);
 };

 return (
 <div>
 <ToastContainer />
 <header className="profiledisplay-header">
 <div className="profiledisplay-header-left">
 <ArrowLeft
 size={24}
 className="profiledisplay-header-icon"
 onClick={handleBack}
 />
 <div className="profiledisplay-search-bar">
 <input
 type="text"
 placeholder="Search products by name, category, or price"
 value={searchTerm}
 onChange={(e) => setSearchTerm(e.target.value)}
 className="profiledisplay-search-input"
 />
 </div>
 <Search
 size={24}
 className="profiledisplay-search-icon" /* This icon is visible on mobile view */
 onClick={() => console.log("Search icon clicked")}
 />
 </div>
 <div className="profiledisplay-header-right">
 <div className="fav-icon-wrapper">
 <Heart
 size={24}
 className={`profiledisplay-header-icon ${
 likedProducts.length > 0 ? "liked" : ""
 }`}
 onClick={openLikedPopup}
 />
 {likedProducts.length > 0 && (
 <div className="fav-counter-badge">{likedProducts.length}</div>
 )}
 </div>
 <Link to="/cart">
 <span className="profiledisplay-product-cart-count">
 {cart.length}
 </span>
 <ShoppingCart size={24} className="profiledisplay-header-icon" />
 </Link>
 <User size={24} className="profiledisplay-header-icon" />
 </div>
 </header>

 <div className="profiledisplay-product-grid profiledisplay-product-container">
 {uniqueProducts.map((product) => (
 <div key={product.id} className="profiledisplay-product-card">
 <div className="profiledisplay-image-container">
 <img
 src={getImagePath(product.image)}
 alt={product.name}
 className="profiledisplay-product-image"
 onClick={() => handleImageClick(product.image)}
 />
 </div>
 <div className="profiledisplay-name-price">
 <h3>{product.name}</h3>
 <p className="profiledisplay-price">Rs: {product.price}</p>
 </div>
 <p className="profiledisplay-category">
 Category: {product.category}
 </p>
 <button onClick={() => handleAddToCart(product)}>
 Add to Cart
 </button>
 <Heart
 size={24}
 className={`like-icon ${
 likedProducts.includes(product.id) ? "liked" : ""
 }`}
 onClick={() => toggleLike(product.id)}
 />
 </div>
 ))}
 </div>

 {selectedImage && (
 <div className="popup-overlay" onClick={closePopup}>
 <div className="popup-content" onClick={(e) => e.stopPropagation()}>
 <img src={selectedImage} alt="Product" className="popup-image" />
 <button className="popup-close-button" onClick={closePopup}>
 &times;
 </button>
 </div>
 </div>
 )}

 {showLikedPopup && (
 <div
 className="likediconproductpopup-overlay"
 onClick={closeLikedPopup}
 >
 <div
 className={`likediconproductpopup-content ${
 likedProducts.length === 0 ? "no-products" : ""
 }`}
 onClick={(e) => e.stopPropagation()}
 >
 <button
 className="likediconproductpopup-close-button"
 onClick={closeLikedPopup}
 >
 &times;
 </button>
 {likedProducts.length > 0 ? (
 <div className="likediconproductpopup-products">
 {likedProducts.map((id) => {
 const product = products.find((p) => p.id === id);
 return (
 <div
 key={id}
 className="likediconproductpopup-product-card"
 >
 <img
 src={getImagePath(product.image)}
 alt={product.name}
 className="likediconproductpopup-product-image"
 />
 <h3>{product.name}</h3>
 <p className="likediconproductpopup-price">
 Rs: {product.price}
 </p>
 </div>
 );
 })}
 </div>
 ) : (
 <p className="no-products-message">
 No liked products available.
 </p>
 )}
 </div>
 </div>
 )}
 </div>
 );
}

export default ProductList;