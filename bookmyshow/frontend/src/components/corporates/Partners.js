import React from "react";
import "../../assets/styles/components/corporate/Corporate.scss";
import {
  businesssuit,
  partners,
} from "../../assets/mocks/components/corporate/Corporate";
import Button from "../../building-blocks/atoms/Button";
import AlternateCards from "./AlternateCards";

function Partners() {
  return (
    <div className="partner_wrapper">
      <div>OUR PARTNERS</div>
      <div className="partnercompanies_wrapper">
        {partners.map((item) => {
          return (
            <div>
              <img src={item.img} alt="img" />
            </div>
          );
        })}
      </div>
      <div className="total_partners">
        <div className="container_wrap">
          <AlternateCards />
        </div>
      </div>
      <div className="businss_suit">
        <div className="container_wrap">
          <div className="row">OUR SUITE OF BUSINESS SOLUTIONS:</div>
          <div className="row">
            {businesssuit.map((item) => {
              return (
                <div
                  style={{ backgroundImage: `url(${item.bg_img})` }}
                  className="col-lg-4 col-md-4 col-sm-4 col-4 business_suit_img"
                >
                  <div style={{ color: item.color }}>{item.label}</div>
                </div>
              );
            })}
          </div>
          <div className="row">
            <div>
              Get priority support from the experts in the entertainment
              industry.
            </div>
            <Button label="Access the complete suite" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
