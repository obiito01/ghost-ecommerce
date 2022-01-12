import React, { useState } from "react";
import { CartItem, OrderSummary } from "../components";
import { BsCartFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchFromAPI } from "../helpers";
import { useStripe } from "@stripe/react-stripe-js";

const CheckoutSection = () => {
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

  const leftVariant = {
    init: {
      x: -50,
      opacity: 0,
    },
    anim: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 14,
      },
    },
  };
  const rightVariant = {
    init: {
      x: 50,
      opacity: 0,
    },
    anim: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 14,
      },
    },
  };

  const emptyCartVariant = {
    init: {
      y: 50,
      opacity: 0,
    },
    anim: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 14,
      },
    },
  };

  return (
    <section className="py-20 px-5 max-w-[1300px] mx-auto">
      {cart.quantity > 0 ? (
        <>
          {/* header */}
          <div className="mb-5 flex items-center justify-between ">
            <Link
              to="/products"
              className="bg-indigo-600 hover:bg-transparent hover:ring-2 ring-inset ring-indigo-600 hover:text-indigo-600 text-white py-3 px-4 rounded-md text-base font-medium duration-300"
            >
              CONTINUE SHOPPING
            </Link>

            <button
              className="hover:bg-indigo-600 hover:text-white ring-2 ring-indigo-600 ring-inset text-indigo-600  py-3 px-4 rounded-md text-base font-medium duration-300"
              onClick={(e) => handleGuestCheckout(e)}
            >
              CHECKOUT NOW
            </button>
          </div>
          {/* cart container */}
          <div className="grid grid-cols-3 gap-5 items-start">
            <motion.div
              variants={leftVariant}
              animate="anim"
              initial="init"
              className="bg-white ring-2 ring-inset ring-neutral-300 rounded-lg col-span-2 p-5"
            >
              {cart.products.map((product, index) => (
                <CartItem
                  key={product._id + index}
                  {...product}
                  index={index}
                />
              ))}
            </motion.div>
            <motion.div
              variants={rightVariant}
              animate="anim"
              initial="init"
              className="bg-white ring-2 ring-inset ring-neutral-300 rounded-lg  col-span-1 p-7"
            >
              <OrderSummary />
            </motion.div>
          </div>
        </>
      ) : (
        <motion.div
          variants={emptyCartVariant}
          initial="init"
          animate="anim"
          className="flex flex-col items-center justify-center gap-10 h-[600px]"
        >
          <img
            src="/images/cart-empty.svg"
            alt="Cart empty"
            className="w-[300px] inline-block"
          />
          <h1 className="font-medium text-xl">
            You cart is empty! Go add something to the cart!
          </h1>
          <Link
            to="/products"
            className=" font-[500] bg-indigo-600 rounded-md text-white py-3 px-4 hover:ring-2 ring-inset ring-indigo-600 hover:bg-transparent hover:text-indigo-600 transition-colors duration-500"
          >
            Go to Products
          </Link>
        </motion.div>
      )}
    </section>
  );
};

export default CheckoutSection;
