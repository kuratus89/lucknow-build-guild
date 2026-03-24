import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-12 flex justify-between items-center z-30 ">
      {/* Logo */}
  
      <a className="text-white mx-4 font-semibold hover:text-gray-300" href="/">
        HOME
      </a>
      {/* Navigation Links */}
      <div>
        {[
          { label: "ABOUT US", path: "/about" },
          { label: "HELP US", path: "/helpus" },
          { label: "FAQs", path: "/faqs" },
        ].map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="text-white mx-4 font-semibold hover:text-gray-300"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;