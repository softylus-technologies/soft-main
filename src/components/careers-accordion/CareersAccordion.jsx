import React from "react";
import { useIntl, FormattedMessage } from "gatsby-plugin-intl";
import { Disclosure, Transition } from "@headlessui/react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import "../../style/Careers.css"
import CustomModal from "../modal/CustomModal";
import ApplyForm from "../apply-form/ApplyForm";
import AccDataEn from "../../sources/accordian-en.json";
import AccDataAr from "../../sources/accordian-ar.json";

function SingleAccordion({ question, answer }) {
  const intl = useIntl();

  return (
    <div className="mx-auto w-full rounded-2xl bg-transparent my-10">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between md: rounded-lg lg:px-4 py-2  text-left text-sm font-medium 0 focus:outline-none focus-visible:ring">
              <div className="flex gap-4 items-top justify-center">
                {open ? (
                  <CiCircleMinus className="text-3xl text-white svg-width-hight" />
                ) : (
                  <CiCirclePlus className="text-3xl text-white svg-width-hight" />
                )}
                <h2 className="text-2xl accordian-title-Careers">{question}</h2>
              </div>
              <div>
                <CustomModal btnText={intl.formatMessage({ id: "careers.accordion.applyNow" })} classes="hidden md:flex">
                  <ApplyForm />
                </CustomModal>
              </div>
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="mx-2 md:mx-30">
                <div className="items-start  flex flex-col gap-2">
                  <p className="!text-gray-300 text-1xl px-2 md:px-20 ">
                    {answer}
                  </p>
                  <div>
                    <CustomModal btnText={intl.formatMessage({ id: "careers.accordion.applyNow" })} classes="md:hidden flex">
                      <ApplyForm />
                    </CustomModal>
                  </div>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}

function CareersAccordion() {
  const intl = useIntl();
  const AccData = intl.locale === 'ar' ? AccDataAr : AccDataEn;

  return (
    <div className="w-full px-4 pt-16 relative accordian-Careers">
      <img
        className="circle !top-[-50%] !bottom-[unset] !left-[-22%] z-[-1] "
        id="circle1"
        src="/Frame 1000003358.svg"
        alt={intl.formatMessage({ id: "careers.accordion.circleAlt" })}
      />
      {AccData.map((item, idx) => (
        <SingleAccordion
          key={idx}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}

export default CareersAccordion;