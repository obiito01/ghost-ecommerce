import React from "react";
import {
  HeroSection,
  CategoriesSection,
  AppSection,
  NewsletterSection,
} from "../sections";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>GHOST® Lifestyle | BE SEEN BEYOND THE WALLS OF THE GYMS.</title>
      </Helmet>
      <HeroSection />
      <CategoriesSection />
      <AppSection />
      <NewsletterSection />
    </div>
  );
};

export default Home;
