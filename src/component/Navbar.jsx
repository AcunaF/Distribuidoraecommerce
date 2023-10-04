import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // Importa los íconos de "Mi cuenta" y carrito
import { FaInstagram, FaFacebook } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img
            className="logo"
            src="https://seeklogo.com/images/J/johnnie-walker-logo-A6D0D548AF-seeklogo.com.png"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/face">
              <FaInstagram /> {"Insta"}
            </Link>
          </li>
          <li>
            <Link to="/insta">
              <FaFacebook /> {"face"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-icons">
        {/* Barra de búsqueda */}
        <div className="search-container">
          <input type="text" placeholder="Buscar" className="search-bar" />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/Inicio">Inicio</Link>
          </li>
          <li>
            <Link to="/cuenta">Mi cuenta</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
