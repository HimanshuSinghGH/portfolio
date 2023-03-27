import React from "react";

function SectionTitle({ name }) {
  return (
    <div className="pt-[15vh] text-center">
      <h1 className="text-3xl text-white underline underline-offset-8 decoration-[#ef010f] decoration-double">
        {name}
      </h1>
    </div>
  );
}

export default SectionTitle;
