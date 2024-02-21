import React from "react";
import Expbox from "./Expbox";
import SectionTitle from "./SectionTitle";

function Experience() {
  return (
    <div className="h-[100vh] bg-gradient-to-br from-[#3e2938] via-[#433358] via-[#3d4b72] to-[#1e3860]">
      <SectionTitle name="EXPERIENCE" />
      <div className="w-2/5 mx-auto">
        <ol class="relative border-gray-200 border-l-2 border-dotted mt-12">
          <Expbox
            name="Deloitte USI"
            jobTitle="Software Engineer"
            location="Bengaluru, India"
            sDate="Aug 2020"
            eDate="Jul 2021"
            imgUrl="deloitte_logo.png"
            highlights={[
              "Delivered 20+ functionalities in the MERN Stack and increased code coverage by 35% through effective unit testing and Test Driven Development",
              "Optimised database queries to reduce response time by 54.7%",
              "Mentored 5 developers, resulting in their successful on-boarding",
            ]}
          />
          <Expbox
            name="National University of Singapore"
            jobTitle="Research Intern (Machine Learning)"
            location="Singapore"
            sDate="Jan 2020"
            eDate="Aug 2021"
            imgUrl="nus_logo.png"
            highlights={[
              "Spearheaded the development of multiple Machine Learning Workflows to distinguish DNS-over-HTTPs packets from encrypted web traffic",
              "The best performing model achieved an accuracy of 97.6% in the open world setting ( spanning across multiple DNS resolvers and CPU Architectures)",
              "Deployed the model as an on-path network filter prototype to identify and drop DOH packets in real time",
              "Contributed to a research publication in a top-tier conference on security and privacy",
            ]}
          />
        </ol>
      </div>
    </div>
  );
}

export default Experience;
