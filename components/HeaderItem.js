import React from "react";

function HeaderItem({ title, link }) {
  return (
    <div className="items-center text-center align-middle py-2">
      <a
        className="text-xl font-normal hover:text-[#ef010f] hover:animate-bounce"
        href={link}
      >
        {title}
      </a>
    </div>
  );
}

export default HeaderItem;
