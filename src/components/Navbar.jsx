import React from "react";
import logo from "../assets/react.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="flex items-center ml-10">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />

        {/* Brand Text */}
        <span className="text-white font-semibold text-lg">Soi5 Shop</span>
      </div>

      <ul className="flex space-x-4 mr-10">
        <li>
          <NavLink to="/" className="text-white hover:text-green-400">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="text-white hover:text-green-400">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" className="text-white hover:text-green-400">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="text-white hover:text-green-400">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
