import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Sidenav() {
  const history = useHistory();

  const [show, setshow] = useState(false);

  const RouterCheckout = () => {
    history.push("/checkout");
    window.location.reload();
  };

  const RouterBooking = () => {
    history.push("/booking");
    window.location.reload();
  };

  return (
    <div className="sidenav_wrapper">
      <div className="hamberger_wrapper" onClick={() => setshow(!show)}>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {show ? (
        <div className="menunav">
          <div onClick={RouterCheckout}>Checkout</div>
          <div onClick={RouterBooking}>Bookings</div>
        </div>
      ) : null}
    </div>
  );
}

export default Sidenav;
