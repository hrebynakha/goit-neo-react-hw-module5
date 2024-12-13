import { Link } from "react-router-dom";
import css from "./BackLink.module.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

const BackLink = ({ to, children }) => {
  return (
    <Link to={to} className={css.link}>
      <IconContext.Provider value={{ color: "white", size: "25px" }}>
        <IoArrowBackCircleOutline />
      </IconContext.Provider>
      {children || "Back"}
    </Link>
  );
};

export default BackLink;
