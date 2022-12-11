import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  return (
    <div className="p-2 rounded-xl duration-300 flex flex-col justify-between bg-[rgba(0,0,0,0.8)] border-l hover:border-rose-500 hover:scale-95 border-teal-300 border-b">
      <div>
        <div>
          <img
            className="rounded-xl mx-auto w-[225px]"
            src={project.thumb}
            alt=""
          />
          <div className="px-3 my-3">
            <h1 className=" text-xl font-semibold text-teal-300">
              {project.title}
            </h1>
            <p className="text-rose-400 text-sm sm:text-base font-bold">
              {project.summery}
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate("/details", { state: project.details })}
        className="uppercase bg-rose-500 rounded-md hover:bg-black border-2 border-rose-500 duration-300 font-semibold w-full py-2 "
      >
        View details
      </button>
    </div>
  );
};

export default ProjectCard;
