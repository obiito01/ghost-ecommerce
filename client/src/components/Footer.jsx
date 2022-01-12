import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage:
          'url("//cdn.shopify.com/s/files/1/2060/6331/files/Graffiti_Black_2048x.png?v=1571768840")',
      }}
      className="bg-black text-white"
    >
      <div className=" max-w-[800px] py-10 mx-auto flex items-start justify-center gap-20 border-b">
        <div>
          <h3 className="text-xl font-bold mb-5">Who We Are</h3>
          <p className="mb-1 hover:text-red-500 duration-500 cursor-pointer">
            Shop
          </p>
          <p className="mb-1 hover:text-red-500 duration-500 cursor-pointer">
            Lifestyle
          </p>
          <p className="mb-1 hover:text-red-500 duration-500 cursor-pointer">
            Loyalty
          </p>
          <p className="mb-1 hover:text-red-500 duration-500 cursor-pointer">
            Careers
          </p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <img
            src="https://cdn.shopify.com/s/files/1/2060/6331/t/166/assets/logo.svg?v=10601447400248174825"
            alt="Ghost Lifestyle logo"
            className="w-[120px]  cursor-pointer"
          />
          <div className="flex gap-2 items-center">
            <AiOutlineInstagram
              size={24}
              className="cursor-pointer hover:text-red-500 duration-500"
            />
            <FaFacebookF
              size={20}
              className="cursor-pointer hover:text-red-500 duration-500"
            />
            <AiOutlineTwitter
              size={24}
              className="cursor-pointer hover:text-red-500 duration-500"
            />
            <AiFillYoutube
              size={24}
              className="cursor-pointer hover:text-red-500 duration-500"
            />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-5">Support</h3>
          <p className="mb-1 hover:text-red-500 duration-500 cursor-pointer">
            Shipping & Returns
          </p>
          <p className="mb-1 hover:text-red-500 duration-500 cursor-pointer">
            Terms and Service
          </p>
          <p className="mb-1 hover:text-red-500 duration-500 cursor-pointer">
            Contact GHOST
          </p>
          <p className="mb-1 hover:text-red-500 duration-500 cursor-pointer">
            Store Locator
          </p>
        </div>
      </div>
      <div className="py-10 flex flex-col gap-4 items-center justify-center max-w-[800px] mx-auto">
        <div className="flex items-center gap-2">
          <span className="cursor-pointer duration-500 hover:text-red-500">
            support@ghostlifestyle.com
          </span>
          <span className="cursor-pointer duration-500 hover:text-red-500">
            1.844.GHOST.88
          </span>
        </div>

        <p>170 S. Green Valley Parkway, Suite 300, Henderson NV 89012</p>

        <p className="cursor-pointer duration-500 hover:text-red-500">
          Do Not Sell My Information
        </p>
        <p className="text-xs text-center">
          *These statements have not been evaluated by the Food and Drug
          Administration. These products are not intended to diagnose, treat,
          cure or prevent any disease.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
