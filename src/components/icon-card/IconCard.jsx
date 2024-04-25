import React from "react";

function IconCard({ text, imageUrl }) {
  return (
    <div className="flex items-center gap-2">
      <img src={imageUrl} alt="Description of Icon 1" className="w-fit h-fit" />
      <h6 className="m-0">{text}</h6>
    </div>
  );
}

export default IconCard;
