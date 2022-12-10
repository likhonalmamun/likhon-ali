import React from "react";
import ReactTyped from "react-typed";
import profile from "../images/Likhon Al Mamun copy.jpg";
const Intro = () => {
  return (
    <div className="flex mt-32 px-40 items-center justify-between gap-10">
      <div className="flex-1 mr-10 ">
        <div className="border-l-2 pl-5 border-teal-400 rounded-2xl w-fit border-b-2 p-4">
        <h1 className="text-4xl my-5 text-teal-300 font-bold">Hi ! I am</h1>
        <h1 className="text-5xl text-rose-500 mb-3 font-bold">
          MD. Likhon Ali,
        </h1>
        <ReactTyped
          className="text-4xl text-teal-200 my-5 font-bold"
          strings={[
            "A Front-end Web Developer",
            "A React.js Developer",
            "A MERN Stack Developer",
          ]}
          typeSpeed={100}
          backSpeed={70}
          backDelay={500}
          loop
        ></ReactTyped>
        </div>
      </div>
      <div>
        <img
          className="rounded-full shadow-lg shadow-white  h-[400px] w-[400px] p-[6px] border-2 border-teal-300"
          src={profile}
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
