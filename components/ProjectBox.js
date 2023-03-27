import React from "react";
import { BsFolder, BsGithub, BsLink45Deg } from "react-icons/bs";
import Itembox from "./Itembox";

function ProjectBox({
  title,
  description,
  github,
  link,
  techStack = ["react"],
}) {
  return (
    <div className="bg-slate-600/60 w-1/5 p-3 rounded-lg hover:-translate-y-2">
      <div className="flex justify-between align-middle">
        <BsFolder size={40} color="red" />
        <div className="flex items-center">
          {github != null ? (
            <a href="#" className="hover:bg-red-400 p-1 mr-2 rounded-lg">
              <BsGithub size={25} color="white" />
            </a>
          ) : null}
          {link != null ? (
            <a href="#" className="hover:bg-red-400 p-1 mr-2 rounded-lg">
              <BsLink45Deg size={25} color="white" />
            </a>
          ) : null}
        </div>
      </div>
      <h1 className="text-2xl font-semibold my-4 text-white">{title}</h1>
      <h2 className="mb-4">{description}</h2>
      <h2 className="text-lg font-medium">Tech Stack</h2>
      <Itembox courses={techStack} />
    </div>
  );
}

export default ProjectBox;
