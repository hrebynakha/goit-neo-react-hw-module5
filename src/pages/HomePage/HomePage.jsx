import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getMovieTrands } from "../../utils/api/trends";

const HomePage = () => {
  const [moviesTrands, setMoviesTrands] = useState([]);
  useEffect(() => {
    const fetchMoviesTrands = async () => {
      try {
        const { results } = await getMovieTrands();
        setMoviesTrands(results);
      } catch {
        console.error("oops");
      } finally {
        console.log("Done");
      }
    };
    fetchMoviesTrands();
  }, [moviesTrands]);
  return (
    <div>
      <h1> Tranding movies today </h1>
      <MovieList movies={moviesTrands} />
    </div>
  );
};

export default HomePage;
