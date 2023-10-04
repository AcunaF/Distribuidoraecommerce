import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css"; // Importa los estilos CSS

const images = [
  "https://http2.mlstatic.com/D_NQ_NP_751330-MLA71275252923_082023-O.webp",
  "https://i.pinimg.com/736x/57/64/97/576497197320649ff327d5f0baef2641.jpg",
  "https://cdn1.eldia.com/092023/1694300863138.jpg?cw=600&ch=365",
  "https://www.maxicash.es/wp-content/uploads/2017/05/02_Maxicash_SlideCategoria_Bebidas_769x325.jpg",
  "https://ofertadescuentos.com/wp-content/uploads/2017/01/Paneco-promociones-OFFDE.jpg",

  // Agrega más URLs de imágenes según sea necesario
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function ImageSlider() {
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
