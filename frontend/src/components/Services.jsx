import React from "react";

// Replace with your actual SVG/image imports
import { MdTempleHindu } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { HiCurrencyDollar } from "react-icons/hi";

const services = [
  { icon: <MdTempleHindu className="text-[#E52D49] text-2xl"/>, title: "पूजा विधि" },
  { icon: <FaCalendar className="text-[#E52D49] text-2xl"/>, title: "पात्रो" },
  { icon: <BsStars className="text-[#E52D49] text-2xl"/>, title: "राशिफल" },
  { icon: <FaArrowRightArrowLeft className="text-[#E52D49] text-2xl"/>, title: "मिति परिवर्तन" },
  { icon: <FaArrowTrendUp className="text-[#E52D49] text-2xl"/>, title: "शेयर बजार" },
  { icon: <HiCurrencyDollar className="text-[#E52D49] text-2xl"/>, title: "सुनचाँदी" },
];

export default function Services() {
  return (
    <div className="bg-white p-6  w-full">
      {/* Section Header */}
    <div className="flex justify-between items-center mb-6 lg:mx-[77px]">
  <h2 className="text-3xl font-semibold text-gray-800">
    हाम्रा <span className="text-[#E52D49]">सेवाहरू</span>
  </h2>
  <button className="flex items-center gap-1 text-sm sm:text-base text-gray-700 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition">
    सबै हेर्नुहोस् →
  </button>
</div>
      {/* Grid of Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:mx-[77px]">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center hover:cursor-pointer bg-gray-100 rounded-xl p-4 hover:shadow-md transition"
          >
            <div className="h-16 w-16 mb-2 bg-white flex items-center justify-center rounded-full">
              {service.icon}
            </div>
            <p className="text-sm font-medium text-gray-700 text-center">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
