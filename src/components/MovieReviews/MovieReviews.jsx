import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../utils/api/reviews";

import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(0);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const { results } = await getMovieReviews(movieId);
        setReviews(results);
      } catch {
        console.error("oops");
      } finally {
        console.log("Done");
      }
    };
    getReviews();
  }, [movieId]);
  return (
    <div>
      {reviews ? (
        <div className={css.reviews}>
          <ul className={css.reviewsList}>
            {reviews.map((c) => {
              return (
                <li className={css.reviewItem} key={c.id}>
                  <h3>{c.author}</h3>
                  <p>Content: {c.content}</p>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <h1>Not found any reviews info</h1>
      )}
    </div>
  );
};

export default MovieReviews;
