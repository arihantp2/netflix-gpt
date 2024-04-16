import React from "react";
import { API_options } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();

  // fetch trailer video & updating the store with trailer video data
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_options
    );

    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");

    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer.key));
    console.log(trailer);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerVideo}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
