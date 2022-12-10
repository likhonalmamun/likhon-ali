import React, { useEffect, useState } from "react";

const ProjectCard = ({ project }) => {
  const [flip, setFlip] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("ticking");
      setFlip(!flip);
    }, 3000);

    return () => clearInterval(timer);
  }, [flip]);
  return (
    <div className="p-2 rounded-xl duration-300 bg-[rgba(0,0,0,0.8)] h-[270px] xl:h-[300px] 2xl:h-[270px] border-l border-teal-300 border-b">
      <div className={flip ? "" : "hidden"}>
        <img className="rounded-xl w-full h-[200px]" src={project.thumb} alt="" />
        <div className="px-3 my-3">
          <h1 className=" text-xl font-semibold text-teal-300">
            {project.title}
          </h1>
        </div>
      </div>
      <div className={`xl:my-10 my-2 mx-4 h-fit ${flip ? "hidden" : ""}`}>
        <h1 className=" text-xl font-semibold text-teal-300">
          {project.title}
        </h1>
        <p className="text-rose-400 text-sm sm:text-base font-bold">
          {project.details}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
