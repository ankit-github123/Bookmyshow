import React from "react";
import Slider from "react-slick";
import "../../assets/styles/components/movies/Movies.scss";

function PremierComponent(props) {
  return (
    <div className="premier_wrapper">
      {props.premierdata.map((items, i) => {
        return (
          <div className="container_wrap" key={i}>
            <div
              className="premier_top"
              style={{ backgroundImage: `url(${items.img})` }}
            ></div>
            <div className="premier_title_wrapper">
              <div>{items.title}</div>
              <div>{items.subtitle}</div>
            </div>
            <Slider {...props.moviesentertainment}>
              {items.data.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="premier_ImgWrapper">
                      <img src={item.img} alt="img" />
                    </div>
                    <div className="premier_label">{item.label}</div>
                    <div className="premier_language">{item.language}</div>
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

export default PremierComponent;
