import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import GiftCoupoun from "./GiftCoupoun";
import { GiftEcard } from "../../assets/mocks/components/gift/GiftEcard";

function EGiftCard() {

  
  return (
    <div className="egift_wrapper container_wrap">
      <div></div>
      <div>
        <Tabs>
          <TabList>
            <Tab>All</Tab>
            <Tab>Generic</Tab>
            <Tab>Occasion</Tab>
            <Tab>Combos</Tab>
          </TabList>

          <TabPanel>
            <GiftCoupoun GiftEcard={GiftEcard} />
          </TabPanel>
          <TabPanel>
          <GiftCoupoun GiftEcard={GiftEcard} />
          </TabPanel>
          <TabPanel>
          <GiftCoupoun GiftEcard={GiftEcard} />
          </TabPanel>
          <TabPanel>
          <GiftCoupoun GiftEcard={GiftEcard} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default EGiftCard;
