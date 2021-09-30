import React from "react";
import Button from "../../building-blocks/atoms/Button";
import "../../assets/styles/common-components/Footer.scss";
export default function EventEnroll() {
  return (
    <div className="eventenroll_wrapper">
      <div className="container_wrap">
        <div className="eventenroll_container">
          <div>
            <div className="enroll_img"></div>
            <p>List your Show</p>
            <p>Got a show, event, activity or a great experience? Partner with us get listed on BookMyShow</p>
          </div>
          <Button label="Contact today"></Button>
        </div>
      </div>
    </div>
  );
}
