import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="sm:h-24 h-16 flex items-center rounded-2xl px-5 border-b-2 border-amber-200 mb-10 justify-between">
      <img className="h-full " src="logo.png" alt="" />
      <div className="sm:text-2xl  flex font-extrabold text-teal-300 uppercase">
        <Link to="/">Home</Link>
        <p>
          <a
            className="ml-7 p-2 border-2 sm:text-xl border-rose-500 text--300 rounded-lg"
            href="MD_Likhon_Ali_Resume.pdf"
          >
            Open Resume
          </a>
        </p>
      </div>
    </div>
  );
};

export default Header;
