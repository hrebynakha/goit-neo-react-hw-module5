import { Link, Outlet } from "react-router-dom";
import css from "./MovieCard.module.css";
const baseUrl = import.meta.env.VITE_MOVIE_IMG_BASE_URL;

const MovieCard = ({ movie }) => {
  const imgUrl = baseUrl + movie.backdrop_path;
  return (
    <div className={css.movie}>
      <div className={css.mainInfo}>
        <div className={css.logo}>
          <img src={imgUrl} alt="ss" />
        </div>
        <div className={css.info}>
          <h1 className={css.title}>
            {movie.title} ({movie.release_date.substring(0, 4)})
          </h1>
          <span className={css.score}>{movie.title}</span>
          <h2>Overview</h2>
          <p className={css.overview}>{movie.overview}</p>
          <h2>Genres</h2>
          {movie.genres.map((j) => j.name + " ")}
        </div>
      </div>
      <hr></hr>
      <div className={css.addInfo}>
        <h3>Additional information</h3>
        <ul className={css.links}>
          <li className={css.link}>
            <Link to="cast">Cast</Link>
          </li>
          <li className={css.link}>
            <Link to="review">Review</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieCard;
