import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const divVariant = {
    init: {
      opacity: 1,
    },
    anim: {
      opacity: 1,

      transition: {
        ease: "easeOut",
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 1,
      },
    },
  };

  const upperVariant = {
    init: {
      opacity: 0,
      y: -50,
    },
    anim: {
      opacity: 1,
      y: 0,

      transition: {
        ease: "easeOut",
        duration: 1,
      },
    },
  };
  const lowerVariant = {
    init: {
      opacity: 0,
    },
    anim: {
      opacity: 1,

      transition: {
        ease: "easeOut",
        duration: 1,
      },
    },
  };

  return (
    <section className="py-20">
      {/* container */}
      <motion.div
        variants={divVariant}
        initial="init"
        animate="anim"
        className="flex flex-col gap-20 max-w-[800px] m-auto"
      >
        {/* upper part */}
        <motion.div variants={upperVariant} className="flex flex-col gap-8">
          <img
            src="https://cdn.shopify.com/s/files/1/2060/6331/t/166/assets/ghost-small-icon.png?v=16270115718800359549"
            alt="Ghost logo"
            className="mx-auto"
          />
          <p className="text-center text-xl font-[500]">
            GHOST® at its simplest form is the world's first lifestyle sports
            nutrition brand. The name GHOST® and mantra "be seen" come from that
            feeling of being behind the scenes and wanting to be heard, wanting
            to make an impact; we're all ghosts. This is our time.
          </p>
        </motion.div>

        {/* lower part */}
        <motion.div
          variants={lowerVariant}
          className=" flex justify-center gap-10"
        >
          {/* left */}
          <div className=" flex-1">
            <div className="mb-5">
              <img
                src="https://cdn.shopify.com/s/files/1/2060/6331/files/about1.jpg?v=1509613211"
                alt="Ryan Hughes"
                className="w-full h-[450px] object-cover"
              />
            </div>
            {/* description */}
            <div className="">
              <h3 className="font-[500] text-2xl text-neutral-600 mb-5 ">
                Founder
              </h3>
              <hr className="border-b-2 border-red-500 mb-5 w-[70%]" />
              <h1 className="font-bold text-3xl mb-5">Ryan Hughes</h1>
              <p className="text-sm leading-7 font-[300]">
                IFBB Pro turned CMO, Ryan leads GHOST®’s marketing efforts with
                a strong eye for brand design and a focus on social
                media/content. Ryan loves good physique destroyers and great
                times and is secretly plotting to kill Dan for the constant
                trolling. Let the games begin.
              </p>
            </div>
          </div>

          {/* right */}
          <div className=" flex-1">
            <div className="mb-5">
              <img
                src="https://cdn.shopify.com/s/files/1/2060/6331/files/about2.jpg?v=1509613251"
                alt="Daniel Lourenco"
                className="w-full h-[450px] object-cover"
              />
            </div>
            {/* description */}
            <div className="">
              <h3 className="font-[500] text-2xl text-neutral-600 mb-5">
                Founder
              </h3>
              <hr className="border-b-2 border-red-500 mb-5 w-[70%]" />
              <h1 className="font-bold text-3xl mb-5">Daniel Lourenco</h1>
              <p className=" text-sm leading-7 font-[300]">
                Chief GHOST® and Cereal Aficionado, Dan’s fan- focused, ‘for us,
                by us,’ inclusive approach has become engrained in the GHOST®
                DNA. When he’s not dreaming up new GHOST® products (or new ways
                to troll Ryan), Dan is probably tracking down a new pair of
                kicks. Or Dim Sum. Gains.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
