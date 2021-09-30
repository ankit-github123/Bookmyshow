import React,{useState} from "react";
import { Locations } from "../../assets/mocks/common-components/Location";

function Language() {
  const [show, setshow] = useState(false);
  const [selectedlocation, setselectedlocation] = useState({
    location: "",
  });

  const SelectedLocation = (name) => {
    setshow(false);
    setselectedlocation({ ...selectedlocation, location: name });
  };

  return (
    <div className="location_wrapper">
      <div className="location_select" onClick={() => setshow(true)}>
        {selectedlocation.location !== ""
          ? selectedlocation.location
          : "Bangalore"}
      </div>
      {show ? (
        <div className="modal_overlayLayer">
          <div className="locationmodal_wrapper">
            <div>
            Language
              <div className="close_modal" onClick={() => setshow(false)}>
                {" "}
                <i className="fa fa-close"></i>
              </div>
            </div>

            <div>
              {Locations.map((item, i) => {
                return (
                  <div
                    key={i}
                    style={{ margin: "10px 0" }}
                    onClick={(e) => SelectedLocation(item.name)}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Language;
