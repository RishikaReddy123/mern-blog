import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="border-b-4 border-green-700 text-center fixed top-0 bg-green-600 font-bold w-full text-lg text-white">
        <ul className="flex justify-center space-x-6 py-4">
          <li>
            <Link to="/" className="text-white hover:text-green-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-green-200">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/articles-list"
              className="text-white hover:text-green-200"
            >
              Articles
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
