import React from "react";

// Assuming these paths are correct, they should be imported here.
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import event3 from "../assets/event3.jpg";
import event4 from "../assets/event4.jpg";

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

const MantraItemCard = ({ image, title, views, time }) => {
  return (
   <div className="flex-shrink-0 w-60 bg-red-100 rounded-2xl shadow p-4 hover:shadow-lg transition-all duration-300">
  <img
    src={image}
    alt={title}
    className="w-full h-32 object-cover rounded-lg mb-3"
  />
  <p className="text-sm font-semibold truncate">{title}</p>
  <div className="flex items-center text-xs text-gray-500 space-x-2 mt-1">
    <span>{views}K views</span>
    <span>•</span>
    <span>{time}</span>
  </div>
</div>

  );
};
const MantraList = () => {
  return (
    <div className="relative mx-[78px] bg-white p-5 rounded-2xl shadow-sm font-[Mukta] mt-4">
  {/* Header */}
  <div className="flex justify-between items-center mb-4">
    <button className="bg-red-500 text-white text-xl px-4 py-1 rounded-full shadow hover:bg-red-600 transition">
      मन्त्रहरू
    </button>
    <button className="flex items-center gap-1 text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition">
      सबै हेर्नुहोस् →
    </button>
  </div>

  {/* Horizontal Scroll Cards */}
  <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-2">
    {mantras.map((mantra, index) => (
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
    {mantras.slice(0, 4).map((_, i) => (
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
