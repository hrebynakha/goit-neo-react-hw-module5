import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../utils/api/credits";
import Loader from "../Loader/Loader";
import ToTopBtn from "../ToTopBtn/ToTopBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from "./MovieCast.module.css";
const baseUrl = import.meta.env.VITE_MOVIE_IMG_BASE_URL;
const defaultImg = import.meta.env.VITE_MOVIE_IMG_DEFAULT;

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const getCast = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const { cast } = await getMovieCredits(movieId);
        setCast(cast);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getCast();
  }, [movieId]);
  return (
    <div>
      <ToTopBtn />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {cast ? (
        <div className={css.cast}>
          <ul className={css.castList}>
            {cast.map((c) => {
              return (
                <li className={css.castItem} key={c.id}>
                  <img
                    src={c.profile_path ? baseUrl + c.profile_path : defaultImg}
                    alt={c.name}
                    className={css.logo}
                  />
                  <h3 className={css.title}>{c.name}</h3>
                  <p className={css.desc}>Charter: {c.character}</p>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        !isLoading && <ErrorMessage msg="Not found any cast info" />
      )}
    </div>
  );
};

export default MovieCast;
