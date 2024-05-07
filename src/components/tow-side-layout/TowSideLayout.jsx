import React from "react";

function TowSideLayout({ children, imgUrl, img2Url, reverse }) {
  return (
    <section className="md:mx-auto py-10 pl-4 pr-4 md:pl-0 md:pr-0  flex justify-center">
      <div
        className={` flex items-center flex-col-reverse  lg:flex-row align md:gap-8 lg:gap-12 gap-4 max-w-screen-xl ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="flex flex-col w-100 h-100 justify-center">{children}</div>
        <div className="flex mx-auto items-start justify-start w-100 h-100 relative">
          {img2Url ? (
            <>
              <img className="w-fit h-fit object-cover" src={imgUrl} />
              <img
                className="w-fit h-fit left-0 top-0 object-contain z-102 absolute scale-[1.03] md:scale-[1.09]"
                src={img2Url}
              />
            </>
          ) : (
            <img className="w-full h-full object-contain max-w-2xl max-h-96" src={imgUrl} />
          )}
        </div>
      </div>
    </section>
  );
}

export default TowSideLayout;
