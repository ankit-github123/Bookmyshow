import React from "react";
import Slider from "react-slick";
import "../../assets/styles/components/movies/Movies.scss";

function CategorySlick(props) {
  return (
    <div className="entertainment_wrapper">
      {props.entertainment.map((items,i) => {
        return (
          <div key={i} className="entertainment_container">
            <div>{items.title}</div>
            <Slider {...props.moviesentertainment}>
              {items.slides.map((item, index) => {
                return (
                  <div key={index} className="">
                    <div className="slick_img_wrap">
                      <img src={item.bg} alt="no pic" />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        );
      })}
    </div>
  );
}

export default CategorySlick;
