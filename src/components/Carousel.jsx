import arrowRight from "../assets/carousel_right.png";
import arrowLeft from "../assets/carousel_left.png";
import { useState } from "react";
import "../style/components/carousel.scss";



const Carousel = ({ imageCarousel }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === imageCarousel.length - 1) setCurrentIndex(0);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) setCurrentIndex(imageCarousel.length - 1);
  };

  return (
    <section
      style={{ backgroundImage: `url(${imageCarousel[currentIndex]})` }} className="carousel">
      {imageCarousel.length > 1 && (
        <>
          <img
            className="carousel_arrow carousel_arrow_right"
            src={arrowRight}
            alt="show next slider"
            onClick={nextSlide}
          />
          <img
            className="carousel_arrow carousel_arrow_left"
            src={arrowLeft}
            alt="show previous slider"
            onClick={prevSlide}
          />
          <p className="slideCount">
            {currentIndex + 1} / {imageCarousel.length}
          </p>
        </>
      )}
    </section>
  );
};

export default Carousel;
