import React from "react";

const CalendarHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center p-4 border-b">
      <div className="text-2xl font-bold">Ashoj 2082 | Sep/Oct 2025</div>
      <div className="flex lg:space-x-4 space-x-0 mt-2 md:mt-0">
        <button className="px-2 py-1 border rounded hover:bg-gray-100 cursor-pointer">B.S.</button>
        <button className="px-2 py-1 border rounded hover:bg-gray-100 cursor-pointer ">◀</button>
        <button className="px-2 py-1 border rounded hover:bg-gray-100 cursor-pointer">Current Month</button>
        <button className="px-2 py-1 border rounded hover:bg-gray-100 cursor-pointer">▶</button>
        <button className="px-2 py-1 border rounded hover:bg-gray-100 cursor-pointer">Select Year and Month</button>
      </div>
    </div>
  );
};

export default CalendarHeader;
