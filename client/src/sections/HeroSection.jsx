import React, { useState } from "react";
import { Slider } from "../components";

const heroImages = [
  {
    title: "Bundle Up",
    img: "https://cdn.shopify.com/s/files/1/2060/6331/files/Bundle_Banner_US_EU.png?v=1640880296",
  },
  {
    title: "Festive AF",
    img: "https://cdn.shopify.com/s/files/1/2060/6331/files/HOLIDAY_SOTM_BANNER.png?v=1640024624",
  },
  {
    title: "Legendary Pre-workout",
    img: "https://cdn.shopify.com/s/files/1/2060/6331/files/Legend_Banner2_2b0d7358-54ae-4cea-8bdc-d950aa9f5577.png?v=1640619969",
  },
  {
    title: "Ghost Style",
    img: "https://cdn.shopify.com/s/files/1/2060/6331/files/December_AOTM_Banner.png?v=1638985052",
  },
  {
    title: "It's Game Time",
    img: "https://cdn.shopify.com/s/files/1/2060/6331/files/WebBanner_Desktop.png?v=1635961943",
  },
];

const HeroSection = () => {
  return (
    <section className="bg-neutral-700 h-screen-minus-nav relative">
      <Slider data={heroImages} />
    </section>
  );
};

export default HeroSection;
