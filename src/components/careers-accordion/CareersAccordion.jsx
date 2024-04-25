import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

import CustomModal from "../modal/CustomModal";
import ApplyForm from "../apply-form/ApplyForm";
import AccData from "../../sources/accordian.json";

function SingleAccordion({ question, answer }) {
  return (
    <div className="mx-auto w-full rounded-2xl bg-transparent my-10">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between md: rounded-lg lg:px-4 py-2  text-left text-sm font-medium 0 focus:outline-none focus-visible:ring">
              <div className="flex gap-4 items-center justify-center">
                {open ? (
                  <CiCircleMinus className="text-3xl text-white" />
                ) : (
                  <CiCirclePlus className="text-3xl text-white" />
                )}
                <h2 className="text-2xl">{question}</h2>
              </div>
              <div>
                <CustomModal btnText="Apply Now" classes="hidden md:flex">
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
                    <CustomModal btnText="Apply Now" classes="md:hidden flex">
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
  return (
    <div className="w-full px-4 pt-16 relative">
      <img
        className="circle !top-[-50%] !bottom-[unset] !left-[-22%] z-[-1] "
        id="circle1"
        src="/Frame 1000003358.svg"
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
