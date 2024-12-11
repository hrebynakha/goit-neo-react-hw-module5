import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { IconContext } from "react-icons";
import { GrLineChart } from "react-icons/gr";

import { getMovieReviews } from "../../utils/api/reviews";
import css from "./MovieReviews.module.css";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ToTopBtn from "../ToTopBtn/ToTopBtn";
const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const { results } = await getMovieReviews(movieId);
        setReviews(results);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);
  return (
    <div>
      <ToTopBtn />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {reviews.length > 0 ? (
        <div className={css.reviews}>
          <ul className={css.reviewsList}>
            {reviews.map((c) => {
              return (
                <li className={css.reviewItem} key={c.id}>
                  <div className={css.userInfo}>
                    <span className={css.username}>
                      @{c.author_details.username}
                    </span>
                    <span className={css.date}>
                      {formatDistanceToNow(new Date(c.created_at), {
                        addSuffix: true,
                      })}
                    </span>
                    <span className={css.rate}>
                      <IconContext.Provider
                        value={{ color: "red", size: "25px" }}
                      >
                        <GrLineChart />
                      </IconContext.Provider>
                      {c.author_details.rating || 0}
                    </span>
                  </div>
                  <p className={css.comment}>{c.content}</p>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        !isLoading && <ErrorMessage msg="Not found any reviews info" />
      )}
    </div>
  );
};

export default MovieReviews;
