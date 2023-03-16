import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center mt-10" style={{ paddingBottom: "100px" }}>
      <hr className="border-gray-400 w-2/3 mb-4" />
      <p className="text-sm font-bold mb-2">Suivez-nous</p>
      <div className="flex justify-center items-center">
        <a href="https://www.facebook.com/" className="m-5">
          <FaFacebook size={40} className="text-black-700 cursor-pointer hover:scale-110 transition-all duration-300" />
        </a>
        <a href="https://twitter.com/" className="m-5">
          <FaTwitter size={40} className="text-black-700 cursor-pointer hover:scale-110 transition-all duration-300" />
        </a>
        <a href="https://www.linkedin.com/" className="m-5">
          <FaLinkedin size={40} className="text-black-700 cursor-pointer hover:scale-110 transition-all duration-300" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
