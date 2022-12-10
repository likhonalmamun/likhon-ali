import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
const Header = () => {
  return (
    <div className="sm:h-24 h-16 flex items-center rounded-2xl px-5 border-b-2 border-amber-200 mb-10 justify-between">
      <Link className="h-full" to="/">
        <img className="h-full " src="logo.png" alt="" />
      </Link>
      <div className="sm:text-2xl  flex font-extrabold text-teal-300 uppercase">
        <Link
          className="hover:text-rose-500 flex items-center  hover:scale-110 duration-200"
          to="/"
        >
          <FaHome className="mx-1 sm:text-2xl"></FaHome>{" "}
          Home
        </Link>
        <p className="hover:scale-110 duration-300 ">
          <a
            className="sm:ml-7 ml-3 p-2 border-2 duration-300 hover:border-teal-300 hover:text-rose-500  sm:text-xl border-rose-500 text--300 rounded-lg"
            href="/MD_Likhon_Ali_Resume.pdf"
          >
            Open Resume
          </a>
        </p>
      </div>
    </div>
  );
};

export default Header;
