import React from "react";

// Replace with your actual SVG/image imports
import { MdTempleHindu } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { HiCurrencyDollar } from "react-icons/hi";

const services = [
  { icon: <MdTempleHindu className="text-[#E52D49] size-8"/>, title: "पूजा विधि" },
  { icon: <FaCalendar className="text-[#E52D49] size-8"/>, title: "पात्रो" },
  { icon: <BsStars className="text-[#E52D49] size-8"/>, title: "राशिफल" },
  { icon: <FaArrowRightArrowLeft className="text-[#E52D49] size-8"/>, title: "मिति परिवर्तन" },
  { icon: <FaArrowTrendUp className="text-[#E52D49] size-8"/>, title: "शेयर बजार" },
  { icon: <HiCurrencyDollar className="text-[#E52D49] size-8"/>, title: "सुनचाँदी" },
];


export default function Services() {
  return (
    <>
    <div className="bg-white p-6 rounded-xl shadow-md w-full mt-3 ">
      {/* Section Header */}

        <h2 className="text-3xl font-semibold text-gray-800 mb-3 text-center">
           हाम्रा <span className="text-[#E52D49]"> सेवाहरू</span>
        </h2>

      {/* Grid of Cards */}
      <div className="grid grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center hover:cursor-pointer bg-gray-100 rounded-xl p-4 hover:shadow-md transition"
          >
          <div className="h-18 w-18 mb-2 bg-white flex items-center justify-center rounded-full">
            {service.icon}
          </div>
            <p className="text-sm font-medium text-gray-700">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
