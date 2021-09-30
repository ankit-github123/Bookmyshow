import React from "react";
import { useHistory } from "react-router-dom";
import {
  leftsection,
  rightsection,
} from "../../assets/mocks/common-components/Headerbelow";
import "../../assets/styles/common-components/Headerbelow.scss";

export default function HeaderBelow() {
  const history = useHistory();
  const HeaderbelowRouter = (path) => {
    // window.location.reload();
    history.push(path);
    window.location.reload();
  };
  return (
    <div className="header-below_wrapper hide_mobile_responsive">
      <div>
        <div>
          <div>
            {leftsection.map((item, i) => {
              return (
                <div key={i} onClick={(e) => HeaderbelowRouter(item.link)}>
                  {item.label}
                  <sup style={{ color: "#F84464", margin: "0 2px" }}>
                    {item.sup}
                  </sup>
                </div>
              );
            })}
          </div>
          <div className="headerbelow_rightsection">
            {rightsection.map((item, i) => {
              return (
                <div key={i} onClick={(e) => HeaderbelowRouter(item.link)}>
                  {item.label}
                  <sup style={{ color: "#F84464", margin: "0 2px" }}>
                    {item.sup}
                  </sup>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
