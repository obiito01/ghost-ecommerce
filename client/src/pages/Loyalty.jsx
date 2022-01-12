import React from "react";
import { SignupSection, NewsletterSection } from "../sections";
import { Helmet } from "react-helmet";
const Loyalty = () => {
  return (
    <main>
      <Helmet>
        <title>GHOST® | Loyalty</title>
      </Helmet>
      <SignupSection />
      <NewsletterSection />
    </main>
  );
};

export default Loyalty;
