import React from "react";

function ClientCard({ src, alt }) {
  return (
    <div className="ClientCard-container flex justify-center">
      <img src={src}  />
    </div>
  );
}

export default ClientCard;
