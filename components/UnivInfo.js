import React from "react";
import Image from "next/image";
import Itembox from "./Itembox";

function UnivInfo({
  name,
  date,
  location,
  gpa,
  courses,
  achievements,
  imgUrl,
  degree,
}) {
  return (
    <div className="w-1/4 h-[70vh] bg-slate-600/60 rounded-lg text-center overflow-hidden">
      <img src={imgUrl} alt="tamu image skyshot" className="h-1/3 w-full" />
      <h1 className="text-2xl text-white mt-2">{degree}</h1>
      <h1 className="text-xl text-white mt-2">{name}</h1>
      <h2>{location}</h2>
      <h2>{date}</h2>
      <div className="mt-4 text-left px-3">
        <h1 className="text-xl font-semibold">GPA: {gpa}</h1>
        <Itembox courses={courses} />
        <ol className="list-decimal list-inside mt-4">
          {achievements.map((item) => {
            return <li>{item}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}

export default UnivInfo;
