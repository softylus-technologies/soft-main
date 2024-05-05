import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style//IndustryTabs.css";
import "react-tabs/style/react-tabs.css";
import TowSideLayout from "./tow-side-layout/TowSideLayout";
import { Link } from "gatsby";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
const SecTwo = () => {
  return (
    <TowSideLayout reverse={true} imgUrl={"/Frame 1000003299.svg"}>
      <h1 className="text-3xl md:text-5xl mb-3">
        We work across many industries – find yours!
      </h1>
      <div>
        <Tabs>
          <TabList>
            <Tab>Blockchain</Tab>
            <Tab>Crowdfunding</Tab>
            <Tab>Fin-Tech</Tab>
            <Tab>E-commerce</Tab>
          </TabList>

          <TabPanel className="w-100">
            <p className="p-tab">
              Blockchain is a decentralized and distributed digital ledger
              technology. It's most commonly associated with cryptocurrencies
              like Bitcoin but has broader applications. Blockchain ensures
              transparency, security, and immutability of data, making it
              valuable in industries such as finance, supply chain management,
              and healthcare.
            </p>
          </TabPanel>
          <TabPanel>
            <p className="p-tab">
              Blockchain is a decentralized and distributed digital ledger
              technology. It's most commonly associated with cryptocurrencies
              like Bitcoin but has broader applications. Blockchain ensures
              transparency, security, and immutability of data, making it
              valuable in industries such as finance, supply chain management,
              and healthcare.
            </p>
          </TabPanel>
          <TabPanel>
            <p className="p-tab">
              Blockchain is a decentralized and distributed digital ledger
              technology. It's most commonly associated with cryptocurrencies
              like Bitcoin but has broader applications. Blockchain ensures
              transparency, security, and immutability of data, making it
              valuable in industries such as finance, supply chain management,
              and healthcare.
            </p>
          </TabPanel>
          <TabPanel>
            <p className="p-tab">
              Blockchain is a decentralized and distributed digital ledger
              technology. It's most commonly associated with cryptocurrencies
              like Bitcoin but has broader applications. Blockchain ensures
              transparency, security, and immutability of data, making it
              valuable in industries such as finance, supply chain management,
              and healthcare.
            </p>
          </TabPanel>
          {/* ... other TabPanel contents with unique descriptions ... */}
        </Tabs>
      </div>
      <div className="my-4">
        <Link
          to="/ContactUs"
          className="no-underline inline-flex items-center justify-center px-3 py-3 text-base font-medium text-white bg-main hover:opacity-85 border-0 rounded-full  focus:ring-10 w-auto"
        >
          Check All Industry
        </Link>
      </div>
    </TowSideLayout>
  );
};

export default SecTwo;

{
  /* <div className="medd-sec">
        <section className="sec sec-2">
          <div className="sec-left">
            <img
              src="Frame 1000003299.svg"
              alt="Describe what the image represents"
            />
          </div>
          <div className={`sec-right sec-right-2`}>
            <h1 className="sec-title-2">
              We work across many industries – find yours!
            </h1>
            <Tabs>
              <TabList>
                <Tab>Blockchain</Tab>
                <Tab>Crowdfunding</Tab>
                <Tab>Fin-Tech</Tab>
                <Tab>E-commerce</Tab>
              </TabList>

              <TabPanel>
                <p className="p-tab">
                  Blockchain is a decentralized and distributed digital ledger
                  technology. It's most commonly associated with
                  cryptocurrencies like Bitcoin but has broader applications.
                  Blockchain ensures transparency, security, and immutability of
                  data, making it valuable in industries such as finance, supply
                  chain management, and healthcare.
                </p>
              </TabPanel>
              <TabPanel>
                <p className="p-tab">
                  Blockchain is a decentralized and distributed digital ledger
                  technology. It's most commonly associated with
                  cryptocurrencies like Bitcoin but has broader applications.
                  Blockchain ensures transparency, security, and immutability of
                  data, making it valuable in industries such as finance, supply
                  chain management, and healthcare.
                </p>
              </TabPanel>
              <TabPanel>
                <p className="p-tab">
                  Blockchain is a decentralized and distributed digital ledger
                  technology. It's most commonly associated with
                  cryptocurrencies like Bitcoin but has broader applications.
                  Blockchain ensures transparency, security, and immutability of
                  data, making it valuable in industries such as finance, supply
                  chain management, and healthcare.
                </p>
              </TabPanel>
              <TabPanel>
                <p className="p-tab">
                  Blockchain is a decentralized and distributed digital ledger
                  technology. It's most commonly associated with
                  cryptocurrencies like Bitcoin but has broader applications.
                  Blockchain ensures transparency, security, and immutability of
                  data, making it valuable in industries such as finance, supply
                  chain management, and healthcare.
                </p>
              </TabPanel>
        
            </Tabs>
          </div>
        </section>
      </div> */
}
