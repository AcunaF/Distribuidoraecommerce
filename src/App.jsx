import "./App.css";
import ImageSlider from "./component/slider";
import Card from "./component/Card";
import bebidas from "./Data/bebidas";
import Navbar from "./component/Navbar";
import Footer from "./component/footer";

function App() {
  const bebidasList = bebidas.map((b, index) => {
    return (
      <Card
        key={index}
        title={b.name}
        description={b.description}
        imagen={b.image}
      />
    );
  });

  // Función para abrir WhatsApp en un nuevo tab
  const openWhatsApp = () => {
    window.open("https://wa.me/TUNUMERODEWHATSAPP");
  };

  return (
    <div className="App">
      <div className="App">
        <Navbar />
        {/* Agrega el contenido principal de tu aplicación aquí */}
      </div>
      <div className="body2">
        <div className="slider-container">
          <ImageSlider />
        </div>
        <div className="container">{bebidasList}</div>
        {/* Botón de WhatsApp con logotipo */}

        <img
          onClick={openWhatsApp}
          className="logoWhat"
          src="https://www.freepnglogos.com/uploads/whatsapp-logo-png-hd-2.png"
        />

        <Footer />
      </div>
    </div>
  );
}

export default App;
