import React from "react";
import Slider from "react-slick";
import "../../assets/styles/components/stream/Stream.scss";

export default function StreamCarousal(props) {
  return (
    <div className="stream_wrapper">
      <Slider {...props.steamcarousalsettings}>
        {props.steamcarousaldata.map((item, index) => {
          return (
            <div key={index} className="streamslickwrapper">
              <div
                className="streamBg_img"
                style={{
                  backgroundImage: `linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%),url(${item.bgimg})`,
                }}
              >
                <div className="container_wrap">
                  <div className="row carousal_container">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                      <div>
                        <img src={item.img} alt="no-img" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-4 col-sm-6 col-12">
                      <div
                        style={{ backgroundImage: `url(${item.label_img})` }}
                      ></div>
                      <div>{item.release_time}</div>
                      <div>{item.name}</div>
                      <div>
                        <div>{item.time}&nbsp;•&nbsp;</div>
                        <div>{item.type}&nbsp;•&nbsp;</div>
                        <div>{item.age}</div>
                      </div>
                      <div>{item.language}</div>
                      <div>{item.description}</div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-0 col-0"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="video_lib_wrapper">
        <div>Video Library</div>
        <div>
          <i className="fa fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
}
