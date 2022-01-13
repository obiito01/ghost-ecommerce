import React, { useState, useEffect } from "react";
import { ProductCard } from "../components";
import { Helmet } from "react-helmet";
import PropagateLoader from "react-spinners/PropagateLoader";
import { motion } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";
import { fetchFromAPI } from "../helpers";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(async () => {
    setIsLoading(true);
    const res = await fetch(
      "https://ghost-lifestyle.herokuapp.com/api/products"
    );
    const products = await res.json();
    setProducts(products);
    setFilteredProducts(products);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(input.toLowerCase())
      )
    );
  }, [input]);

  const handleInput = (e) => {
    setInput(e.target.value);
    console.log({ input });
  };

  return (
    <main className="max-w-[1300px] mx-auto py-12 ">
      <Helmet>
        <title>GHOST® | Products</title>
      </Helmet>
      <section className="px-7 lg:p-5">
        {/* products grid */}
        {isLoading ? (
          <div className=" w-full h-screen-minus-nav grid place-items-center">
            <PropagateLoader color="#ef4444" />
          </div>
        ) : (
          <>
            <div className="mb-12 flex justify-end items-center gap-5">
              <div className="bg-white rounded-md text-neutral-700 font-[500] py-2 px-4 flex items-center shadow-md">
                <AiOutlineSearch size={24} />

                <input
                  id="product"
                  type="text"
                  onChange={(e) => handleInput(e)}
                  value={input}
                  placeholder="Search..."
                  className="p-2 outline-none text-sm"
                />
              </div>
            </div>
            {filteredProducts.length > 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product._id} {...product} />
                ))}
              </motion.div>
            ) : (
              <div className="flex flex-col justify-center items-center gap-10">
                <h1 className="text-xl font-[400]">
                  Sorry, {input} does not exist!
                </h1>
                <img src="/images/sleep.svg" alt="Sleep" className="" />
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
};

export default Product;
