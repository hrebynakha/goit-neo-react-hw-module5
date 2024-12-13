import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovie } from "../../utils/api/search";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SearchForm from "../../components/SearchForm/SearchForm";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams("");
  const query = searchParams.get("query");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
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
    if (query != null) fetchMovie();
  }, [query]);

  const handleSubmit = (value) => {
    if (value) {
      setSearchParams({ query: value });
    } else {
      searchParams.delete("query");
      setSearchParams(searchParams);
    }
  };
  return (
    <div>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <SearchForm onSubmit={handleSubmit} />
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
