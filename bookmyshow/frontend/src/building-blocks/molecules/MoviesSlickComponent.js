import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../../assets/styles/components/stream/Stream.scss";

function MoviesSlickComponent(props) {
  return (
   props.moviesdata.map((items, i) => {
        return (
          <div key={i} className="stream_slick_container">
            <div  className="stream_title_wrapper">
              <div className="stream_title">{items.title}</div>
              <div className="stream_seeAll">
                {items.screens.length >= 10 ? (
                  <Link
                    to="/stream-movies"
                    style={{ cursor: "pointer" }}
                  >
                    See All
                  </Link>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <Slider {...props.settings}>
              {items.screens.map((item, index) => {
                return (
                  <div key={index} className="streamslickwrapper">
                    <div className="slick_img_wrap">
                      <img src={item.img} alt="no pic" />
                    </div>
                    <div>{item.label}</div>
                    <div>{item.language}</div>
                  </div>
                );
              })}
            </Slider>
          </div>
        );
      })
  );
}

export default MoviesSlickComponent;
