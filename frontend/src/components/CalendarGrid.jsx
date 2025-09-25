import React from "react";
import { calendarData } from "../data/events";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const CalendarGrid = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-7 border-b text-center font-semibold text-gray-700">
        {days.map((day) => (
          <div key={day} className="py-2 border">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 text-sm">
        {[...Array(30)].map((_, idx) => {
          const data = calendarData.find((d) => d.day === idx + 1);

          return (
            <div
              key={idx}
              className={`min-h-[100px] p-2 border text-left space-y-1 ${
                data?.highlight ? "bg-green-800 text-white " : ""
              }`}
            >
              <div className="text-lg font-bold">{idx + 1}</div>
              {data?.tithi && <div className="text-xs italic text-white">{data.tithi}</div>}
              {data?.events?.map((event, i) => (
                <div key={i} className="text-xs">{event}</div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;
