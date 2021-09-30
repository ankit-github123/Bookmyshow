import React, { useState } from "react";
import "../../assets/styles/components/offer/Offer.scss";

function OfferCard(props) {
  const [show, setshow] = useState(false);

  const showApplyoffer = (index) => {
    setshow(true);
    for (let i = 0; i <= props.offerdata; i++) {
      alert("d");
      console.log(i, "i");
      if (i === index) {
        setshow(true);
      }
    }
  };
  const hideApplyoffer = (index) => {
    setshow(false);
    for (let i = 0; i <= props.offerdata; i++) {
      if (i === index) {
        setshow(false);
      }
    }
  };

  return (
    <div className="offercard_wrapper">
      <div className="container_wrap">
        <div className="offer_grid_container">
          {props.offerdata.map((item, i) => {
            return (
              <div
                className="offer_grid_item"
                key={i}
                onMouseEnter={(e) => showApplyoffer(i)}
                onMouseLeave={(e) => hideApplyoffer(i)}
              >
                <div
                  style={{ backgroundImage: `url(${item.bgImg})` }}
                  className="offermainImg"
                ></div>
                {show ? (
                  <div className="overlap_layer overlap_layer_show">
                    <div>ABOUT OFFER</div>
                    <div>{item.overlaytext}</div>
                    <div>Available for</div>
                    {/* <div>sadas</div> */}
                  </div>
                ) : null}
                <div className="offermainImg_belowWrapper">
                  <div className="offersubImg_wrapper">
                    <div
                      style={{ backgroundImage: `url(${item.img})` }}
                      className="offersubImg"
                    ></div>
                  </div>

                  <div className="bankname">{item.bank}</div>
                  <div className="validity">{item.valid}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
