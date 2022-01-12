import React from "react";
import { useSelector } from "react-redux";
import { StripeCheckout } from ".";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="">
      <h2>checkout summary</h2>
      <h3>{`Total Items: ${cart.quantity}`}</h3>
      <h3>{`Amount to Pay: ${cart.total}`}</h3>
      <StripeCheckout />
    </div>
  );
};

export default Checkout;
