import React from "react";
import ReactTyped from "react-typed";

const Error = () => {
  return (
    <div className="h-[80vh] w-full flex items-center justify-center">
      <ReactTyped
        className="xl:text-7xl block text-2xl px-4 sm:text-5xl sm:px-7 py-5 border-b-2 border-l-2 border-teal-300 rounded-2xl text-rose-500 my-5 font-bold"
        strings={["Page not found..!", "Unknown error ocurred..!"]}
        typeSpeed={100}
        backSpeed={70}
        backDelay={500}
        loop
      ></ReactTyped>
    </div>
  );
};

export default Error;
