// Footer.js
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="#"></a>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#">Términos y condiciones</a>
            </li>
            <li>
              <a href="#">Política de privacidad</a>
            </li>
            <li>
              <a href="#">Aviso legal</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Facudevs. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}

export default Footer;
