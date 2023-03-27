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
            jobTitle="Business Technology Analyst"
            location="Bengaluru, India"
            sDate="Aug 2020"
            eDate="Jul 2021"
            imgUrl="deloitte_logo.png"
            highlights={[
              "Developer of the month for Dec 2020 and Jan 2021",
              "Developed critical web application for an American Client working in the healthcare sector. The Apps were based on the MERN Stack.",
              "Mentored 50+ new hires during theie onboarding phase and conducted session on SQL and Node.js",
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
              "Analysed privacy claims of DNS-over-HTTPS (DoH) packets for Singtel and deployed a real-time on-path packet filter prototype for Singtel",
              "The final classifier achieved an F1-score of 97.6% in the open world setting",
            ]}
          />
        </ol>
      </div>
    </div>
  );
}

export default Experience;
