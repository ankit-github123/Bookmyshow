import React, { useState } from "react";
import Button from "../../building-blocks/atoms/Button";
import SeatsCount from "./SeatsCount";
import "../../assets/styles/common-components/Header.scss";
import SeatingArrangement from "./SeatingArrangement";

function BookingMovie() {
  const [showseat, setshowseat] = useState(true);
  const [seatnumber, setseatnumber] = useState(1);
  const close = () => {
    setshowseat(false);
  
  };

  return (
    <div>
      <Button label="choose seat" onClick={() => setshowseat(true)} />
      {showseat ? (
        <div className="modal_overlayLayer">
          <div className="authmodal_wrapper">
            <div>
            How many seats ?
              <div className="close_modal" onClick={close}>
                <i className="fa fa-close"></i>
              </div>
            </div>
            <SeatsCount setshowseat={setshowseat} showseat={showseat} setseatnumber={setseatnumber}/>
          </div>
        </div>
      ) : null}

      <SeatingArrangement seatnumber={seatnumber}/>
    </div>
  );
}

export default BookingMovie;
