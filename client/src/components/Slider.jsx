import React, { useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { motion } from "framer-motion";

const Slider = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    switch (direction) {
      case "left":
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : data.length - 1);
        break;
      case "right":
        setSlideIndex(slideIndex < data.length - 1 ? slideIndex + 1 : 0);
        break;
      default:
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        break;
    }
  };

  const slideVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className={`h-full relative`}>
      {data.map((image, index) => {
        return (
          <motion.div
            variants={slideVariant}
            initial="hidden"
            animate={index === slideIndex ? "visible" : "hidden"}
            key={index}
            className={`w-full h-full absolute `}
          >
            <img
              src={image.img}
              alt={image.title}
              className="h-full w-full object-cover"
            />
          </motion.div>
        );
      })}

      <MdOutlineArrowBackIos
        className="absolute top-[50%] translate-y-[-50%] left-20 text-white cursor-pointer"
        size={32}
        onClick={() => handleClick("left")}
      />
      <MdOutlineArrowForwardIos
        className="absolute top-[50%] translate-y-[-50%] right-20 text-white cursor-pointer"
        size={32}
        onClick={() => handleClick("right")}
      />

      {/* <Link to="/products">
        <div className="h-full absolute cursor-pointer inset-0 inset-x-[150px]"></div>
      </Link> */}
    </div>
  );
};

export default Slider;
