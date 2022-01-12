import React, { useEffect } from "react";
import { motion, controls, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const categories = [
  {
    title: "GHOST® PROTEIN",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/2060/6331/files/Whey_Carousel_b7b4aeda-4285-4655-8249-2cb8d6e71d3a_large.png?v=1640621757",
  },
  {
    title: "GHOST® GLOW",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/2060/6331/files/Glow_Passionfruit_Carousel_0d96b009-a15a-4a04-8219-50117b1e7bbf_large.png?v=1640880394",
  },
  {
    title: "GHOST® GAMER x SONIC®",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/2060/6331/files/Gamer_Sonic_large.png?v=1640621713",
  },
  {
    title: "GHOST® BURN",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/2060/6331/files/burn_PF_Restock_Carousel1_ec0cc6ca-4529-4bad-bfb0-b089027ca495_large.png?v=1640024829",
  },
];

const sectionVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const CategoriesSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      variants={sectionVariant}
      initial="initial"
      animate={controls}
      className="bg-neutral-200 m-5"
    >
      <div className="h-full w-full flex items-center gap-5">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex-1 h-full text-center relative group "
          >
            <img
              src={category.thumbnail}
              alt={category.title}
              className="inline-block object-cover group-hover:brightness-50 duration-500 cursor-pointer rounded-md"
            />
            <h1 className="font-[700] w-full text-2xl absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white opacity-0 group-hover:opacity-100 duration-500">
              {category.title}
            </h1>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default CategoriesSection;
