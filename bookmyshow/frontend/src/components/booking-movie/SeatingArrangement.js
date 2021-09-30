import React from "react";
import SeatPicker from "react-seat-picker";
import "../../assets/styles/components/booking/SeatingArrangement.scss";
import { seatsdata } from "../../assets/mocks/components/booking/SeatingArrangement";
import screen from "../../assets/images/booking/seaters/screen.png";

function SeatingArrangement(props) {
  return (
    <div className="seatingarrangement_wrap">

      <div className="movie_detail_wrapper">
        movie name
      </div>
      <div className="timinginfo_wrapper">
      Today, 27 Jul, 06:30 PM
      </div>
      <SeatPicker
        rows={seatsdata}
        maxReservableSeats={props.seatnumber}
        visible
      />

      <div className="screenImg">
        <img src={screen} alt="screen" />
      </div>
      <div className="screenimg_belowtxt">All eyes this way please!</div>
     
    </div>
  );
}

export default SeatingArrangement;
