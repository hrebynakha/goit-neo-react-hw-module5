import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getMovieTrands } from "../../utils/api/trends";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [moviesTrands, setMoviesTrands] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMoviesTrands = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const { results } = await getMovieTrands();
        if (!results) throw new Error("Not found any movies.");
        setMoviesTrands(results);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesTrands();
  }, []);
  return (
    <div>
      <h1 className={css.title}> Tranding movies today </h1>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {moviesTrands.length > 0 ? (
        <MovieList movies={moviesTrands} />
      ) : (
        !isLoading && <ErrorMessage msg="Not found any trand movies..:(" />
      )}
    </div>
  );
};

export default HomePage;
