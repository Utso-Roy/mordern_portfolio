import React from "react";
import { NavLink } from "react-router";
import { Link } from "react-scroll";

const Navbar = () => {
  const Links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-[#00ffff]" : "border-gray-300"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>

    <li>
  <Link
    to="about-section" 
    smooth={true}
    duration={500}
    spy={true}
    offset={-50} 
    className="cursor-pointer hover:text-[#00ffff]"
    activeClass="text-[#00ffff]"
  >
    About
  </Link>
          </li>
          


      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-[#00ffff]" : "border-gray-300"
          }
          to="/project"
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-[#00ffff]" : "border-gray-300"
          }
          to="/learn"
        >
          Learning
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-[#00ffff]" : "border-gray-300"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="backdrop-blur-2xl sticky top-0 z-50 text-white  bg-white/5">
      <div className="navbar ">
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
              className="menu menu-sm dropdown-content z-10 sticky top-3  inset-0  rounded-box mt-3 shadow"
            >
              {Links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
          <div className="avatar">
            <div className="ring-[#217fd2] ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
              <img src="https://i.ibb.co.com/Gfg1FZVD/IMG-20241211-111317-1.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
