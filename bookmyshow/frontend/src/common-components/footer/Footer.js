import React from "react";
import EventEnroll from "./EventEnroll";
import ContactUs from "./ContactUs";

const socialsite = [
  {
    icon: "fa fa-facebook",
  },
  {
    icon: "fa fa-twitter",
  },
  {
    icon: "fa fa-instagram",
  },
  {
    icon: "fa fa-youtube",
  },
  {
    icon: "fa fa-pinterest",
  },
  {
    icon: "fa fa-linkedin",
  },
];
export default function Footer() {
  return (
    <div className="footer_wrapper">
      <EventEnroll />
      <ContactUs />

      <div className="footer_divider">
        <div></div>
        <div className="logo"></div>
        <div></div>
      </div>

      <div className="footer_social_site">
        {socialsite.map((item, i) => {
          return (
            <div key={i}>
              <i className={item.icon}></i>
            </div>
          );
        })}
      </div>

      <div className="copywrite_section">
          <div>Copyright 2021 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</div>
          <div>The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</div>
      </div>
    </div>
  );
}
