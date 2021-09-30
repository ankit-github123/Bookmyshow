import React from "react";
import { Link } from "react-router-dom";

function MoviesPrivacy() {
  return (
    <div className="privacy_wrapper">
      <div></div>
      <div className="container_wrap">
        <div>Privacy Note</div>
        <div>
          By using www.bookmyshow.com(our website), you are fully accepting the
          Privacy Policy available at{" "}
          <Link to="/">https://bookmyshow.com/</Link> governing your access to
          Bookmyshow and provision of services by Bookmyshow to you. If you do
          not accept terms mentioned in the <Link to="/">Privacy Policy</Link>,
          you must not share any of your personal information and immediately
          exit Bookmyshow.
        </div>
      </div>
    </div>
  );
}

export default MoviesPrivacy;
