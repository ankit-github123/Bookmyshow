import React from "react";
import "../../assets/styles/components/corporate/AlternateCard.scss";
import { partnerscards } from "../../assets/mocks/components/corporate/Corporate";

function AlternateCards() {
  return (
    <div class="card-group partner_cards_wrap">
      {partnerscards.map((item, i) => {
        return (
          <div class="partner_card" key={i}>
            <div class="card-img-body">
              <img
                class="card-img"
                src={item.bg_img}
                alt={i}
              />
            </div>
            <div class="card-body">
                {item.titletop ? <div>{item.titletop}</div> : <div></div>}
                <div>{item.title}</div>
                <div>{item.text}</div>
                <div>{item.btnlabel }</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AlternateCards;
