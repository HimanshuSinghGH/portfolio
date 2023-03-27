import React from "react";

function Expbox({
  name,
  jobTitle,
  sDate,
  eDate,
  location,
  highlights,
  imgUrl,
}) {
  return (
    <li class="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-[#ef010f] rounded-full mt-1.5 -left-1.5 border border-[#ef010f]"></div>
      <img
        src={imgUrl}
        alt="company logo"
        className="absolute w-[100px] h-[100px] rounded-full bg-slate-300 -left-[150px] mt-[50px]"
      />
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {sDate} - {eDate}
      </time>
      <h3 class="text-2xl font-semibold text-white mt-4">{jobTitle}</h3>
      <div className="flex justify-between align-middle mt-2">
        <h4 className="text-xl font-semibold ">{name}</h4>
        <h4 className="text-[#ef010f]">{location}</h4>
      </div>
      <h2 className="text-lg font-medium mt-2">Highlights:</h2>
      <ul className="list-disc list-inside">
        {highlights.map((item) => {
          return <li className="my-2">{item}</li>;
        })}
      </ul>
    </li>
  );
}

export default Expbox;
