import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// Main component
function Checkout({ user, cart }) {
  return (
    <Elements stripe={stripePromise}>
      <StripeCheckout user={user} cart={cart} />
    </Elements>
  );
}

// Stripe form component
function StripeCheckout({ user, cart }) {
  const [clientSecret, setClientSecret] = useState("");
  const [address, setAddress] = useState({ line1: "", city: "", zip: "" });
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/stripe/create-payment-intent`, {
      amount: totalAmount,
      userId: user?._id
    }).then(res => {
      setClientSecret(res.data.clientSecret);
    });
  }, [cart, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: user?.name || "Guest",
          address: {
            line1: address.line1,
            city: address.city,
            postal_code: address.zip
          }
        }
      }
    });

    if (error) {
      alert(error.message);
    } else if (paymentIntent.status === "succeeded") {
      alert(" Payment successful!");

      // OPTIONAL: Save address in DB
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/address/save`, {
        userId: user._id,
        address,
        card: {
          number: "**** **** **** 4242", // Dummy value
          name: user?.name
        }
      });

      // Go home and clear cart
      navigate("/");
      window.location.reload(); // Reload to clear cart in memory
    }
  };

  return (
    <div className="checkout-page">
      <h2>Stripe Checkout</h2>
      <form onSubmit={handleSubmit}>
        <h3>Shipping Address</h3>
        <input
          type="text"
          placeholder="Address Line 1"
          value={address.line1}
          onChange={(e) => setAddress({ ...address, line1: e.target.value })}
        />
        <input
          type="text"
          placeholder="City"
          value={address.city}
          onChange={(e) => setAddress({ ...address, city: e.target.value })}
        />
        <input
          type="text"
          placeholder="ZIP"
          value={address.zip}
          onChange={(e) => setAddress({ ...address, zip: e.target.value })}
        />

        <h3>Card Information</h3>
        <CardElement />
        <br />
        <button type="submit" disabled={!stripe || !clientSecret}>
          Pay ${totalAmount.toFixed(2)}
        </button>
      </form>
    </div>
  );
}

export default Checkout;
