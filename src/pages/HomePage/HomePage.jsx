import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getMovieTrends } from "../../utils/api/trends";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [moviesTrends, setMoviesTrends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMoviesTrends = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const { results } = await getMovieTrends();
        if (!results) throw new Error("Not found any movies.");
        setMoviesTrends(results);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesTrends();
  }, []);
  return (
    <div>
      <h1 className={css.title}> Trending movies today </h1>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {moviesTrends.length > 0 ? (
        <MovieList movies={moviesTrends} />
      ) : (
        !isLoading && <ErrorMessage msg="Not found any Trend movies..:(" />
      )}
    </div>
  );
};

export default HomePage;
