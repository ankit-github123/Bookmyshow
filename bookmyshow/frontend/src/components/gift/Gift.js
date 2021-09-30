import React from "react";
import MoviesCarousal from "../../building-blocks/molecules/MoviesCarousal";
import {
  moviescaurasaldata,
  moviescarousalsettings,
} from "../../assets/mocks/components/gift/Carousaldata";
import GiftCardComponent from "./GiftCardComponent";

function Gift() {
  return (
    <div>
      <MoviesCarousal
        moviescaurasaldata={moviescaurasaldata}
        moviescarousalsettings={moviescarousalsettings}
      />
      <GiftCardComponent />
    </div>
  );
}

export default Gift;
