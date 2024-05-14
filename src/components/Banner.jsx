import { useState } from 'react';
import './Banner.css';

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      imgSrc: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Food 1',
    },
    {
      id: 2,
      imgSrc: 'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Food 2',
    },
    {
      id: 3,
      imgSrc: 'https://images.unsplash.com/photo-1503767849114-976b67568b02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Food 3',
    },
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="carousel-root max-w-[1240px] mx-auto relative">
        <div className="carousel carousel-slider">
          <button
            type="button"
            aria-label="previous slide / item"
            className="control-arrow control-prev"
            onClick={prevSlide}
          >
            &#9664;
          </button>
          <div className="slider-wrapper axis-horizontal overflow-hidden">
            <ul
              className="slider animated flex transition-transform duration-350"
              style={{
                transform: `translate3d(-${currentSlide * 100}%, 0, 0)`,
              }}
            >
              {slides.map((slide) => (
                <li key={slide.id} className="slide flex-shrink-0 w-full">
                  <div className="max-w-[1240px] mx-auto p-4">
                    <div className="max-h-[500px] relative">
                      <div className="absolute w-full h-full max-h-[500px] bg-black/40 text-gray-200 flex flex-col justify-center">
                        <h1 className="px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify">
                          The <span className="text-orange-500">Best</span>
                        </h1>
                        <h1 className="px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify">
                          <span className="text-orange-500">Foods</span> Delivered
                        </h1>
                      </div>
                      <img
                        className="w-full max-h-[500px] object-cover"
                        src={slide.imgSrc}
                        alt={slide.alt}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            aria-label="next slide / item"
            className="control-arrow control-next"
            onClick={nextSlide}
          >
            &#9654;
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;
