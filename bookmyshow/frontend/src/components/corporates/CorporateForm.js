import React, { useState } from "react";
import "../../assets/styles/components/corporate/Corporate.scss";
import Button from "../../building-blocks/atoms/Button";
import { fields } from "./../../assets/mocks/components/corporate/Corporate";

function CorporateForm() {
  const [formdata, setFormdata] = useState({
    name: "",
    mobile: "",
    email: "",
    companyname: "",
  });

  const onInputChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  return (
    <div className="corporateform_wrapper">
      <div className="container_wrap">
        <div className="row corporateform_row">
          <div className="col-lg-8 col-md-6 col-sm-12 col-12 first_col">
            <div>Entertainment you can gift.</div>
            <div>
              A variety of solutions to skyrocket your business with vouchers,
              promotions, loyalty, employee recognition & rewards.
            </div>

            <div>
                <div>
                    <span>hh</span>
                    <span>Watch</span>
                </div>
                <div>
                    <span>hh</span>
                    <span>Watch</span>
                </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 second_col">
            <div className="corporate_form">
              <form>
                {fields.map((item, i) => {
                  return (
                    <div key={i}>
                      <input
                        placeholder={item.placeholder}
                        name={item.name}
                        defaultValue=""
                        onChange={(e) => onInputChange(e)}
                        autoFocus={item.name === "name" ? true : false}
                      />
                    </div>
                  );
                })}

                <Button
                  label="Receive a callback"
                  style={{
                    margin: "15px 0 10px 0",
                  }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CorporateForm;
