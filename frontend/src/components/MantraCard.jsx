import React from "react";
import { Link } from "react-router-dom";
import mantraData from "../data/mantra"; // Make sure this data contains image, title, views, time

const MantraItemCard = ({ image, title, views, duration }) => {
  return (
    <Link to="/mantra">
      <div className="flex-shrink-0 w-[250px] sm:w-[280px] md:w-[300px] bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 sm:h-56 md:h-60 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-red-600/50 to-transparent"></div>
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center text-white px-2">
            <h2 className="text-sm sm:text-base font-semibold">{title}</h2>
          </div>
        </div>

        <div className="px-4 py-3 text-gray-800">
          <div className="flex items-center text-sm text-gray-500 mt-1 gap-2">
            <span>{views} views</span>
            <span>•</span>
            <span>{duration}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const MantraList = () => {
  return (
    <div className="relative bg-white p-5 shadow-sm font-[Mukta]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 gap-2 lg:mx-[77px]">
  <button className="bg-red-500 text-white text-lg sm:text-xl px-4 py-2 rounded-full shadow hover:bg-red-600 transition">
    मन्त्रहरू
  </button>
  <button className="flex items-center gap-1 text-sm sm:text-base text-gray-700 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition">
    सबै हेर्नुहोस् →
  </button>
</div>

      {/* Horizontal Scroll Cards */}
      <div className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-hide pb-2 lg:mx-[77px] px-2 sm:px-0">
        {mantraData.map((mantra, index) => (
          <MantraItemCard
            key={index}
            image={mantra.image}
            title={mantra.title}
            views={mantra.views}
            duration={mantra.time}
          />
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {mantraData.slice(0, 3).map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${i === 0 ? "bg-pink-600" : "bg-pink-200"}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MantraList;
