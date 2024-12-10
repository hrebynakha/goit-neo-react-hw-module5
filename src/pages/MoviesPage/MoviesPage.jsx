import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovie } from "../../utils/api/search";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams("");
  const query = searchParams.get("query");

  useEffect(() => {
    if (query === "") {
      console.log("query not deifned");
      return;
    }
    const fetchMovie = async () => {
      try {
        const { results } = await searchMovie(query);
        setMovies(results);
      } catch {
        console.error("oops");
      } finally {
        console.log("Done");
      }
    };
    if (query) fetchMovie();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };
  return (
    <div>
      MoviePage
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      {movies ? <MovieList movies={movies} /> : <h1>Not found any movie</h1>}
    </div>
  );
};

export default MoviesPage;
