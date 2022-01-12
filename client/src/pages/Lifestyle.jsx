import React from "react";
import { AboutSection, NewsletterSection } from "../sections";
import { Helmet } from "react-helmet";
const Lifestyle = () => {
  return (
    <main>
      <Helmet>
        <title>GHOST® | Lifestyle</title>
      </Helmet>
      <AboutSection />
      <NewsletterSection />
    </main>
  );
};

export default Lifestyle;
