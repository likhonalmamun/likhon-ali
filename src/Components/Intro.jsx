import React from "react";
import profile from "../images/Likhon Al Mamun copy.jpg";
const Intro = () => {
  return (
    <div className="flex mt-32 px-40 items-center justify-between gap-10">
      <div className="flex-1 mr-10 border-l-2 pl-5 border-teal-300 rounded-2xl">
        <h1 className="text-4xl my-5 text-amber-300 font-bold">Hi ! I am</h1>
        <h1 className="text-5xl text-teal-300 font-bold">MD. Likhon Ali,</h1>
        <h1 className="text-4xl text-amber-200 my-5 font-bold">
          A Front-end Web Developer
        </h1>
        <hr className="border-teal-300 border-0 border-b-[3.5px]" />
        <h1 className="text-4xl text-amber-200 my-5 font-bold">
          React.js Developer <span className="text-teal-400">| |</span> MERN
          Stack Developer
        </h1>
      </div>
      <div>
        <img
          className="rounded-full  h-[500px] w-[500px] p-[6px] border-4 border-amber-200"
          src={profile}
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
