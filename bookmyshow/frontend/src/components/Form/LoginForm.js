import React, { useState } from "react";
import { useCookies } from "react-cookie";
import validator from "validator";
import { useHistory } from "react-router-dom";
import "../../assets/styles/common-components/Form.scss";

function LoginForm({ registermodal, loginmodal }) {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(["user_token"]);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    emailerror: "",
    passworderror: "",
  });

  const InputHandler = (e) => {
    e.preventDefault();
    console.log(e.target.name, e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const ValidateRegistration = () => {
    const { email, password } = data;

    if (email) {
      let validemail = validator.isEmail(email);

      if (validemail) {
        setError({
          ...error,
          emailerror: "",
        });

        if (password) {
          ServerSubmission();
        } else {
          setError({
            ...error,
            emailerror: "",
            passworderror: "Enter password",
          });
        }
      } else {
        setError({
          ...error,
          emailerror: "Enter valid emailId",
        });
      }
    } else {
      setError({
        ...error,
        emailerror: "Enter emailId",
      });
    }
  };

  const ServerSubmission = async (e) => {
    const { email, password } = data;
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const resdata = await res.json();
    console.log(resdata, "response from login ----------------> login");

    if (res.status === 400 || !resdata) {
      window.alert(resdata.error);
      console.log(res.status);
    } else {
      window.alert("Login successful");
      if (resdata.token) {
        setCookie("user_token", resdata.token);

        loginmodal(false);
        registermodal(false);
      }
      history.push("/");
      // window.location.reload();
    }
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    ValidateRegistration(e);
  };

  const { emailerror, passworderror } = error;

  console.log(cookies, "cookies stored");
  return (
    <form
      id="login-form"
      className="login-form"
      method="POST"
      onSubmit={FormSubmit}
    >
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

      <div className="registration_btn">
        <button
          type="submit"
          className="button_default"
          // onClick={() => props.setshow(false)}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
