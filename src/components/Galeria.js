import React, { useState } from "react";
// import { Image } from "@nextui-org/image";
import { Button, ButtonGroup } from "@nextui-org/button";

const Galeria = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const galeriaClass = images.length === 1 ? "spanfuera" : "";

  return (
    <div
      id="gallery"
      className={`relative w-full ${galeriaClass}`}
      data-carousel="slide"
    >
      {/* <!-- Carousel wrapper --> */}
      <div className="relative h-56 overflow-hidden md:h-96 flex justify-center items-center w-full">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex justify-center items-center transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item={index === activeIndex ? "active" : ""}
          >
            <img
              src={src}
              className="object-cover  object-center rounded-2xl absolute block w-full max-w-[full] h-[80%] shadow-lg -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
        ))}
      </div>
      {/* <!-- Slider controls --> */}
      <div className="flex justify-center items-center h-auto">
      <button
        type="button"
        className="  flex items-center justify-center h-auto px-4 cursor-pointer group focus:outline-none"
      >
        <Button
          onClick={handlePrev}
          isIconOnly
          className="inline-flex items-center justify-center w-auto h-10 rounded-full bg-white/30 dark:bg-cyan-300-800/30 group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none"
        >
          <svg
            className="w-2 h-3 text-black  rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </Button>
      </button>
      <button
        type="button"
        className="  flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <Button
          isIconOnly
          onClick={handleNext}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-cyan-300-800/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
        >
          <svg
            className="w-2 h-3  dark:text-teal-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </Button>
      </button>
      </div>
     
    </div>
  );
};

export default Galeria;
