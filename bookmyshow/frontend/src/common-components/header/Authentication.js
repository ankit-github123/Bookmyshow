import React from "react";
import Button from "./../../building-blocks/atoms/Button";
import RegistrationForm from "./../../components/Form/RegistrationForm";
import LoginForm from "./../../components/Form/LoginForm";

import { loginmodal, registermodal } from "../../actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Authentication({
  registermodal,
  loginmodal,
  auth: { loginmodel, registermodel },
}) {
  const closeRegistration = (e) => registermodal(false);

  const openRegistration = (e) => registermodal(true);

  const closeLogin = (e) => {
    loginmodal(false);
    closeRegistration();
  };

  const openLogin = (e) => {
    loginmodal(true);
    closeRegistration();
  };

  const newAccount = () => {
    loginmodal(false);
    registermodal(true);
  };

  return (
    <div className="auth_btn_wrapper">
      <Button
        label="Sign In"
        style={{
          padding: "5px 15px",
          cursor: "pointer",
          fontSize: "12px",
          borderRadius: "3px",
          margin: "0 12px",
        }}
        onClick={openRegistration}
      ></Button>

      {registermodel & !loginmodel ? (
        <div className="modal_overlayLayer">
          <div className="authmodal_wrapper">
            <div>
              REGISTRATION FORM
              <div className="close_modal" onClick={closeRegistration}>
                {" "}
                <i className="fa fa-close"></i>
              </div>
            </div>
            <RegistrationForm registermodals={registermodal}/>
            <div onClick={() => openLogin()} className="form_route_text">
              Already have an account ? <b>LOGIN</b>
            </div>
          </div>
        </div>
      ) : null}

      {loginmodel ? (
        <div className="modal_overlayLayer">
          <div className="authmodal_wrapper">
            <div>
              LOGIN FORM
              <div className="close_modal" onClick={closeLogin}>
                {" "}
                <i className="fa fa-close"></i>
              </div>
            </div>
            <LoginForm registermodal={registermodal} loginmodal={loginmodal}/>
            <div onClick={() => newAccount()} className="form_route_text">
              New Account ? <b>SIGNUP</b>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

Authentication.propTypes = {
  loginmodal: PropTypes.func.isRequired,
  registermodal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  loginmodal,
  registermodal,
})(Authentication);
