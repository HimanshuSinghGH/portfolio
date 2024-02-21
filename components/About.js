import React from "react";
import Intro from "./Intro";
import { useSnackbar } from "react-simple-snackbar";

import {
  BsGithub,
  BsLinkedin,
  BsFillBookFill,
  BsFillEnvelopeAtFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";

function About() {
  const [openSnackbar, closeSnackbar] = useSnackbar({
    position: "bottom-left",
  });

  function copyToClipboard() {
    navigator.clipboard.writeText("himanshu_singh@tamu.edu");
    openSnackbar("Email copied", 5000);
  }

  return (
    <div className="relative h-[90vh] text-center">
      {/* Name + tagline */}
      <Intro />
      {/* Social  */}
      <div className="absolute rounded-lg opacity-0 left-0 top-72 bg-[#404e75]/80 p-2 md:opacity-80">
        <div className="p-2 my-2 rounded-lg hover:bg-[#ef010f] hover:text-white">
          <a href="https://github.com/HimanshuSinghGH" target="_blank">
            <BsGithub size={40} />
          </a>
        </div>
        <div className="p-2 my-2 rounded-lg hover:bg-[#ef010f]  hover:text-white">
          <a
            href="https://www.linkedin.com/in/himanshu-singh-li/"
            target="_blank"
          >
            <BsLinkedin size={40} />
          </a>
        </div>
        <div className="p-2 my-2 rounded-lg hover:bg-[#ef010f]  hover:text-white">
          <a
            href="https://scholar.google.com/citations?user=r81kNvAAAAAJ&hl=en"
            target="_blank"
          >
            <BsFillBookFill size={40} />
          </a>
        </div>
        <div className="p-2 my-2 rounded-lg hover:bg-[#ef010f]  hover:text-white">
          <BsFillEnvelopeAtFill size={40} onClick={copyToClipboard} />
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2">
        <BsFillArrowDownCircleFill size={30} className="animate-bounce" />
      </div>
    </div>
  );
}

export default About;
