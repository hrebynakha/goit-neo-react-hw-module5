import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovie } from "../../utils/api/search";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams("");
  const query = searchParams.get("query");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (query === "") {
      return;
    }
    const fetchMovie = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const { results } = await searchMovie(query);
        if (!results) throw new Error("Not found any movies.");
        setMovies(results);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.elements.query.value) {
      setSearchParams({ query: form.elements.query.value });
    } else {
      searchParams.delete(query);
      setSearchParams(searchParams);
    }
    form.reset();
  };
  return (
    <div>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <form onSubmit={handleSubmit} className={css.form}>
        <input type="text" name="query" className={css.input} />
        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>
      {movies.length > 0 ? (
        <MovieList movies={movies} isSearch={true} />
      ) : (
        query &&
        !isLoading && <ErrorMessage msg="Not found any movie by this request" />
      )}
    </div>
  );
};

export default MoviesPage;
