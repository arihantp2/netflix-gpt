import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_options } from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  // fetch trailer video & updating the store with trailer video data
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_options
    );

    const json = await data.json();

    const filterData = json.results?.filter(
      (video) => video.type === "Trailer"
    );

    if (!filterData) return null;

    const trailer = filterData?.length ? filterData[0] : json?.results[0];

    dispatch(addTrailerVideo(trailer.key));
    console.log(trailer);
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
