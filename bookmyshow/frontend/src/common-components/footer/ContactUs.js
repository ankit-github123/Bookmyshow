import React from "react";
import "../../assets/styles/common-components/Footer.scss";
import contact1 from "../../assets/images/common/footer/contact1.png";
import contact2 from "../../assets/images/common/footer/contact2.png";
import contact3 from "../../assets/images/common/footer/contact3.png";

const data = [
  {
    img: contact1,
  },
  {
    img: contact2,
  },
  {
    img: contact3,
  },
];
export default function ContactUs() {
  return (
    <div className="contact_wrapper">
      <div className="container">
        <div className="contact_container">
          {data.map((item, i) => {
            return (
              <div
                className="contactImg"
                style={{ backgroundImage: `url(${item.img})` }}
                key={i}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
