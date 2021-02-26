import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({toggle}) => {
  return (
    <nav
      className="flex justify-between iteem-center h-16 bg-yellow-200 text-black
    relative shadow-sm font-mono text py-4"
      role="navigation"
    >
      <Link className="pl-4 font-bold" to="/">
        Welcome!
      </Link>
      <div className="px-4 cursor-pointer md:hidden"
        onClick={toggle}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link className="p-4 font-bold" to="/">
          Home
        </Link>
        <Link className="p-4 font-bold" to="/about">
          About
        </Link>
        <Link className="p-4 font-bold" to="/projects">
          Projects
        </Link>
        <Link className="p-4 font font-bold" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
