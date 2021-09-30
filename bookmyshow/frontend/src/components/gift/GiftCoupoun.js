import React from "react";

function GiftCoupoun(props) {

  console.log(props.GiftEcard,"hhhhhhhhhhhhhhhhhh")

  return (
    <div className="row">
      {props.GiftEcard.map((item, i) => {
        return (
          <div className="col-lg-3 col-md-4 col-sm-12 col-12" key={i}>
            <div style={{ backgroundImage: `url(${item.img})` }} className="giftcoupun_img"></div>
          </div>
        );
      })}
    </div>
  );
}

export default GiftCoupoun;
