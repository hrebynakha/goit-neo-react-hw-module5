import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../../utils/api/details";
import MovieCard from "../../components/MovieCard/MovieCard";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(0);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await getMovieDetail(movieId);
        setMovie(res);
      } catch {
        console.error("oops");
      } finally {
        console.log("Done");
      }
    };
    getMovie();
  }, [movieId]);
  return <div>{movie ? <MovieCard movie={movie} /> : <h1>Not fouund</h1>}</div>;
};

export default MovieDetailsPage;
