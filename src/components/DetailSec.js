import React from "react";
import "./style/DetailSec.css";
import TowSideLayout from "./tow-side-layout/TowSideLayout";
import TowSmallSide from "./tow-small-side/TowSmallSide";
const DetailSec = ({
  Title,
  className,
  SubHeading,
  buttonText,
  imageSrc,
  index,
}) => {
  return (
    <div key={index} className="md:px-[70px] mx-auto mt-5">
      <TowSmallSide reverse={index % 2} imgUrl={imageSrc} >
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold">{Title}</h1>
        <p className="text-md lg:text-lg">{SubHeading}</p>
      </TowSmallSide>
    </div>
    // <div className={`DetailSec-sec ${className}`}>
    //   <div className="DetailSec-container">
    //     <div className="DetailSec-title">
    //       <h1>{Title}</h1>
    //       <p>{SubHeading}</p>
    //     </div>
    //     <div className="DetailSec-img">
    //       <img src={imageSrc} />
    //     </div>
    //   </div>
    // </div>
  );
};

export default DetailSec;
