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
          abstract="IThe recently proposed DNS-over-HTTPS (DoH) protocol is becoming increasingly popular in addressing the privacy concerns of exchanging plain-text 
        DNS messages over potentially malicious transit networks (e.g., mass surveillance at ISPs). By employing HTTPS to encrypt DNS communications, DoH traffic 
        inherently becomes indistinguishable from regular encrypted Web traffic, rendering active disruption (e.g., downgrading to the plain-text DNS) by transit 
        networks extremely hard. In this work, we investigate whether DoH traffic is indeed indistinguishable... "
          link="https://ieeexplore.ieee.org/abstract/document/9581227"
        />

        <PaperBox
          title="IoT based smart home automation system using sensor node"
          authors="H. Singh, V. Pallagani, V. Khandelwal and U. Venkanna"
          conference="2018 4th International Conference on Recent Advances in Information Technology (RAIT), Dhanbad, India, 2018, pp. 1-5, doi: 10.1109/RAIT.2018.8389037."
          abstract="In recent years, the advancements in Information and Communication Technology (ICT) are mainly focused on the Internet of Things (IoT). In a real-world scenario, 
        IoT based services improve the domestic environment and are used in various applications. Home automation based IoT is versatile and popular applications. In home automation,
         all home appliances are networked together and able to operate without human involvement. Home automation gives a significant change in humans life which gives smart operating 
         of home appliances..."
          link="https://ieeexplore.ieee.org/document/8389037"
        />
      </div>
    </div>
  );
}

export default Publications;
