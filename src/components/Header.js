import React from "react";
import "./style/Header.css";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "reactstrap";
import { Link } from "gatsby";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = ({
  Title,
  SubHeading,
  buttonText,
  onButtonClick,
  imageSrc,
  altText,
  className,
  overSpan,
}) => {
  const container = useRef(null);
  useGSAP(
    () => {
      // gsap code here...
      const elements = container.current.children;
      container.current.classList.remove("opacity-0");
      gsap.set(container.current, {
        autoAlpha: 1,
      });

      if (elements.length > 1) {
        let animation = gsap.timeline({ repeat: 20 });
        let duration = 0.6; //change this
        let pause = 2; // change this
        let stagger = duration + pause;
        let repeatDelay = stagger * (elements.length - 1) + pause;

        animation
          .from(elements, {
            y: 80,
            duration: 0.6,
            opacity: 0,
            stagger: {
              each: stagger,
              repeat: -1,
              repeatDelay: repeatDelay,
            },
          })
          .to(
            elements,
            {
              y: 80,
              duration: 0.6,
              opacity: 0,
              stagger: {
                each: stagger,
                repeat: -1,
                repeatDelay: repeatDelay,
              },
            },
            stagger
          );
      }
    },
    { scope: container }
  );

  return (
    <header className="bg-hero-pattern bg-cover	bg-right-center bg-no-repeat min-h-screen flex bg-ps-buttom  ">
      <div className="grid max-w-screen-xl py-8 min-w-full  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
        <div className="mr-auto place-self-center md:pl-[70px] pl-4 pr-4">
          <h1 className="py-2 overflow-hidden max-w-2xl mb-2 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
            {Title}
            <div
              ref={container}
              className="inline-flex m-0 p-0 relative opacity-0"
            >
              {overSpan && overSpan?.split(",")?.length > 1
                ? overSpan
                    ?.split(",")
                    .map((span,index) => (
                      <span key={index} className="mx-1 text-main absolute over-span top-[-0.8em]">
                        {span}
                      </span>
                    ))
                : overSpan}
            </div>
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 text-lg leading-loose dark:text-gray-400">
            {SubHeading}
          </p>

          <Link
            to="/ContactUs"
            className="no-underline  inline-flex items-center justify-center px-5 py-3 text-base font-extrabold	 text-white bg-main hover:opacity-85 border-0 rounded-full  focus:ring-10 "
          >
            Speak to Sales <img src="/Arrow 1 (1).svg" className="mx-2" />
          </Link>
        </div>
        <div className="lg:mt-0  lg:flex w-100 h-100 bg-transparent">
          <img src="/softylusHero.png" alt="Describe the image here" className=" w-full object-contain" />
        </div>
      </div>
    </header>
  );
};

export default Header;

// lg:col-span-6
// lg:col-span-6
// mx-auto
