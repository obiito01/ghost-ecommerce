import React, { useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { fetchFromAPI } from "../helpers";

const StripeCheckout = () => {
  const cart = useSelector((state) => state.cart);
  const [email, setEmail] = useState("");
  const stripe = useStripe();

  const handleGuestCheckout = async (e) => {
    e.preventDefault();
    const line_items = cart.products.map((product) => {
      return {
        quantity: product.quantity,
        price_data: {
          currency: "gbp",
          unit_amount: product.price * 100, //amount in cents
          product_data: {
            name: product.name,
            description: product.description,
            images: [product.image],
          },
        },
      };
    });

    const response = await fetchFromAPI("payments", {
      body: { line_items, customer_email: email },
    });

    const { sessionId } = response;
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleGuestCheckout}>
      <div>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          value={email}
          className=""
        />
      </div>
      <div>
        <button type="submit" className="">
          Submit
        </button>
      </div>
    </form>
  );
};

export default StripeCheckout;
