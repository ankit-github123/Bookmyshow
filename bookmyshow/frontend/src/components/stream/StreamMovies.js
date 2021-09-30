import React from "react";

import StreamCarousal from "../../building-blocks/molecules/StreamCarousal";
import "../../assets/styles/components/stream/StreamMovies.scss";

import {
  steamcarousalsettings,
  steamcarousaldata,
} from "../../assets/mocks/components/stream/Stream";

import "../../assets/styles/components/stream/StreamMovies.scss";
import {
  filtereddata,
  filtersection,
  filterdata,
} from "./../../assets/mocks/components/stream/MoviesFilters";

import FiltermoviesMain from "./../../building-blocks/organisms/filtermoviesmain/FiltermoviesMain";

export default function StreamMovies() {
  return (
    <div className="streamMovies_wrapper">
      <StreamCarousal
        steamcarousalsettings={steamcarousalsettings}
        steamcarousaldata={steamcarousaldata}
      />

      <div className="container_wrap">
        <FiltermoviesMain
          filtereddata={filtereddata}
          filtersection={filtersection}
          filterdata={filterdata}
        />
      </div>
    </div>
  );
}
