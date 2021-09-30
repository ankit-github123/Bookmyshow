import React, { useState } from "react";
import validator from "validator";
import { useHistory } from "react-router-dom";
import "../../assets/styles/common-components/Form.scss";


function RegistrationForm( registermodal ) {
  const history = useHistory();

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    phone: "",
  });

  const [error, setError] = useState({
    usernameerror: "",
    emailerror: "",
    passworderror: "",
    confirmpassworderror: "",
    phoneerror: "",
  });

  const InputHandler = (e) => {
    e.preventDefault();
    console.log(e.target.name, e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const ValidateRegistration = () => {
    const { username, email, password, confirmpassword, phone } = data;

    if (username) {
      if (email) {
        let validemail = validator.isEmail(email);

        if (validemail) {
          setError({
            ...error,
            emailerror: "",
          });

          if (password) {
            if (confirmpassword) {
              if (validator.equals(password, confirmpassword)) {
                if (phone) {
                  let isValidPhoneNumber = validator.isMobilePhone(phone);
                  if (isValidPhoneNumber) {
                    setError({
                      ...error,
                      phoneerror: "",
                      confirmpassworderror: "",
                      passworderror: "",
                      emailerror: "",
                      usernameerror: "",
                    });
                    ServerSubmission();
                  } else {
                    setError({
                      ...error,
                      phoneerror: "Please enter a valid phone number",
                    });
                  }
                } else {
                  setError({
                    ...error,
                    phoneerror: "Please enter your phone number",
                    confirmpassworderror: "",
                    passworderror: "",
                    emailerror: "",
                    usernameerror: "",
                  });
                }
              } else {
                setError({
                  ...error,
                  confirmpassworderror:
                    "Password and confirm password do not match",
                  passworderror: "",
                  emailerror: "",
                  usernameerror: "",
                });
              }
            } else {
              setError({
                ...error,
                confirmpassworderror: "Please enter your confirmpassword",
                passworderror: "",
                emailerror: "",
                usernameerror: "",
              });
            }
          } else {
            setError({
              ...error,
              passworderror: "Please enter your password",
              emailerror: "",
              usernameerror: "",
            });
          }
        } else {
          setError({
            ...error,
            emailerror: "Please enter a valid email",
          });
        }
      } else {
        setError({
          ...error,
          emailerror: "Please enter your email",
          usernameerror: "",
        });
      }
    } else {
      setError({ ...error, usernameerror: "Please enter your name" });
    }
  };

  const ServerSubmission = async (e) => {
    const { username, email, password, confirmpassword, phone } = data;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        email: email,
        password: password,
        confirmpassword: confirmpassword,
        phone: phone,
      }),
    });

    const resdata = await res.json();
    console.log(resdata, "response from registration api");
    if (res.status === 422 || !resdata) {
      window.alert(resdata.error);
      console.log(res.status);
    } else {
      window.alert("Registration successful");
      registermodal(false);
      console.log(resdata.status);
      history.push("/");
    }
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    ValidateRegistration(e);
  };

  const {
    usernameerror,
    emailerror,
    passworderror,
    confirmpassworderror,
    phoneerror,
  } = error;

  return (
    <form
      id="registration-form"
      className="registration-form"
      method="POST"
      onSubmit={FormSubmit}
    >
      <div>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="username"
          defaultValue={data.username}
          onChange={(e) => InputHandler(e)}
          autoFocus
        />
        <br />
        {usernameerror ? <div className="errormsg">{usernameerror}</div> : null}
      </div>
      <div>
        <label>Email</label>
        <br />
        <input
          type="text"
          name="email"
          defaultValue={data.email}
          onChange={(e) => InputHandler(e)}
        />{" "}
        <br />
        {emailerror ? <div className="errormsg">{emailerror}</div> : null}
      </div>
      <div>
        <label>Password</label>
        <br />
        <input
          type="text"
          name="password"
          defaultValue={data.password}
          onChange={(e) => InputHandler(e)}
        />{" "}
        <br />
        {passworderror ? <div className="errormsg">{passworderror}</div> : null}
      </div>
      <div>
        <label>Confirm Password</label>
        <br />
        <input
          type="text"
          name="confirmpassword"
          defaultValue={data.confirmpassword}
          onChange={(e) => InputHandler(e)}
        />{" "}
        <br />
        {confirmpassworderror ? (
          <div className="errormsg">{confirmpassworderror}</div>
        ) : null}
      </div>
      <div>
        <label>Phone</label>
        <br />
        <input
          type="text"
          name="phone"
          defaultValue={data.phone}
          onChange={(e) => InputHandler(e)}
        />{" "}
        <br />
        {phoneerror ? <div className="errormsg">{phoneerror}</div> : null}
      </div>
      <div className="registration_btn">
        <button
          type="submit"
          className="button_default"
          // onClick={() => props.setshowregistration(false)}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default RegistrationForm;
