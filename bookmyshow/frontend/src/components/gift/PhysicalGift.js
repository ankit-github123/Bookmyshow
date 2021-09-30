import React from "react";
import { online, store } from "../../assets/mocks/components/gift/GiftEcard";

function PhysicalGift() {
  return (
    <div className="container_wrap">
      <div className="physicalgift_wrapper">
        <div>INTRODUCING PHYSICAL GIFT CARDS</div>
        <p>
          Gift your loved ones a range of experiences from movies to events,
          plays, concerts and sports with a BookMyShow gift card. Now pick one
          up at a store near you!! <br />
          BookMyShow Gift Cards are now available at thousands of stores at all
          major towns across India.
        </p>
        <div>Available at stores near you</div>
        {store.map((item, i) => {
          return <div key={i}></div>;
        })}

        <div>Or order online from</div>
        {online.map((item, i) => {
          return <div key={i}></div>;
        })}
      </div>
    </div>
  );
}

export default PhysicalGift;
