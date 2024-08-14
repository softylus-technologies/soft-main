import React from "react";
import "./style/FeatureSection.css";
import "./style/FeatureSection2.css";
import TowSideLayout from "./tow-side-layout/TowSideLayout";
const DetailHero = ({ Title, SubHeading, buttonText, imageSrc, className }) => {
  return (
    <div className="md:px-[70px] mx-auto mt-5">
      <TowSideLayout reverse imgUrl={imageSrc} classNameres={"desktop"}>
        <h1 className="text-4xl md:text-5xl">{Title}</h1>
        <div class="gif-container flex mx-auto items-start justify-start w-100 h-100 relative mobile">
            <img class="w-full h-full object-cover border-radius30" src={imageSrc}/>
          </div>
        <p className="p-text">{SubHeading}</p>
      </TowSideLayout>
    </div>

    //   <div className='sec-center'>
    //   <section className={`sec-width ${className}`}> {/* Use semantic tags like <section> for content sections */}
    //     <div className='image-sec'>
    //         <img src={imageSrc} alt="Description of the main image" />
    //       {/* Add aria-label to buttons to describe the action for screen readers */}
    //     </div>
    //     <aside className={`title-sec simple-edit DetailHero`}> {/* Use <aside> if this content is complementary to the main content */}

    //       <h1 className='h1-text'>{Title}</h1> {/* Ensure that <h1> is used once per page for the main title */}
    //       <p className="p-text">{SubHeading}</p>
    //     </aside>
    //   </section>
    // </div>
  );
};

export default DetailHero;
