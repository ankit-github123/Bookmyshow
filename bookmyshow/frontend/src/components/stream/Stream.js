import React, {useEffect} from "react";
import StreamCarousal from "../../building-blocks/molecules/StreamCarousal";
import MoviesSlickComponent from "../../building-blocks/molecules/MoviesSlickComponent";
import "../../assets/styles/components/stream/Stream.scss";
import {
  settings,
  moviesdata,
} from "../../assets/mocks/components/stream/Stream";

import {
  steamcarousalsettings,
  steamcarousaldata,
} from "../../assets/mocks/components/stream/Stream";

export default function Stream() {

  useEffect(() => {
    
  }, [])

  return (
    <div className="stream_wrapper">
      <StreamCarousal
        steamcarousalsettings={steamcarousalsettings}
        steamcarousaldata={steamcarousaldata}
      />
      <div className="container_wrap">
        <MoviesSlickComponent settings={settings} moviesdata={moviesdata} />
      </div>
    </div>
  );
}
