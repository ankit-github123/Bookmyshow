import React from 'react'
import "../../assets/styles/components/buzz/Buzz.scss"
import StorySlick from './StorySlick';
import LatestUpdates from './LatestUpdates';
function Buzz() {
    return (
        <div className="buzz_wrapper">
            <div className="buzz_container">
              <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                      <StorySlick />
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-0 col-0" style={{paddingLeft:"0px"}}>
                      <LatestUpdates />
                  </div>
              </div>
            </div>
        </div>
    )
}

export default Buzz
