import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import css from "./MovieLink.module.css";
import MovieStatistic from "../MovieStatistic/MovieStatistic";

const MovieLink = ({ movie, isSearch }) => {
  const location = useLocation();
  const buildLinkClass = (main) => {
    return clsx(main, isSearch && css.search);
  };
  const target = "/movies/" + movie.id;
  return (
    <Link to={target} state={location} className={buildLinkClass(css.link)}>
      <div className={css.name}>
        <span>{movie.title}</span>
        <span>{movie.release_date.substring(0, 4)}</span>
      </div>
      <MovieStatistic
        popularity={movie.popularity}
        average={movie.vote_average}
        count={movie.vote_count}
        color="red"
      />
    </Link>
  );
};

export default MovieLink;
