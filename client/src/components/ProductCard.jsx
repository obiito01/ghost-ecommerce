import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
const ProductCard = ({ _id, name, image, price }) => {
  return (
    <>
      <Link to={`/products/${_id}`}>
        <motion.div
          whileHover={{ y: -3 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="bg-white rounded-xl cursor-pointer shadow-sm p-5 flex flex-col items-center justify-between hover:bg-neutral-100 group hover:shadow-lg duration-300 hover:ring-2 ring-offset-1 ring-indigo-500"
        >
          <h3 className="font-[500] text-center text-sm lg:text-base md:test-sm">
            Protein
          </h3>
          <div className="h-[85%] w-[85%] mb-2">
            <img
              src={image}
              alt="Product"
              className="w-full h-full object-contain block"
            />
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="font-[500] text-sm lg:text-base group-hover:text-indigo-500 duration-500">
              {name}
            </span>
            <span className="font-[500] text-sm lg:text-base group-hover:text-indigo-500 duration-500">
              $ {price}
            </span>
          </div>
        </motion.div>
      </Link>
    </>
  );
};

export default ProductCard;
