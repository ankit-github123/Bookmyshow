import React from "react";
import Slider from "react-slick";
import {
  storyslickdata,
  storyslick,
} from "../../assets/mocks/components/buzz/BuzzStory";
import "../../assets/styles/components/buzz/Buzz.scss";

function StorySlick() {
  return (
    <div className="story_slick_wrapper">
      <Slider {...storyslick}>
        {storyslickdata.map((item, index) => {
          return (
            <div key={index} className="storyslick_img_wrap">
              <div >
                <img src={item.bgImg} alt="no pic" />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default StorySlick;
