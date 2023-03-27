import React from "react";
import {
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsTwitter,
  BsFillHeartbreakFill,
} from "react-icons/bs";

function Footer() {
  return (
    <div className="h-[30vh] w-4/5 mx-auto">
      <div className="flex justify-between mt-16">
        <div className="w-3/5">
          <h1 className="text-xl font-semibold">Himanshu Singh</h1>
          <p className="text-lg mt-2">
            A smart working software developer with and entrepreneurial mindset
            who loves bringing ideas to life and is passionation about helping
            people and making an impact.
          </p>
        </div>
        <div className="w-1/5">
          <h1 className="text-xl font-semibold">Socials</h1>
          <div className="flex mt-2">
            <a href="#" className="mr-2">
              <BsGithub size={30} />
            </a>
            <a href="#" className="mr-2">
              <BsLinkedin size={30} />
            </a>
            <a href="#" className="mr-2">
              <BsInstagram size={30} />
            </a>
            <a href="#" className="mr-2">
              <BsTwitter size={30} />
            </a>
          </div>
        </div>
      </div>
      <div className=" text-center my-8">
        <p className="italic">
          "In fearful days, In raging nights, With strong hearts full our souls
          ignite. When all seems lost in the war of light, Look to the starts
          for hope burns bright."
        </p>
      </div>
      <hr className="bg-red-600" />
      <div className="text-center mt-4">
        <h2>
          Made with{" "}
          <BsFillHeartbreakFill size={15} color="red" className="inline" /> by
          Himanshu Singh.
        </h2>
      </div>
    </div>
  );
}

export default Footer;
