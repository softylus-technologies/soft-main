import React from "react";

function ClientCard({ src, alt }) {
  return (
    <div className="flex overflow-hidden justify-center">
      <img src={src} className="object-cover w-fit h-fit" />;
    </div>
  );
}

export default ClientCard;
