import React, { useState } from "react";
import "../../assets/styles/components/gift/Gift.scss";
import PhysicalGift from "./PhysicalGift";
import EGiftCard from "./EGiftCard";

function GiftCardComponent() {
  const [showEGift, setshowEGift] = useState(true);
  const [showPhyGift, setshowPhyGift] = useState(false);

  const onSelectingECard = () => {
    setshowEGift(true);
    setshowPhyGift(false);
  };

  const onSelectingPhyCard = () => {
    setshowEGift(false);
    setshowPhyGift(true);
  };
  
  return (
    <div className="gift_wrapper">
      <div className="container_wrap gift_container">
        <div className="giftcardmain_tab">
          <div
            onClick={() => onSelectingECard()}
            className={showEGift ? "selectedmaintab" : "deselectedmaintab"}
          >
            E-Gift cards
          </div>
          <div
            onClick={() => onSelectingPhyCard()}
            className={showPhyGift ? "deselectedmaintab" : "selectedmaintab"}
          >
            Physical gift cards
          </div>
        </div>

      
      </div>

      {showEGift ? <EGiftCard /> : <PhysicalGift />}
    </div>
  );
}

export default GiftCardComponent;
