import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((er) => console.log(er));
  }, []);
  return (
    <div className="my-20 2xl:mx-32  p-5 rounded-3xl  border-rose-500 border-r border-t">
      <h1 className="text-3xl sm:text-4xl font-bold text-amber-300 my-3 text-center">
        My Recent Projects
      </h1>
      <div className="grid mt-10 sm:grid-cols-2  xl:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
