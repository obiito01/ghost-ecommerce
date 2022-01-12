import React from "react";

const NewsletterSection = () => {
  return (
    <section className="overflow-hidden h-[600px] bg-white flex flex-col items-center justify-center gap-7">
      <img
        src="https://cdn.shopify.com/s/files/1/2060/6331/files/footer_logo.png?v=1512024413"
        alt="Ghost Lifestyle Logo"
        className="w-[180px] h-[180px]"
      />
      <h1 className="font-[900] text-4xl md:text-5xl lg:text-6xl text-neutral-800 text-center">
        BE A LEGEND. JOIN GHOST
      </h1>
      <p className="text-sm md:text-base text-neutral-400">
        Subscribe for latest news, events and promotions.
      </p>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Enter your email here"
          className="ring-1 ring-inset ring-neutral-200 h-full text-md: md:text-lg lg:text-xl p-4 outline-none bg-neutral-100 focus:ring-neutral-400 duration-300"
        />
        <button className="bg-red-500 text-white h-full px-6   hover:bg-red-800 duration-500">
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default NewsletterSection;
