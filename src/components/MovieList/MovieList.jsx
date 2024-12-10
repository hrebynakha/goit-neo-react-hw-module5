import MovieLink from "../MovieLink/MovieLink";

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((m) => {
        return (
          <li key={m.id}>
            <MovieLink movie={m} />
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
