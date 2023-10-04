import "./BebidasView.css";

import PropTypes from "prop-types";

function BebidasView({ bebidas }) {
  return (
    <div className="bebidas">
      <h1>{bebidas.name}</h1>
      <h3>{bebidas.description}</h3>
      <img src={bebidas.image} alt={bebidas.name + " image"} />
    </div>
  );
}

BebidasView.propTypes = {
  bebidas: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default BebidasView;
