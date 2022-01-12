import React from "react";
import { motion } from "framer-motion";

const SignupSection = () => {
  const divVariant = {
    init: {
      opacity: 0,
      x: -100,
    },
    anim: {
      opacity: 1,
      x: 0,

      transition: {
        ease: "easeOut",
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };

  const childVariant = {
    init: {
      opacity: 0,
      y: 50,
    },
    anim: {
      opacity: 1,
      y: 0,

      transition: {
        ease: "easeOut",
        duration: 0.8,
      },
    },
  };

  return (
    <section
      className="py-20"
      style={{
        background:
          "url(//cdn.shopify.com/s/files/1/2060/6331/files/qdwasqas.jpg?v=1520402137) center no-repeat",
      }}
    >
      {/* wrapper */}
      <motion.div
        variants={divVariant}
        initial="init"
        animate="anim"
        className="max-w-[1100px] mx-auto h-full"
      >
        <div className="w-[90%] mx-auto lg:mx-0 lg:w-[30%]">
          <h3 className="text-red-500 font-[500] text-lg mb-2">
            Sign Up Today
          </h3>
          <hr className="border-black border-2 w-20 mb-5" />
          <motion.h1
            variants={childVariant}
            className="font-[900] text-4xl mb-5"
          >
            BE <span className="text-red-500">REWARDED</span> FOR DOING THE
            STUFF YOU ALREADY DO
          </motion.h1>
          <motion.p
            variants={childVariant}
            className="text-base text-neutral-500 font-[400] mb-10"
          >
            We Created the GHOST® Loyalty program to give back to our most loyal
            and active fans. Of course we’re rewarding you for purchasing
            GHOST®, but we’re also rewarding you for interacting with the brand
            and doing stuff you already do, like going to the gym and posting
            dope pictures. Use the points you earn to shop for products and
            merch. Simple. Awesome.
          </motion.p>
          <motion.button
            variants={childVariant}
            className="px-8 py-5 rounded-lg bg-indigo-500 text-white inline-block hover:bg-transparent hover:ring-2 ring-inset ring-indigo-500 hover:text-indigo-500 font-[400] transition-colors duration-300"
          >
            Sign Up Today
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default SignupSection;
