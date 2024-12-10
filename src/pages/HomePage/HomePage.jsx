import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getTrands } from "../../utils/api/trends";

const HomePage = () => {
  const [trandsMovies, setTrandsMovies] = useState([]);
  useEffect(() => {
    const fetchTrandsMovies = async () => {
      try {
        const { results } = await getTrands();
        setTrandsMovies(results);
      } catch {
        console.error("oops");
      } finally {
        console.log("Done");
      }
    };
    fetchTrandsMovies();
  }, [trandsMovies]);
  return (
    <div>
      <h1> Tranding movies today </h1>
      <MovieList movies={trandsMovies} />
    </div>
  );
};

export default HomePage;
