import React from "react";
import "../style/Cards.css";
import { useIntl } from "react-intl";

function TowSideLayout({ children, imgUrl, img2Url, reverse, classNameres }) {
  const intl = useIntl();

  return (
    <section className="our-features-section md:mx-auto pl-4 pr-4 md:pl-0 md:pr-0">
      <div
        className={`flex flex-col-reverse lg:flex-row align md:gap-8 lg:gap-12 gap-4 md:flex-col-reverse items-center ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="content-section flex flex-col w-100 h-100">{children}</div>
        <div className={`gif-container flex mx-auto items-start justify-start w-100 h-100 relative ${classNameres}`}>
          {img2Url ? (
            <>
              <img 
                className="w-full h-fit object-cover full-hight" 
                src={imgUrl} 
                alt={intl.formatMessage({ id: "towSideLayout.mainImageAlt", defaultMessage: "Main illustration" })}
              />
              <img
                className="w-full h-fit left-0 top-0 object-contain z-102 absolute scale-[1.03] md:scale-[1.09] full-hight"
                src={img2Url}
                alt={intl.formatMessage({ id: "towSideLayout.overlayImageAlt", defaultMessage: "Overlay illustration" })}
              />
            </>
          ) : (
            <img 
              className="w-full h-full object-cover border-radius30" 
              src={imgUrl} 
              alt={intl.formatMessage({ id: "towSideLayout.singleImageAlt", defaultMessage: "Feature illustration" })}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default TowSideLayout;