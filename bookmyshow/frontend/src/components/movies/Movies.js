import React from "react";
import MoviesCarousal from "../../building-blocks/molecules/MoviesCarousal";
import MoviesSlickComponent from "../../building-blocks/molecules/MoviesSlickComponent";
import CategorySlick from "../../building-blocks/molecules/CategorySlick";
import MoviesPrivacy from "./MoviesPrivacy";
import PremierComponent from "../../building-blocks/molecules/PremierComponent";

import {
  moviesentertainment,
  premierdata,
} from "../../assets/mocks/components/movies/MoviesSlider";
import {
  settings,
  moviesdata,
} from "../../assets/mocks/components/stream/Stream";
import { entertainment } from "../../assets/mocks/components/movies/MoviesSlider";
import {
  moviescaurasaldata,
  moviescarousalsettings,
} from "../../assets/mocks/components/movies/Carousaldata";

function Movies() {
  return (
    <div>
      <MoviesCarousal
        moviescaurasaldata={moviescaurasaldata}
        moviescarousalsettings={moviescarousalsettings}
      />
      <div className="movies_main_wrapper">
        <div className="container_wrap movies_main_container">
          <div className="advertise_banner"></div>
          <CategorySlick
            entertainment={entertainment}
            moviesentertainment={moviesentertainment}
          />
        </div>
        <PremierComponent
          moviesentertainment={moviesentertainment}
          premierdata={premierdata}
        />
        <div className="container_wrap">
          <MoviesSlickComponent settings={settings} moviesdata={moviesdata} />
        </div>
      </div>
      <MoviesPrivacy />
    </div>
  );
}

export default Movies;
