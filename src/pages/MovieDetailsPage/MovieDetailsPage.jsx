import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getMovieDetail } from "../../utils/api/details";
import MovieCard from "../../components/MovieCard/MovieCard";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import BackLink from "../../components/BackLink/BackLink";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  const back = useRef(location.state ?? "/movies");
  useEffect(() => {
    const getMovie = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const res = await getMovieDetail(movieId);
        setMovie(res);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, [movieId]);
  return (
    <div>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <BackLink to={back.current} />
      {movie ? <MovieCard movie={movie} /> : !isLoading && <ErrorMessage />}
    </div>
  );
};

export default MovieDetailsPage;
