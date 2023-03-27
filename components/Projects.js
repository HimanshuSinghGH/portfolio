import React from "react";
import ProjectBox from "./ProjectBox";
import SectionTitle from "./SectionTitle";

function Projects() {
  return (
    <div className="min-h-[100vh] pb-12 bg-gradient-to-br from-[#3e2938] via-[#433358] via-[#3d4b72] to-[#1e3860]">
      <SectionTitle name="PROJECTS" />
      <div className="flex mt-12 space-x-3 justify-center">
        <ProjectBox
          github="test"
          link="test"
          title="Distributed Password Manager - Chrome Extension"
          description="A distributed password manager based on Shamir's Secret Sharing to eliminate single point of 
          failure and improve security of stored passwords by three times"
          techStack={["React", "MongoDb", "Bycrypt", "OpenPGP"]}
        />
        <ProjectBox
          github="test"
          link="test"
          title="Vocabular - Vocabulary Builder Android App"
          description="A cross platform mobile app to help non-native speakers and exam aspirants 
        to gradully build their vocabulary by mainting personalized lists and using quizzes and flashcards"
          techStack={["React-native", "Firebase", "Revenuecat", "AdMob"]}
        />
        <ProjectBox
          github="test"
          link="test"
          title="Texas A&M CSEGSA Official Protal"
          description="Augments the capabilities of CSEGSA Officers by providing a central platform for sharing resources and invitations.
          Has custom components for planning events and webinars and tracking student participation"
          techStack={["React", "MongoDB", "OAuth2.0", "Firebase"]}
        />
        <ProjectBox
          github="test"
          link="test"
          title="Google Docs Clone"
          description="Built a fully responsive clone for google docs with features like protected routes, google 
          authentication and a rich text editor with a firebase backend."
          techStack={[
            "Next.js",
            "React",
            "TailwindCSS",
            "Firebase",
            "Draft.js",
            "NextAuth",
          ]}
        />
      </div>
      <div className="flex mt-3 space-x-3 justify-center">
        <ProjectBox
          github="test"
          link="test"
          title="TYOLO - Traffic Object Detection using fine tuned YOLO v5"
          description="Custom Trained and Fine Tuned YOLOv5 on LARA dataset to detect traffic lights and estimate distance in real 
          time videos to assist AVs in motion planning. Optimized the algorithm to reduce detection time by 30%."
          techStack={["Pytorch", "Pandas", "OpenCV"]}
        />
        <ProjectBox
          github="test"
          link="test"
          title="Story Generator based on Writing Style"
          description="Custom trained GPT-2 to create a story generator. The style of the stories could be varied based on input 
          parameters (7 genres and 5 Authors). Further refined the training samples to create coherent plots with consistent characters."
          techStack={["Pytorch", "NLTK", "SpaCy", "Pandas"]}
        />
        <ProjectBox
          github="test"
          link="test"
          title="Privacy of DNS-over-HTTPS: Requiem for a Dream?"
          description="Developed a algorithm to identify DoH traffic from the encrypted web traffic using Deep Neural Networks. Used it to create a real-time on
          path network filter prototype with an F1-score of 0.976."
          techStack={["Pandas", "Docker", "Keras", "Tshark"]}
        />
        <ProjectBox
          github="test"
          link="test"
          title="IoT based Smart Home Automation using Sensor Node"
          description="Developed a sensor network to automate everyday home appliances and reduce electricity consumption 
          by 40%.Led the development of the back-end server to enable mobile devices to control appliances."
          techStack={["NodeMCU esp8266", "PHP", "C"]}
        />
      </div>
    </div>
  );
}

export default Projects;
