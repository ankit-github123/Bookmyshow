import React from "react";
import "../../assets/styles/components/booking/SeatsCount.scss";
import Button from "../../building-blocks/atoms/Button";
import { seatcount } from "../../assets/mocks/components/booking/SeatsCount";
import seat1 from "../../assets/images/booking/seaters//seat1.png";

function SeatsCount(props) {

  // const showSeatImg = (item) => {
  //   console.log(item, "dddddddddddddd");
  // };

  // const showdefaultImg = () => {};

  const SeatingArrangementRoute = () => {
    props.setshowseat(false);
  }


  const SeatingNumber = (number) => {
    props.setseatnumber(number)
  }

  return (
    <div className="seatscount_wrapper">
      <div className="imgwrap">
        <img src={seat1} alt="img" />
      </div>
      <div className="count_wrap">
        {seatcount.map((item, i) => {
          var number = i + 1;
          return (
            <div
              key={i}
              // onMouseEnter={(e) => showSeatImg(item)}
              // onMouseLeave={(e) => showdefaultImg()}
              onClick={() =>SeatingNumber(number)}
            >
              {i + 1}
            </div>
          );
        })}
      </div>

      <div className="category">Gold</div>
      <div className="category_cost">Rs. 99.00</div>
      <div className="category_Availibility">Available</div>

      <Button
        label="Select Seats"
        style={{ width: "100%", borderRadius: "10px" }}
        onClick={SeatingArrangementRoute}
      />
      
    </div>
  );
}

export default SeatsCount;
