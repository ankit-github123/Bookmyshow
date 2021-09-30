import React from "react";
import Button from "./../../building-blocks/atoms/Button";
import { useHistory } from "react-router-dom";

function Profile() {

  const history = useHistory();
  
  const ProfileRouter = () => {
    history.push("/profile");
    window.location.reload();
  };

  return (
    <div className="auth_btn_wrapper">
      <Button
        label="Profile"
        style={{
          padding: "5px 15px",
          cursor: "pointer",
          fontSize: "12px",
          borderRadius: "3px",
          margin: "0 12px",
        }}
        onClick={ProfileRouter}
      ></Button>
    </div>
  );
}

export default Profile;
