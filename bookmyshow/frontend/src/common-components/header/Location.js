import React, { useState } from "react";
import { Locations } from "../../assets/mocks/common-components/Location";

import { selectedlocation } from "../../actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Location({selectedlocation}) {

  const [show, setshow] = useState(false);
  const [filtermode, setfiltermode] = useState(false);
  const [selectlocation, setselectlocation] = useState({
    location: "",
  });
  var filtereddata = [];

  const SelectedLocation = (name) => {
    setshow(false);
    setselectlocation({ ...selectlocation, location: name });
    selectedlocation(name);
  };

  const onFilteringLocation = (e) => {
    setfiltermode(true);
    filtereddata = [];
    let filterLocation = Locations.filter((location) => {
      return location.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setfiltermode(true);
    filtereddata.push(filterLocation.name);
    // setfiltereddata({...filtereddata, filterLocation});

 
    if (e.target.value.length === 0) {
      setfiltermode(false);
    }
  };

 
  return (
    <div className="location_wrapper">
      <div className="location_select" onClick={() => setshow(true)}>
        {selectlocation.location !== ""
          ? selectlocation.location
          : "Bangalore"}
      </div>
      {show ? (
        <div className="modal_overlayLayer">
          <div className="locationmodal_wrapper">
            <div>
              <input
                placeholder="Search"
                onChange={(e) => onFilteringLocation(e)}
              />
              <div className="close_modal" onClick={() => setshow(false)}>
                {" "}
                <i className="fa fa-close"></i>
              </div>
            </div>

            {!filtermode ? (
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
            ) : (
              <div>
                {filtereddata.map((item, i) => {
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
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

Location.propTypes = {
  selectedlocation: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  selectedlocation,
})(Location);
