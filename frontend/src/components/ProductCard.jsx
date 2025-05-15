import React from "react";

function ProductCard({ product, cart, setCart }) {
  const handleAddToCart = () => {
    setCart([...cart, product]);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
