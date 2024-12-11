import clsx from "clsx";
import MovieLink from "../MovieLink/MovieLink";
import css from "./MovieList.module.css";

const MovieList = ({ movies, isSearch = false }) => {
  const buildListClass = (main) => {
    return clsx(main, isSearch && css.search);
  };
  return (
    <ul className={buildListClass(css.list)}>
      {movies.map((m) => {
        return (
          <li key={m.id} className={buildListClass(css.item)}>
            <MovieLink movie={m} isSearch={isSearch} />
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
