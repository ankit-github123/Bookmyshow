import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import Cookies from 'js-cookie'
import { useHistory } from "react-router-dom";
import Button from "../../building-blocks/atoms/Button";

function ProfilePage() {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(["user_token"]);
  var token = cookies.user_token;
  const callProfile = async () => {
    try {
      const res = await fetch("/profiledata", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        credentials: "include",
      });

      console.log(res, "eeeeeeeeeeeeeeeeeeeeeeewwwwwwwwwwwwww");
      const data = await res.json();
      console.log(data, "profile data");
      if (res.status === 200) {
        console.log("status successful");
      } else {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err, "hhhhhhhh");
      history.push("/");
      //   window.location.reload();
    }
  };

  const Logout = () => {
    Cookies.remove('name',{ path: '' })

  };





  useEffect(() => {
    callProfile();
    Cookies.set('name', 'value', { path: '' })

  });

  return (
    <div>
      <form method="GET">
        <div>hjhbjhhhhhhhhh</div> 

        <Button label="LOGOUT" onClick={() => Logout} />
      </form>
    </div>
  );
}

export default ProfilePage;
