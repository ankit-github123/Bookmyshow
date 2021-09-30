import React from "react";
import OfferCard from "./OfferCard";
import {
  offerdata,
  offercategoryicons,
} from "../../assets/mocks/components/offers/Offer";

function Offer() {
  return (
    <div className="offer_wrapper">
      <div className="offer_search_wrapper">
        <div className="offer_search">
          <input
            className="offersearch_filter"
            placeholder="Search for Offers by Name or Bank"
          />
          <i className="fa fa-search"></i>
        </div>
      </div>
      <div className="filter_heading">Filter offers by</div>
      <div className="offercategory_wrapper">
        {offercategoryicons.map((item, i) => {
          return (
            <div className="offercategory_container">
              <div className="offercategory">
                <i className={item.icon}></i>
              </div>
              <div className="offercategory_label">{item.label}</div>
            </div>
          );
        })}
      </div>
      <OfferCard offerdata={offerdata} />
    </div>
  );
}

export default Offer;
