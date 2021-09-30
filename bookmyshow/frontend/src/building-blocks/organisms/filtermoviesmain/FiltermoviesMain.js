import React from "react";
import FilterAccordion from "../../molecules/filtermovies/FilterAccordion";
import MoviesFilters from "../../molecules/filtermovies/MoviesFilters";
import "../../../assets/styles/components/stream/StreamMovies.scss";

function FiltermoviesMain(props) {
  return (
    <div className="row streamfilter_container">
      <div className="col-lg-3 col-md-3 col-sm-12 col-12 filter_section">
        <FilterAccordion props={props} />
      </div>
      <div className="col-lg-9 col-md-9 col-sm-12 col-12 filtered_section">
        <MoviesFilters props={props} />
      </div>
    </div>
  );
}

export default FiltermoviesMain;
