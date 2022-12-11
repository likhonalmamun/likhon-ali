import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation();
  const details = location.state;

  return (
    <div className="mt-20">
      <h1 className="sm:text-6xl text-4xl text-center font-bold text-amber-300 mb-16">
        {details.name}
      </h1>
      <div className="2xl:px-40 lg:px-20 px-5 sm:grid-cols-2 grid md:grid-cols-3 lg:grid-cols-4 border-amber-300 pb-20 border-b-2 gap-10">
        {details.pics.map((img) => (
          <img
            className="w-full rounded-md p-1 border-2 border-rose-500"
            src={img}
            alt=""
          ></img>
        ))}
      </div>
      <div className="my-10 flex-col sm:flex-row flex gap-10 justify-center px-5 sm:px-10 sm:px-40 mx-auto">
        <div className="min-w-[250px] max-w-[350px] mx-auto">
          <h1 className="text-lg font-bold text-rose-500">Overview :</h1>
          <p className="text-teal-300">{details.overview}</p>
        </div>
        <ul className="min-w-[250px] max-w-[400px] mx-auto">
          <h1 className="text-lg font-bold  text-rose-500">
            Features and technologies :
          </h1>
          {details.points.map((point, i) => (
            <li className="font-semibold text-teal-300 my-1">
              {i + 1} . {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;
