"use client";
import { useState } from "react";
import Image from "next/image";

const Carousel = () => {
  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);

  // Image data
  const images = [
    "/images/banner1.png",
    "/images/banner2.png",
    "/images/banner3.png",
  ];

  // Function to handle previous/next buttons
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Carousel Images */}
      <div
        className="flex transition-transform duration-500 z-[-50]"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              className="w-full"
              src={src}
              alt={`Slide ${index + 1}`}
              //   layout="fill"
              objectFit="cover"
              priority={index === currentIndex}
              width={1440}
              height={716}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg"
      >
        &#8594;
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            title="asdf"
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>

      <div className="flex z-[10]">
        <div className="flex z-[10]">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 z-[10]">
            NEW COLLECTION
          </h1>

          <p className="text-lg text-gray-600 mt-4">
            We know how large objects will act, but things on a small scale.
          </p>

          <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
