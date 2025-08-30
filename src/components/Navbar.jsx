import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useCart } from "../context/CartContext";
import AuthModal from "./AuthModal";
import { UserMenu } from "./UserMenu";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8 h-20 py-3 flex items-center justify-around">

        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
          <img
            src={logo}
            alt="Logo"
            className="w-8 h-8 sm:w-12 sm:h-12 lg:w-12 lg:h-12 rounded-full border-2 border-black"
          />
          <span className="font-bold text-lg sm:text-xl lg:text-2xl">Supplyhive</span>
        </div>


        <div className="hidden lg:flex items-center gap-6 sm:gap-8 xl:gap-10 text-base xl:text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600 transition"
            }
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600 transition"
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600 transition"
            }
          >
            About us
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600 transition"
            }
          >
            Contact
          </NavLink>

          <button
            type="button"
            onClick={() => setAuthOpen(true)}
            className="hover:text-blue-600 cursor-pointer transition"
          >
            Login/Register
          </button>
        </div>


        <div className="flex items-center gap-6 sm:gap-8 lg:gap-10">
          <div className="hidden lg:flex items-center bg-blue-500 rounded-full px-3 py-1.5 w-60 xl:w-72">
            <input
              type="text"
              placeholder="Search for Stationery"
              className="flex-1 bg-transparent text-white placeholder-white outline-none text-sm"
            />
            <FaSearch className="text-white" />
          </div>

          <Link to="/cart" className="relative cursor-pointer">
            <MdOutlineShoppingCart className="text-2xl sm:text-3xl" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </Link>

          <UserMenu />

          <button
            className="lg:hidden text-2xl sm:text-3xl ml-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white px-4 pb-4 flex flex-col gap-4 shadow text-base sm:text-lg">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/shop" className="text-blue-600 font-medium">Shop</Link>
          <Link to="/about" className="hover:text-blue-600">About us</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          <Link to="/login" className="hover:text-blue-600">Login/Register</Link>

          <div className="flex items-center bg-blue-500 rounded-full px-3 py-2 mt-2">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 bg-transparent text-white placeholder-white outline-none text-sm"
            />
            <FaSearch className="text-white" />
          </div>
        </div>
      )}
      {authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}
    </nav>
  );
}
