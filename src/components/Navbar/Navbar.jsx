import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { SiEngadget } from "react-icons/si";

const Navbar = () => {
  const location = useLocation();

  // Check if the current route is "/dashboard" or "/offer"
  const isWhiteNavbar =
    location.pathname === "/dashboard" ||
    location.pathname === "/offer" ||
    location.pathname === "/ProductChart";

  return (
    <div>
      <div
        className={`navbar rounded-t-lg ${
          isWhiteNavbar
            ? "bg-white text-purple-500"
            : "bg-purple-500 text-white"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold"
            >
              <NavLinks isWhiteNavbar={isWhiteNavbar} />
            </ul>
          </div>
          <SiEngadget
            className={`text-xl mx-2 ${
              isWhiteNavbar ? "text-purple-500" : "text-white"
            }`}
          />
          <a
            className={`font-bold text-xl ${
              isWhiteNavbar ? "text-purple-500" : "text-white"
            }`}
          >
            GadgetHeaven
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <NavLinks isWhiteNavbar={isWhiteNavbar} />
          </ul>
        </div>

        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <FaCartShopping
              className={`text-2xl hover:text-black ${
                isWhiteNavbar ? "text-purple-500" : "text-white"
              }`}
            />
          </button>
          <button className="btn btn-ghost btn-circle">
            <CiHeart
              className={`text-2xl hover:text-black ${
                isWhiteNavbar ? "text-purple-500" : "text-white"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const NavLinks = () => (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "underline decoration-2" : "")}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/ProductChart"
        className={({ isActive }) => (isActive ? "underline decoration-2" : "")}
      >
        Statistics
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? "underline decoration-2" : "")}
      >
        Dashboard
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/offer"
        className={({ isActive }) => (isActive ? "underline decoration-2" : "")}
      >
        Offers
      </NavLink>
    </li>
  </>
);

export default Navbar;
