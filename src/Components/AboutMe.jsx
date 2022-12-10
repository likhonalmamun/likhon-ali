import React from "react";

const AboutMe = () => {
  return (
    <div className="xl:p-10 2xl:px-40 hover:border-teal-300 duration-500 p-4 border-t-2 border-b-2 border-rose-400 rounded-3xl flex-col-reverse mx-3 md:flex-row items-center flex justify-between my-48">
      <div>
        <img
          className="rounded-full border-2 hidden lg:block w-[400px] hover:border-teal-300 duration-300 hover:scale-95 border-amber-200 xl:w-[400px]"
          src="logo.png"
          alt=""
        />
      </div>
      <div className=" text-justify lg:w-[50%]">
        <h1 className="text-rose-500 text-4xl font-bold mb-3 uppercase">
          About Me
        </h1>
        <p className="text-sm sm:text-base md:text-xl">
          Myself MD. Likhon Ali. I am mainly a front-end web developer. I was so
          passionate about building a website so I decided to start learning web
          development. Firstly, I have learned HTML markup language and CSS
          cascading language, frameworks of CSS like Tailwind, Bootstrap and
          built some project using them. Then I started Learning JavaScript.
          After gaining a reasonable skill on JS, I made some project with
          vanilla HTML, CSS and JS.Then I switched to front-end framework
          React.js.I have done many projects using React.js.
          <br />
          After achieving a massive confidence on front-end development, I have
          started to explore backend technologies. Recently, I have build some
          full-stack projects on MERN stack. Node.js, Express.js and MongoDB are
          the core skills of backend that I have.
          <br />I have explored many tools in order to implement various
          functionalities in my projects. Some of them are Firebase, GitHub,
          Netlify, JWT, Vercel, and many npm packages.
          <br />I loved and enjoyed my total journey of learning web development
          a lot. I will surely enjoy my career as a web developer.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
