import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchFromAPI } from "../helpers";
import { useStripe } from "@stripe/react-stripe-js";

const OrderSummary = () => {
  const cart = useSelector((state) => state.cart);
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
      body: { line_items },
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
    <div className="">
      <h1 className="text-lg font-[500] mb-10">ORDER SUMMARY</h1>
      {/* summary */}
      <div className="flex flex-col gap-4 mb-10">
        <div className="flex items-center justify-between">
          <span className="font-[400] text-lg">Subtotal</span>
          <span className="font-[400] text-base">$ {cart.total}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-[400] text-lg">Estimated Shipping</span>
          <span className="font-[400] text-base">$ 4.99</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-[400] text-lg">Shopping Discount</span>
          <span className="font-[400] text-base">- $ 4.99</span>
        </div>
        <div className="flex items-center justify-between border-t py-4">
          <span className="font-[400] text-lg">Total</span>
          <span className="font-[400] text-base">$ {cart.total}</span>
        </div>
      </div>

      <button
        className="bg-indigo-600 rounded-md text-white py-4 mx-auto w-full hover:ring-2 ring-inset ring-indigo-600 hover:text-indigo-600 hover:bg-transparent duration-500 font-[500]"
        onClick={(e) => handleGuestCheckout(e)}
      >
        CHECKOUT NOW
      </button>
    </div>
  );
};

export default OrderSummary;
