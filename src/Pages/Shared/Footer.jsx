import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
  FaInstagramSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="mt-32 rounded-2xl p-5 sm:p-10 text-center border-t-2 border-amber-300">
      <p className="font-semibold mb-3">md.likhon.ali.2006@gmail.com</p>
      <h1 className="text-3xl font-semibold text-amber-300 mb-3">
        MD. Likhon Ali
      </h1>
      <p className="font-bold">Find me on</p>
      <div className="flex flex-wrap  text-teal-300 font-bold justify-center items-center gap-3 sm:gap-7 mt-3 mx-auto">
        <a
          className="hover:text-rose-500 flex items-center duration-200"
          href="https://www.linkedin.com/in/md-likhon-ali/"
        >
          <FaLinkedin className="mx-1 text-xl hover:text-teal-300 text-amber-300"></FaLinkedin>{" "}
          LinkedIn
        </a>
        <a
          className="hover:text-rose-500 flex items-center duration-200"
          href="https://www.facebook.com/likhon.al.mamun.4321"
        >
          <FaFacebookSquare className="mx-1 text-xl hover:text-teal-300 text-amber-300"></FaFacebookSquare>{" "}
          Facebook
        </a>
        <a
          className="hover:text-rose-500 flex items-center duration-200"
          href="https://github.com/likhonalmamun"
        >
          <FaGithubSquare className="mx-1 text-xl hover:text-teal-300 text-amber-300"></FaGithubSquare>{" "}
          GitHub
        </a>
        <a
          className="hover:text-rose-500 flex items-center duration-200"
          href="https://www.instagram.com/likhon_al_mamun/"
        >
          <FaInstagramSquare className="mx-1 text-xl hover:text-teal-300 text-amber-300"></FaInstagramSquare>{" "}
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Footer;
