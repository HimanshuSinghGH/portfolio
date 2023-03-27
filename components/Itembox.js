import React from "react";

function Itembox({ courses }) {
  return (
    <div className="flex flex-wrap my-2">
      {courses.map((course) => {
        return (
          <div className="bg-slate-300/40 my-1 mr-2 p-2 rounded-md">
            <h1>{course}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Itembox;
