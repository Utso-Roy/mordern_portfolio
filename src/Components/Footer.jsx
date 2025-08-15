import React from "react";
import { FaLinkedin, FaGithub, FaFacebookSquare } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-white/5 backdrop-blur-3xl text-gray-300 py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-4">
        {/* Icon and Name */}
        <div className="flex items-center justify-center gap-2">
          <HiOutlineOfficeBuilding className="text-[#00ffff] text-3xl" />
          <span className="font-bold text-xl">Utso Chandro Roy</span>
        </div>

        {/* Role / Tagline */}
        <p className="text-sm text-gray-400">
          Frontend Developer | React & JS Enthusiast
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 justify-center mt-2">
          <a
            href="https://linkedin.com/in/utsoroy8876"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#00ffff] transition-transform transform hover:scale-110"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com/utso-roy"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#00ffff] transition-transform transform hover:scale-110"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#00ffff] transition-transform transform hover:scale-110"
          >
            <FaFacebookSquare className="text-2xl" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-4">
          © {new Date().getFullYear()} Utso Chandro Roy - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
