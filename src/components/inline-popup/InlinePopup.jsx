import { Popover, Transition } from "@headlessui/react";

import React, { Fragment } from "react";

export default function InlinePopup({ btnText, children, ...props }) {
  return (
    <div className={`${props.classes} w-full max-w-full px-4`}>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "text-main" : "text-main/90"}
                group items-center justify-center px-3 py-2 text-base font-medium bg-white text-main hover:opacity-85 border-0 rounded-full  focus:ring-10 w-auto`}
            >
              <span>{btnText}</span>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className={`absolute left-[-10%] z-10 mt-3 w-[350px] -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl ${props.panelClassess}`}
              >
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                  <div className="relative grid gap-8 bg-dark p-7 lg:grid-cols-2">
                    {children}
                    <h1>Hello form teh other side ahmed elabbasy</h1>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
