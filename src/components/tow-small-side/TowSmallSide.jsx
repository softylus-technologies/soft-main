import React from "react";
import "../style/Footer.css"
function TowSmallSide({ children, imgUrl, reverse }) {
  return (
    <section className="md:mx-auto py-10 pl-4 pr-4 md:pl-0 md:pr-0 flex justify-center ">
      <div
        className={`full-width-media grid grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-4 w-4/5 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div
          className={`${
            reverse ? "lg:order-2" : ""
          } md:col-span-2 w-100 h-100 my-auto flex justify-center flex-col`}
        >
          {children}
        </div>
        <div
          className={`${
            reverse ? "lg:order-1" : ""
          }flex mx-auto items-start justify-start w-100 h-60 relative `}
        >
          <img className="w-full h-full  " src={imgUrl} />
        </div>
      </div>
    </section>
  );
}

export default TowSmallSide;
