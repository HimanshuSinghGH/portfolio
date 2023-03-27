import React from "react";

function Intro() {
  return (
    <div className="bg-[url('../public/triangle_bg.jpg')] object-scale-down w-full h-[90vh] pt-16">
      <img
        src="./heman_dp.jpg"
        alt="Himanshu DP"
        className="w-1/6 mx-auto rounded-lg mb-8 hover:scale-105 hover:-skew-y-2"
      />
      <div className="w-3/5 mx-auto p-5 bg-slate-600/60 rounded-lg">
        <h1 className="text-6xl text-white mb-8">I am Himanshu Singh</h1>
        <p className="text-3xl text-white">
          A computer science enthusiast with an entrepreneurial mindset who is
          passionate about solving challenging real-world problems and helping
          people in the process.
        </p>
      </div>
    </div>
  );
}

export default Intro;
