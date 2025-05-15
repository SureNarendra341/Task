import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.title} />
                <span>{item.title}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <Link to="/checkout"><button>Proceed to Checkout</button></Link>
        </>
      )}
    </div>
  );
}

export default Cart;
