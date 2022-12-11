import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaMailBulk,
  FaBlog,
  FaInfoCircle,
  FaProjectDiagram,
  FaBars,
} from "react-icons/fa";
const Header = () => {
  return (
    <div className="sm:h-24 h-16 flex items-center rounded-2xl px-5 border-b-2 border-amber-200 mb-10 justify-between">
      <Link className="h-full" to="/">
        <img className="h-full " src="logo.png" alt="" />
      </Link>
      <div className="sm:text-xl gap-5 hidden lg:flex font-extrabold text-teal-300 uppercase">
        <Link
          className="hover:text-rose-500 flex items-center  hover:scale-110 duration-200"
          to="/"
        >
          <FaHome className="mx-1 sm:text-xl"></FaHome> Home
        </Link>
        <a
          className="hover:text-rose-500 flex items-center  hover:scale-110 duration-200"
          href="/#projects"
        >
          <FaProjectDiagram className="mx-1 sm:text-xl"></FaProjectDiagram>{" "}
          Projects
        </a>
        <Link
          className="hover:text-rose-500 flex items-center  hover:scale-110 duration-200"
          to="/blogs"
        >
          <FaBlog className="mx-1 sm:text-xl"></FaBlog> Blogs
        </Link>
        <a
          className="hover:text-rose-500 flex items-center  hover:scale-110 duration-200"
          href="/#mail"
        >
          <FaMailBulk className="mx-1 sm:text-xl"></FaMailBulk> Mail
        </a>
        <a
          className="hover:text-rose-500 flex items-center  hover:scale-110 duration-200"
          href="/#about"
        >
          <FaInfoCircle className="mx-1 sm:text-xl"></FaInfoCircle> About Me
        </a>
        <p className="hover:scale-110 duration-300 ">
          <a
            className=" ml-3 p-2 border-2 duration-300 hover:border-teal-300 hover:text-rose-500  sm:text-xl border-rose-500 text--300 rounded-lg"
            href="/MD_Likhon_Ali_Resume.pdf"
          >
            Open Resume
          </a>
        </p>
      </div>
      <div className="dropdown  text-rose-500 font-bold block lg:hidden dropdown-end">
        <label tabIndex={0} className="text-2xl text-amber-300">
          <FaBars></FaBars>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-black  rounded-box w-52"
        >
          <li>
            <Link
              className="hover:text-rose-500 flex items-center  hover:scale-110 duration-200"
              to="/"
            >
              <FaHome className="mx-1 sm:text-xl"></FaHome> Home
            </Link>
          </li>
          <li>
            <a
              className="hover:text-rose-500 flex items-center  hover:scale-110 duration-200"
              href="/#projects"
            >
              <FaProjectDiagram className="mx-1 sm:text-xl"></FaProjectDiagram>{" "}
              Projects
            </a>
          </li>
          <li>
            <Link
              className="hover:text-rose-500 flex items-center  hover:scale-110 duration-200"
              to="/blogs"
            >
              <FaBlog className="mx-1 sm:text-xl"></FaBlog> Blogs
            </Link>
          </li>
          <li>
            <a
              className="hover:text-rose-500 flex items-center  hover:scale-110 duration-200"
              href="/#mail"
            >
              <FaMailBulk className="mx-1 sm:text-xl"></FaMailBulk> Mail
            </a>
          </li>
          <li>
            <a
              className="hover:text-rose-500 flex items-center  hover:scale-110 duration-200"
              href="/#about"
            >
              <FaInfoCircle className="mx-1 sm:text-xl"></FaInfoCircle> About Me
            </a>
          </li>
          <li>
            <p className="hover:scale-110 duration-300 ">
              <a
                className=" ml-3 p-2 border-2 duration-300 hover:border-teal-300 hover:text-rose-500  sm:text-xl border-rose-500 text--300 rounded-lg"
                href="/MD_Likhon_Ali_Resume.pdf"
              >
                Open Resume
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
