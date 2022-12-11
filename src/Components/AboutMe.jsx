import React from "react";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="xl:p-10 2xl:px-40 hover:border-teal-300 duration-500 p-4 border-t-2 border-b-2 border-rose-400 rounded-3xl flex-col-reverse mx-3 md:flex-row items-center flex justify-between my-48"
    >
      <div className="logo">
        <img
          className="rounded-full border-2 hidden lg:block w-[400px] hover:border-teal-300 duration-300 hover:scale-95 border-amber-200 xl:w-[400px]"
          src="logo.png"
          alt=""
        />
      </div>
      <div className=" text-justify lg:w-[50%]">
        <h1 className="text-rose-500  text-4xl font-bold mb-3 uppercase">
          About Me
        </h1>
        <p className="text-sm sm:text-base md:text-xl">
          Myself MD. Likhon Ali. I am mainly a front-end web developer. I live
          in Meherpur district, Bangladesh. I started the journey of becoming a
          web developer with HTML and now I have achieved a massive skill and
          knowledge about front-end development along with a reasonable skill in
          backend technology(MERN Stack technology).
          <br /> <br /> I loved and enjoyed my total journey of learning web
          development a lot. I am passionate to build up my career as a web
          developer. <br />
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
