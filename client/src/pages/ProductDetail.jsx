import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { addProduct } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetail = () => {
  const productId = useParams().id;
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  // fetch single product data
  useEffect(async () => {
    setIsLoading(true);
    const res = await fetch(`http://localhost:5000/api/products/${productId}`);
    const product = await res.json();
    setProduct(product);
    setIsLoading(false);
  }, []);

  const handleAddToCart = () => {
    dispatch(
      addProduct({
        ...product,
        quantity: count,
      })
    );
  };

  const imgVariant = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    exit: {
      opacity: 0,
      y: 500,
      transition: {
        duration: 1,
      },
    },
  };

  const boxVariant = {
    initial: { y: -500 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const cardChildVariant = {
    initial: {
      y: -20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12,
      },
    },
  };

  return (
    <>
      <main className="h-screen-minus-nav bg-neutral-200 overflow-hidden">
        <Helmet>
          <title>{`GHOST® | ` + product.name}</title>
        </Helmet>
        <section className="h-full w-full flex">
          {/* left side */}
          <div className="w-full place-items-center hidden md:grid">
            <div className="relative">
              <motion.img
                key={product.name}
                src={product.image}
                alt={product.name}
                className="h-[400px] object-cover relative z-50 cursor-grab"
                variants={imgVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                drag
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              />
              <span className="absolute left-[50%] translate-x-[-50%] text-neutral-400 cursor-pointer z-10">
                grab me uwu
              </span>
            </div>
          </div>
          {/* right side */}
          <div className="w-full text-3xl bg-white p-14 grid place-items-center ">
            <motion.div
              key={product.name}
              variants={boxVariant}
              initial="initial"
              animate="animate"
              className="w-[480px] relative"
            >
              <Link to="/products">
                <span className="text-sm mb-20 inline-block hover:bg-gray-100 py-3 px-4 rounded-xl duration-500 absolute top-[-100px] left-[-16px]">
                  &#8592; Back to Products
                </span>
              </Link>
              {/* //loading skeleton */}
              {isLoading ? (
                <div className="mb-16">
                  <Skeleton
                    className="text-base font-[400] mb-5"
                    width={60}
                    height={20}
                  />

                  <Skeleton className="text-3xl font-bold mb-5" height={50} />

                  <Skeleton
                    variants={cardChildVariant}
                    height={25}
                    count={1}
                  ></Skeleton>
                  <Skeleton
                    variants={cardChildVariant}
                    height={25}
                    count={1}
                    className="mb-5"
                  ></Skeleton>
                  <motion.div
                    className="gap-4 mb-10"
                    variants={cardChildVariant}
                  >
                    <Skeleton count={1} width={120} height={20} />
                  </motion.div>

                  <motion.div
                    className="flex justify-between items-center"
                    variants={cardChildVariant}
                  >
                    <div className="flex items-center gap-3">
                      <button
                        className=" grid place-items-center hover:bg-gray-200 rounded-full w-10 h-10 duration-500"
                        onClick={() => count > 1 && setCount(count - 1)}
                      >
                        -
                      </button>
                      <span className="text-xl font-medium bg-neutral-200  px-4 py-2 rounded-lg">
                        {count}
                      </span>
                      <button
                        className=" grid place-items-center hover:bg-gray-200 rounded-full w-10 h-10 duration-500"
                        onClick={() => setCount(count + 1)}
                      >
                        +
                      </button>
                    </div>
                  </motion.div>
                </div>
              ) : (
                <div className="mb-16">
                  <h3 className="text-base font-[400] mb-5">Protein</h3>

                  <h1 className="text-3xl font-bold mb-5">{product.name}</h1>

                  <motion.p
                    variants={cardChildVariant}
                    className="text-base font-[400] text-gray-500 mb-5"
                  >
                    {product.description}
                  </motion.p>
                  <motion.div
                    className="flex gap-4 mb-10"
                    variants={cardChildVariant}
                  >
                    <span className="text-base font-[400] ">Soy Free</span>
                    <span className="text-base font-[400]">Gluten Free</span>
                  </motion.div>

                  <motion.div
                    className="flex justify-between items-center"
                    variants={cardChildVariant}
                  >
                    <div className="flex items-center gap-3">
                      <button
                        className=" grid place-items-center hover:bg-gray-200 rounded-full w-10 h-10 duration-500"
                        onClick={() => count > 1 && setCount(count - 1)}
                      >
                        -
                      </button>
                      <span className="text-xl font-medium bg-neutral-200  px-4 py-2 rounded-lg">
                        {count}
                      </span>
                      <button
                        className=" grid place-items-center hover:bg-gray-200 rounded-full w-10 h-10 duration-500"
                        onClick={() => setCount(count + 1)}
                      >
                        +
                      </button>
                    </div>
                    <span className="text-base font-[400]">
                      ${" "}
                      {(Math.round(product.price * count * 100) / 100).toFixed(
                        2
                      )}
                    </span>
                  </motion.div>
                </div>
              )}
              <motion.div className="flex gap-2" variants={cardChildVariant}>
                <button
                  className="h-12 w-36 bg-indigo-600 text-white rounded-lg font-medium text-base duration-500 hover:ring-2 ring-inset ring-indigo-600 hover:bg-white hover:text-indigo-600 hover:shadow-3xl"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
                <button className="h-12 w-36  bg-white text-indigo-600 font-[500] rounded-lg text-base duration-500 ring-2 ring-inset ring-indigo-600 hover:text-white hover:bg-indigo-600 hover:shadow-3xl">
                  Buy Now
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductDetail;
