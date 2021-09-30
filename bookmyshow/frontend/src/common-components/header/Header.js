import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import Authentication from "./Authentication";
import HeaderBelow from "./Headerbelow";
import "../../assets/styles/common-components/Header.scss";
import Sidenav from "./Sidenav";
import Location from "./Location";
import Language from "./Language";
import Profile from "./Profile";

import { usertoken } from "../../actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Header({ usertoken }) {
  const [cookies] = useCookies(["user_token"]);

  //Geting last variable in url //
  var segment_str = window.location.pathname;
  var segment_array = segment_str.split("/");
  var last_varibale = segment_array.pop();

  useEffect(() => {
    usertoken(cookies.user_token);
  }, [cookies.user_token]);
  
  return (
    <div>
      <div className="header_wrapper">
        <div>
          <div>
            <div className="headerleft_wrap">
              <div className="logo_wrap"></div>
              <div className="header_search_wrapper">
                <i className="fa fa-search"></i>
                <input
                  type="text"
                  placeholder="Search for Movies, Events, Plays, Sports and Activities"
                />
              </div>
            </div>
            <div className="headerright_wrap">
              <Location />
              {last_varibale === "gift" ? <Language /> : null}
              <Authentication />

              <Profile />
              <Sidenav />
            </div>
          </div>
        </div>
      </div>
      <HeaderBelow />
    </div>
  );
}

Header.propTypes = {
  usertoken: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  usertoken,
})(Header);
