import React from "react";

function ClientCard({ src, alt }) {
  return (
    <div className="ClientCard-container flex justify-center">
      <img src={src} 
       className="grayscale transition-all duration-300 hover:grayscale-0"
       style={{ filter: 'grayscale(100%)', WebkitFilter: 'grayscale(100%)' }}/>
   
    </div>
  );
}

export default ClientCard;
