import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearProduct } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
const PaymentSuccess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearProduct());
  }, []);

  return (
    <main>
      <section className="p-20">
        <div className=" text-center">
          <img
            src="/images/success.svg"
            alt="Payment successful"
            className="w-[400px] mx-auto block mb-10"
          />
          <h1 className="font-medium text-2xl mb-5">
            Purchase was successful! Thank you for shopping with us!
          </h1>
          <p className="font-[400] text-base mb-10">
            We are currently processing your order and will send you a
            confirmation email shortly.
          </p>
          <button
            className="bg-indigo-600 text-white p-4 rounded-md font-[500] hover:ring-2 ring-inset hover:text-indigo-600 hover:bg-transparent ring-indigo-600 transition-colors duration-500 "
            onClick={() => navigate("/products")}
          >
            Continue Shopping
          </button>
        </div>
      </section>
    </main>
  );
};

export default PaymentSuccess;
