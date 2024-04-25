import React, { useState } from "react"; // Import useState from React
import Button from "@mui/material/Button"; // Assuming you're using Material-UI
import PopupBody from "../components/PopupBody"; // Make sure to define this component
import FooterCon from "../components/FooterCon";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SayCustomer from "../components/SayCustomer";
import AccordianCarrer from "../components/AccordianCarrer";
import { Data } from "../sources/accordian.json";
import "../style/Careers.css";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import { styled } from "@mui/system";
import CareersAccordion from "../components/careers-accordion/CareersAccordion";
import InlinePopup from "../components/inline-popup/InlinePopup";
import { IoMdSearch } from "react-icons/io";

// Rename the component to start with an uppercase letter
const Careers = () => {
  const [anchor, setAnchor] = React.useState(null);

  const handleClick = (event) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);
  const id = open ? "simple-popper" : undefined;

  return (
    <>
      <NavBar />
      <Header
        Title="Join"
        className="unhide-span"
        overSpan="team and work on interesting projects"
        SubHeading="We are a growing company that is dedicated to creating innovative solutions for our clients. We are looking for talented and motivated individuals who share our passion for technology and want to help us make a difference in the world."
        buttonText="Get free consultation"
      />

      <div className="flex flex-col gap-2 pt-[80px] md:container justify-center mx-auto md:px-[70px]">
        <div className="flex justify-center items-center flex-col gap-2">
          <h2> Careers Opprtunities</h2>
          <p className="!text-gray-400">
            We have a variety of career opportunities available{" "}
          </p>
        </div>
        <div className="flex flex-col">
          <form className="flex gap-2 w-full mx-auto">
            <div className="relative z-0 w-full mb-5 group flex gap-1 mx-auto px-3">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-100 text-sm text-gray-900 bg-transparent  border-b-2 border-white-800 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Search by role or keywords
              </label>
              <button
                type="submit"
                className="gap-2 inline-flex items-center justify-center px-4 py-1 text-base font-medium text-white bg-main hover:opacity-85 border-0 rounded-full  focus:ring-10 w-auto"
              >
                <IoMdSearch /> Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <CareersAccordion />

      {/* <section>
      <AccordianCarrer />
    </section> */}
      <SayCustomer />
      <FooterCon
        Title="See if"
        TitleOverSpan="is right for you.Let’s make something great"
        SubHeading="is right for you.Let’s make something great"
      />
      <Footer />
    </>
  );
};

export default Careers; // Export with the corrected name
