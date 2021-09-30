import React, { useState } from "react";

function FilterAccordion(props) {
  const [active, setActive] = useState(null);

  const openAccordion = (e, id) => {
    if (active === id) {
      return setActive(null);
    }
    setActive(id);
  };

  return (
    <>
      <div>Filters</div>
      <div className="moviesfilter_wrapper">
        {props.props.filterdata.map((item, i) => {
          return (
            <div className="accordion_wrapper" key={item.id}>
              <div>
                <div onClick={(e) => openAccordion(e, i)}>
                  <div>
                    {active === i ? (
                      <i className="fa fa-angle-up"></i>
                    ) : (
                      <i className="fa fa-angle-down"></i>
                    )}
                  </div>

                  <div
                    className={
                      active === i
                        ? "accordion_title accordion_open"
                        : "accordion_title accordion_close"
                    }
                  >
                    {item.title}
                  </div>
                </div>
                <div
                  className={
                    active === i
                      ? "accordion_clear accordion_close"
                      : "accordion_clear accordion_open"
                  }
                >
                  Clear
                </div>
              </div>
              <div>
                {active === i
                  ? item.sections.map((items, id) => {
                      return (
                        <div key={id} className="accordion_data">
                          {items.label}
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FilterAccordion;
