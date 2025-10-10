import React, { useState } from "react";

// Assuming these paths are correct, they should be imported here.
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import event3 from "../assets/event3.jpg";
import event4 from "../assets/event4.jpg";
import { Link } from "react-router-dom";
import mantraData from "../data/mantra";

// --- Data ---
const mantras = [
  { image: event1, title: "शिवको आराधना मन्त्र", views: 3, time: "2 Min" },
  { image: event2, title: "गणेश वन्दना मन्त्र", views: 5, time: "1 Min" },
  { image: event3, title: "हनुमान चालीसा", views: 10, time: "3 Min" },
  { image: event4, title: "सूर्य नमस्कार मन्त्र", views: 6, time: "1 Min" },
  { image: event1, title: "दुर्गा मन्त्र", views: 8, time: "2 Min" },
  { image: event2, title: "गणेश वन्दना मन्त्र", views: 5, time: "1 Min" },
  { image: event3, title: "हनुमान चालीसा", views: 10, time: "3 Min" },
  { image: event4, title: "सूर्य नमस्कार मन्त्र", views: 6, time: "1 Min" }, // Changed title to differentiate
];

const MantraItemCard = ({ image, heading, subheading, title, views, duration }) => {
  
  return (
 <Link to="/mantra">
    <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden w-[300px]">
      <div className="relative">
        <img src={image}
        alt={heading}
        className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-red-600/60 to-transparent"></div>
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center text-white">
          <h2 className="text-lg font-semibold">{subheading}</h2>
          <h1 className="text-3xl font-bold tracking-wide">{heading}</h1>
        </div>
      </div>

      <div className="px-4 py-3 text-gray-800">
        <p className="font-medium text-[15px]">{title}</p>
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
    <div className="relative  bg-white p-5 rounded-2xl shadow-sm font-[Mukta]">
  {/* Header */}
  <div className="flex justify-between items-center mb-4 lg:mx-[77px]">
    <button className="bg-red-500 text-white text-xl px-4 py-1 rounded-full shadow hover:bg-red-600 transition">
      मन्त्रहरू
    </button>
    <button className="flex items-center gap-1 text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition">
      सबै हेर्नुहोस् →
    </button>
  </div>

  {/* Horizontal Scroll Cards */}
  <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-2 lg:mx-[77px]">
    {mantraData.map((mantra, index) => (
     <MantraItemCard
        key={index}
        image={mantra.image}
        title={mantra.title}
        views={mantra.views}
        time={mantra.time}
      />
    ))}
  </div>

  {/* Pagination Dots */}
  <div className="flex justify-center mt-4 space-x-2">
    {mantras.slice(0, 3).map((_, i) => (
      <span
        key={i}
        className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-pink-600' : 'bg-pink-200'}`}
      ></span>
    ))}
  </div>
</div>

  );
};

export default MantraList; 
