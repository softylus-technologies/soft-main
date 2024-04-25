import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./style/FeatureSection.css";
import { Button } from "reactstrap";
const SecOne = ({
  Title,
  SubHeading,
  buttonText,
  onButtonClick,
  imageSrc,
  className,
  FrameSrc,
  IconSrc1,
  Des1,
  IconSrc2,
  Des2,
  IconSrc3,
  Des3,
  IconSrc4,
  Des4,
  path,
}) => {
  return (
    <>
      <div className="medd-sec">
        <section className="sec">
          {" "}
          {/* Use semantic tags like <section> for content sections */}
          <div className="sec-left">
            <h1 className="sec-title">{Title}</h1>{" "}
            {/* Ensure that <h1> is used once per page for the main title */}
            <p className="sub-sec">{SubHeading}</p>
            <div className="sec-icon">
              <div className="sec-icon-left">
                <h2 className="h3-icon">
                  {" "}
                  {/* Use <h2> for subheadings if <h1> is already used above */}
                  <img src={IconSrc1} alt="Description of Icon 1" />
                  {/* Add alt attributes to all images */}
                  {Des1}
                </h2>
                <h2 className="h3-icon">
                  <img src={IconSrc2} alt="Description of Icon 2" />
                  {Des2}
                </h2>
              </div>
              <div className="sec-icon-right">
                <h2 className="h3-icon">
                  <img src={IconSrc3} alt="Description of Icon 3" />
                  {Des3}
                </h2>
                <h2 className="h3-icon">
                  <img src={IconSrc4} alt="Description of Icon 4" />
                  {Des4}
                </h2>
              </div>
            </div>
            <Button
              className="btn-sec"
              onClick={onButtonClick}
              aria-label="Describe action here"
              href={path}
            >
              {buttonText}
            </Button>
            {/* Add aria-label to buttons to describe the action for screen readers */}
          </div>
          <aside className={`sec-right ${className}`}>
            {" "}
            {/* Use <aside> if this content is complementary to the main content */}
            <img src={imageSrc} alt="Description of the main image" />
            <img src={FrameSrc} alt="Description of the frame" />
          </aside>
        </section>
      </div>
      <div class="container">
        <img class="circle-sec" id="circle1" src="/Frame 1000003358.svg" />
      </div>
    </>
  );
};

export default SecOne;
