import { Link, Outlet } from "react-router-dom";
import css from "./MovieCard.module.css";
import MovieStatistic from "../MovieStatistic/MovieStatistic";
const baseUrl = import.meta.env.VITE_MOVIE_IMG_BASE_URL;
const defaultImg = import.meta.env.VITE_MOVIE_IMG_DEFAULT;

const MovieCard = ({ movie }) => {
  const imgUrl =
    movie.backdrop_path || movie.poster_path
      ? baseUrl + (movie.backdrop_path || movie.poster_path)
      : defaultImg;
  return (
    <div className={css.movie}>
      <div className={css.mainInfo}>
        <div className={css.logo}>
          <img src={imgUrl} alt={movie.title} className={css.img} />
          <MovieStatistic
            popularity={movie.popularity}
            average={movie.vote_average}
            count={movie.vote_count}
          />
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
      <div className={css.addInfo}>
        <div className={css.divider}>
          <h3>Additional information</h3>
        </div>

        <ul className={css.links}>
          <li>
            <Link to="cast" className={css.link}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="review" className={css.link}>
              Review
            </Link>
          </li>
        </ul>

        <Outlet />
      </div>
    </div>
  );
};

export default MovieCard;
