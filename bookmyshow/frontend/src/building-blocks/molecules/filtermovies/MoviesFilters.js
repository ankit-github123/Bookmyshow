import React from "react";

export default function MoviesFilters(props) {
  return (
    <div>
      <div>Movies</div>
      <div className="filteredlabel">
        {props.props.filtereddata.map((item, i) => {
          return <button key={i}>{item.label}</button>;
        })}
      </div>

      <div className="row">
        {props.props.filtersection.map((items, i) => {
          return (
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-6 filtered_data_wrapper"
              key={i}
            >
              <div
                className="moviesfilteredImg"
                style={{ backgroundImage: `url(${items.img})` }}
              >
                {items.time ? (
                  <div className="moviefiltered_time"> {items.time} </div>
                ) : null}
              </div>
              {items.label ? (
                <div className="moviefiltered_label">{items.label}</div>
              ) : null}
              {items.language ? (
                <div className="moviefiltered_language">{items.language}</div>
              ) : null}
               {items.watchOn ? (
                <div className="moviefiltered_watchon">{items.watchOn}</div>
              ) : null}
              {items.category ? (
                <div className="moviefiltered_category">{items.category}</div>
              ) : null}
              {items.rate ? (
                <div className="moviefiltered_rate">{items.rate}</div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
