import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SeconndaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SeconndaryContainer />
    </div>
  );
};

export default Browse;
