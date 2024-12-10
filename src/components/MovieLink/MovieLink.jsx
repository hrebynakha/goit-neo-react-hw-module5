import { Link } from "react-router-dom";

const MovieLink = ({ movie }) => {
  const target = "/movies/" + movie.id;
  return <Link to={target}>{movie.title}</Link>;
};

export default MovieLink;
