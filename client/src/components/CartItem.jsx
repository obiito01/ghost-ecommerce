import React, { useState } from "react";
import { MdClear } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearProduct, updateProduct } from "../redux/cartSlice";

const CartItem = ({
  _id,
  name,
  description,
  image,
  quantity,
  price,
  index,
}) => {
  const [count, setCount] = useState(quantity);
  const dispatch = useDispatch();

  const handleClick = (type) => {
    // switch (type) {
    //   case "minus":
    //     if (count !== 1) {
    //       setCount(count - 1);
    //     }
    //     break;
    //   case "add":
    //     setCount(count + 1);
    //     break;
    // }
  };

  const handleClear = (index) => {
    dispatch(clearProduct(index));
  };

  return (
    <div className="flex relative border-b py-2 last:border-none">
      <button
        className="absolute right-1 top-1"
        onClick={() => handleClear(index)}
      >
        <MdClear
          size={32}
          className="text-neutral-700 hover:bg-neutral-200 rounded-full duration-300 p-2 hover:text-neutral-800"
        />
      </button>
      <div className="flex-[2] flex">
        <img
          src={image}
          alt={name}
          className="object-contain
         inline-block w-[150px]"
        />
        {/* description */}
        <div className="p-5  flex flex-col gap-1">
          <p className="font-[400] text-base">
            Product:{" "}
            <Link to={`/products/${_id}`}>
              <span className="text-base font-[500] hover:text-indigo-600 transition-colors duration-300">
                {name}
              </span>
            </Link>
          </p>
          <p className="font-[400] text-base">
            Quantity:{"  "}
            <span className="text-base font-[500]">{quantity}</span>
          </p>
          <p className="font-[400] text-base">
            Total:{"  "}
            <span className="text-base font-[500]">
              ${(Math.round(quantity * price * 100) / 100).toFixed(2)}
            </span>
          </p>
        </div>
      </div>
      {/* item counter */}
      {/* <div className="flex-1 flex items-center justify-center gap-2 ">
        <button
          className=" grid place-items-center hover:bg-gray-200 rounded-full w-10 h-10 duration-500 font-base text-3xl"
          onClick={() => handleClick("minus")}
        >
          -
        </button>
        <span className="text-xl font-medium bg-neutral-200  px-4 py-2 rounded-lg">
          {count}
        </span>
        <button
          className=" grid place-items-center hover:bg-gray-200 rounded-full w-10 h-10 duration-500 font-base text-3xl"
          onClick={() => handleClick("add")}
        >
          +
        </button>
      </div> */}
    </div>
  );
};

export default CartItem;
