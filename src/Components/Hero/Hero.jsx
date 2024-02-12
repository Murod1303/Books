import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./hero.scss";

export const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container max-w-[1356px] w-full h-[347px] m-auto">
      <Slider {...settings}>
        <div className="hero__carusel  bg-lime-200">
          <h3 className="hero__title w-[337px]">Temuriylar davri adabiyoti</h3>
        </div>
        <div className="hero__carusel  bg-lime-200">
          <h3 className="hero__title w-[337px]">Jadid adabiyoti </h3>
        </div>
        <div className="hero__carusel  bg-lime-200">
          <h3 className="hero__title w-[337px]">Sovet davri </h3>
        </div>
        <div className="hero__carusel  bg-lime-200">
          <h3 className="hero__title w-[337px]">Mustaqillik davri</h3>
        </div>
      </Slider>
    </div>
  );
};
