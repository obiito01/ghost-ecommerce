import React, { useEffect } from "react";
import { motion, controls, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AppSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  const textVariant = {
    initial: { y: 200, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <section className="flex h-[800px] overflow-hidden">
      {/* left */}
      <div className="w-[60%]">
        <img
          src="https://cdn.shopify.com/s/files/1/2060/6331/files/APP_HOMEPAGE_PIC_366ccc36-057b-4e3d-b35b-6bfe6455f868.png?v=1626198968"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      {/* right */}
      <div
        className="bg-neutral-800 flex-1 grid place-items-center"
        style={{
          backgroundImage:
            'url("//cdn.shopify.com/s/files/1/2060/6331/files/Graffiti_Black_2048x.png?v=1571768840")',
        }}
      >
        <motion.div
          ref={ref}
          variants={textVariant}
          initial="initial"
          animate={controls}
          className="text-white"
        >
          <h1 className="text-[52px] font-bold mb-10 leading-[60px]">
            DOWNLOAD <br />
            THE <br />
            GHOST APP <br />
            TODAY
          </h1>
          <button className="w-[150px] h-[50px] hover:bg-red-500 rounded-md ring-2 ring-inset ring-red-500 bg-transparent text-red-500 hover:text-white duration-500">
            Details
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AppSection;
