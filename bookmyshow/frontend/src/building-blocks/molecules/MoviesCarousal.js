import React from "react";
import Slider from "react-slick";
import "../../assets/styles/components/movies/Movies.scss";

export default function MoviesCarousal(props) {
  return (
    <div>
      <Slider {...props.moviescarousalsettings}>
        {props.moviescaurasaldata.map((item, index) => {
          return (
            <div key={index} className="streamslickwrapper">
              <div className="slick_img_wrap">
                <img src={item.bgImg} alt="no pic" />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
