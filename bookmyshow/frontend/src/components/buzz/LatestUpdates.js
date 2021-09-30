import React from "react";
import app1 from "../../assets/images/buzz/app1.png";
import app2 from "../../assets/images/buzz/app2.png";

const categories = [
  { label: `Movies` },
  { label: `Events` },
  { label: `City Guide` },
  { label: `Sports` },
  { label: `Streaming` },
  { label: `Music` },
];

const app = [{ img: app1 }, { img: app2 }];

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

function LatestUpdates() {
  return (
    <div>
      <div className="latestupdates_wrapper">
        <div className="latestupdates_top">
          <div className="latestupdates_heading">BookMyShow Buzz</div>
          <div className="latestupdates_data">
            Get the latest updates on movies, series, online events to stream
            and more with curated recommendations.
          </div>
        </div>

        <div className="latestupdates_top">
          <div className="latestupdates_heading">Popular categories</div>
          <div className="latestupdate_category">
            {categories.map((item, i) => {
              return <div key={i}>{item.label}</div>;
            })}
          </div>
        </div>

        <div className="latestupdates_top">
          <div className="latestupdates_heading">Get the app experience</div>

          {app.map((item, i) => {
            return (
              <div className="latestupdates_app" key={i}>
                <img src={item.img} alt="img" />
              </div>
            );
          })}
        </div>

        <div className="latestupdates_top">
          <div className="row" style={{ justifyContent: "space-around" }}>
            {socialsite.map((item) => {
              return <i className={item.icon}></i>;
            })}
          </div>
        </div>
      </div>
      <div className="latestupdates_copywritres">
        © Bigtree Entertainment Pvt. Ltd.
      </div>
    </div>
  );
}

export default LatestUpdates;
