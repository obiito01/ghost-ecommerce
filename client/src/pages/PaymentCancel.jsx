import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearProduct } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
const PaymentCancel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <main>
      <section className="p-20">
        <div className=" text-center">
          <img
            src="/images/warning.svg"
            alt="Payment canceled"
            className="w-[400px] mx-auto block mb-10"
          />
          <h1 className="font-medium text-2xl mb-5">Payment canceled!</h1>
          <p className="font-[400] text-base mb-10">
            Don't worry. You have not been charged!
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

export default PaymentCancel;
