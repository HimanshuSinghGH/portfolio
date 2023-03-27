import React from "react";

function PaperBox({ title, authors, link, abstract, conference }) {
  return (
    <div className="w-1/4 max-h-[70vh] bg-slate-100/70 p-4 text-black rounded-md">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <h2 className="text-2xl my-4">{authors}</h2>
      <h2 className="my-4 font-semibold">{conference}</h2>
      <h2 className="my-4">{abstract}</h2>
      <div className="w-1/4 bg-[#3e2938]/50 p-2 rounded-lg text-center justify-center text-white mx-auto my-4 hover:bg-[#ef010f]">
        <h1 className="font-bold">
          <a href={link} target="_blank">
            READ
          </a>
        </h1>
      </div>
    </div>
  );
}

export default PaperBox;
