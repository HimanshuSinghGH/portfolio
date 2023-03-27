import React from "react";
import SectionTitle from "./SectionTitle";
import UnivInfo from "./UnivInfo";

function Education() {
  return (
    <div className="h-[100vh] bg-gradient-to-br from-[#3e2938] via-[#433358] via-[#3d4b72] to-[#1e3860] ">
      <SectionTitle name="EDUCATION" />
      {/* Univs boxes */}
      <div className="flex justify-evenly mt-16">
        <UnivInfo
          name="Texas A&M University"
          location="College Station, TX"
          date="Aug 2021 - Dec 2022"
          imgUrl="/tamu2.jpg"
          degree="M.S. Computer Science"
          gpa="4.0 / 4.0"
          courses={[
            "Machine Learning",
            "NLP",
            "Robotics",
            "OS",
            "SWE",
            "Data Analytics for Cybersecurity",
            "Network Security",
            "Accessible Computing",
          ]}
          achievements={[
            "CSE Dept. Scholarship for Excellent Academic Performance",
            "Mentor for TAMUHack 2023",
          ]}
        />
        <UnivInfo
          name="IIIT - Naya Raipur"
          location="Chhattisgarh, India"
          date="Aug 2016 - Jul 2020"
          imgUrl="/iiitnr.jpeg"
          degree="B.Tech. Computer Science"
          gpa="3.87 / 4.00"
          courses={[
            "Machine Learning",
            "Deep Learning",
            "Adv. OS",
            "SWE",
            "Computer Networks",
            "Compiler Design",
            "DSA",
            "Cloud Computing",
          ]}
          achievements={[
            "State Govt. Scholarship for Excellent Academic Performance",
            "Organizer & Coordinator for Techical Fest and T&P Cell",
          ]}
        />
      </div>
    </div>
  );
}

export default Education;
