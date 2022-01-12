import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const NAV_LINKS = [
  {
    name: "PRODUCTS",
    slug: "products",
  },
  {
    name: "LIFESTYLE",
    slug: "lifestyle",
  },
  {
    name: "LOYALTY",
    slug: "loyalty",
  },
];

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <nav className="overflow-hidden sticky top-0 z-50 h-[70px] w-full bg-neutral-50 text-zinc-700 flex justify-between">
      {/* left logo */}
      <div className="bg-neutral-800 hover:bg-red-500  basis-[25%] duration-500">
        <Link to="/">
          <span className="w-full h-full grid place-items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0014/5145/8619/t/122/assets/logo.svg?v=10601447400248174825"
              alt="Ghost Lifestyle Logo"
              className="w-[70px] "
            />
          </span>
        </Link>
      </div>

      {/* mid links */}
      <div className="flex-1 flex items-center justify-center gap-1 text-neutral-800">
        {NAV_LINKS.map(({ name, slug }) => (
          <Link key={slug} to={`/${slug}`}>
            <span className="hover:bg-neutral-200  py-4 font-[500] red rounded-xl w-[150px] grid place-items-center duration-500">
              {name}
            </span>
          </Link>
        ))}
      </div>

      {/* Cart */}
      <div className="basis-[25%] flex items-center justify-end gap-5 mr-5">
        <Link to="/cart">
          <span className="hover:bg-neutral-200  px-4 py-4 font-[500]  red rounded-xl grid place-items-center duration-500 relative">
            <BsFillCartFill size={22} className="text-neutral-800" />
            {quantity > 0 && (
              <span className="absolute top-[5px] right-[5px] bg-red-500 rounded-full text-white w-5  h-5 grid place-items-center text-xs">
                {quantity}
              </span>
            )}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
