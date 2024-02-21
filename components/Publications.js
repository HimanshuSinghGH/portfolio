import React from "react";
import PaperBox from "./PaperBox";
import SectionTitle from "./SectionTitle";

function Publications() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3e2938] via-[#433358] via-[#3d4b72] to-[#1e3860] rounded-sm">
      <SectionTitle name="PUBLICATIONS" />
      <div className="flex justify-evenly mt-16">
        <PaperBox
          title="Privacy of DNS-over-HTTPS: Requiem for a Dream?"
          authors="L. Csikor, H. Singh, M. S. Kang and D. M. Divakaran"
          conference="2021 IEEE European Symposium on Security and Privacy (EuroS&P), Vienna, Austria, 2021, pp. 252-271, doi: 10.1109/EuroSP51992.2021.00026."
          link="https://ieeexplore.ieee.org/abstract/document/9581227"
        />

        <PaperBox
          title="IoT based smart home automation system using sensor node"
          authors="H. Singh, V. Pallagani, V. Khandelwal and U. Venkanna"
          conference="2018 4th International Conference on Recent Advances in Information Technology (RAIT), Dhanbad, India, 2018, pp. 1-5, doi: 10.1109/RAIT.2018.8389037."
          link="https://ieeexplore.ieee.org/document/8389037"
        />
      </div>
    </div>
  );
}

export default Publications;
