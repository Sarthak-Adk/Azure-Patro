import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import slider_bg from "../assets/slider_bg.jpg";
import slider_bg1 from "../assets/slider_bg1.jpg";
import slider_bg2 from "../assets/slider_bg2.jpg";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images
  const SilderImg = [slider_bg, slider_bg1, slider_bg2];

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SilderImg.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SilderImg.length) % SilderImg.length);
  };

  return (
    <div className="relative w-auto h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden rounded-2xl">
      <img
        src={SilderImg[currentIndex]}
        alt="Slider"
        className="w-full h-full  transition-all duration-500 ease-in-out"
      />

      {/* Left Button */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-2xl bg-white bg-opacity-50 text-black p-4 rounded-full"
        onClick={handlePrev}
      >
        <IoIosArrowBack />
      </button>

      {/* Right Button */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-2xl bg-white bg-opacity-50 text-black p-4 rounded-full"
        onClick={handleNext}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Slider;
