import React from "react";
import Button from "../../building-blocks/atoms/Button";

function Checkout() {
  const getData = async (data) => {
    return await fetch("http://localhost:3001/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  const makePayment = () => {
    getData({ amount: 500, email: "abc@gmail.com" }).then((response) => {
      var information = {
        action: "",
        params: response,
      };

      console.log(response, information);
      //    post(information)
    });
  };

  return (
    <div style={{ height: "100vh" }}>
      <div> checkout page</div>
      <Button label="PAY USING PAYTM" onClick={makePayment} />
    </div>
  );
}

export default Checkout;
