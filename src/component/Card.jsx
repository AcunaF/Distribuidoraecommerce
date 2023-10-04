import "./Card.css";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

function Card({
  title = "titulo por defecto ",
  description = "descripcion por defecto",
}) {
  return (
    <div className="Card">
      <Link to={title}>
        <h2>{title}</h2>
      </Link>
      <p>{description}</p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
