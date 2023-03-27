import React from "react";
import Intro from "./Intro";
import SocialItem from "./SocialItem";
import {
  BsGithub,
  BsLinkedin,
  BsFillBookFill,
  BsFillEnvelopeAtFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";

function About() {
  return (
    <div className="relative h-[90vh] text-center">
      {/* Name + tagline */}
      <Intro />
      {/* Social  */}
      <div className="absolute rounded-lg opacity-0 left-0 top-72 bg-[#404e75]/80 p-2 md:opacity-80">
        <div className="p-2 my-2 rounded-lg hover:bg-[#ef010f] hover:text-white">
          <BsGithub size={40} />
        </div>
        <div className="p-2 my-2 rounded-lg hover:bg-[#ef010f]  hover:text-white">
          <BsLinkedin size={40} />
        </div>
        <div className="p-2 my-2 rounded-lg hover:bg-[#ef010f]  hover:text-white">
          <BsFillBookFill size={40} />
        </div>
        <div className="p-2 my-2 rounded-lg hover:bg-[#ef010f]  hover:text-white">
          <BsFillEnvelopeAtFill size={40} />
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2">
        <BsFillArrowDownCircleFill size={30} className="animate-bounce" />
      </div>
    </div>
  );
}

export default About;
