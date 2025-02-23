import React from "react";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { SiEngadget } from "react-icons/si";

const links = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive ? "underline decoration-2" : "";
        }}
      >
        Home
      </NavLink>
    </li>
    <li>
      <a href="">Statistics</a>
    </li>
    <li>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => {
          return isActive ? "underline decoration-2" : "";
        }}
      >
        Dashboard
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/offer"
        className={({ isActive }) => {
          return isActive ? "underline decoration-2" : "";
        }}
      >
        Offers
      </NavLink>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-purple-500 rounded-t-lg">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold"
            >
              {links}
            </ul>
          </div>
          <SiEngadget className="text-white font-bold text-xl mx-2"/>
          <a className="font-bold text-xl text-white">GadgetHeaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white font-semibold">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
             <FaCartShopping className="text-2xl text-white hover:text-black" />
          </button>
          <button className="btn btn-ghost btn-circle ">
                <CiHeart className="text-2xl text-white hover:text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
