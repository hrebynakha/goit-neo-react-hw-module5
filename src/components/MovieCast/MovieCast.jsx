import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../utils/api/credits";
import css from "./MovieCast.module.css";
const baseUrl = import.meta.env.VITE_MOVIE_IMG_BASE_URL;
const MovieCast = () => {
  const { movieId } = useParams();
  // console.log(params);
  const [cast, setCast] = useState(0);

  useEffect(() => {
    const getCast = async () => {
      try {
        const { cast } = await getMovieCredits(movieId);
        setCast(cast);
      } catch {
        console.error("oops");
      } finally {
        console.log("Done");
      }
    };
    getCast();
  }, [movieId]);
  return (
    <div>
      {cast ? (
        <div className={css.cast}>
          <ul className={css.castList}>
            {cast.map((c) => {
              return (
                <li className={css.castItem} key={c.id}>
                  <img
                    src={baseUrl + c.profile_path}
                    alt={c.name}
                    className={css.logo}
                  />
                  <h3>{c.name}</h3>
                  <p>Charter: {c.character}</p>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <h1>Not found any cast info</h1>
      )}
    </div>
  );
};

export default MovieCast;
