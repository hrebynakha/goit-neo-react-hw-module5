import { IconContext } from "react-icons";
import { GrLineChart } from "react-icons/gr";
import { LuChartColumn } from "react-icons/lu";
import { MdHowToVote } from "react-icons/md";

import css from "./MovieStatistic.module.css";

const MovieStatistic = ({
  popularity,
  average,
  count,
  color = "green",
  size = "25px",
}) => {
  return (
    <div className={css.stat}>
      <IconContext.Provider value={{ color, size }}>
        <GrLineChart /> {Math.round(popularity)}
      </IconContext.Provider>
      <IconContext.Provider value={{ color, size }}>
        <LuChartColumn /> {Math.round(average)}
      </IconContext.Provider>
      <IconContext.Provider value={{ color, size }}>
        <MdHowToVote />
        {Math.round(count)}
      </IconContext.Provider>
    </div>
  );
};

export default MovieStatistic;
