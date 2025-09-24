const weeks = [
  ["29", "30", "31", "1", "2", "3", "4"],
  ["5", "6", "7", "8", "9", "10", "11"],
  ["12", "13", "14", "15", "16", "17", "18"],
];

const events = {
  "30": "Jitiya Parwa",
  "1": "Bishwakarma Pooja",
  "2": "Pharping Yatra",
  "3": "Constitution Day",
  "4": "Tourism Day",
  "6": "Ghatasthapana",
  "8": "Today",
  "9": "Pharmacists Day",
  "10": "Weapons Day",
};

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function CalendarGrid() {
  return (
    <div className="w-full border border-gray-200 rounded overflow-hidden">
      <div className="grid grid-cols-7 bg-gray-100 text-center text-sm font-semibold">
        {weekdays.map((day, i) => (
          <div key={i} className="py-2 border-r last:border-none">
            {day}
          </div>
        ))}
      </div>

      {weeks.map((week, i) => (
        <div key={i} className="grid grid-cols-7 text-sm text-center">
          {week.map((day, j) => {
            const isToday = day === "8";
            return (
              <div
                key={j}
                className={`border border-gray-200 p-2 h-24 flex flex-col justify-between items-center ${
                  isToday ? "bg-orange-500 text-white font-bold" : "bg-white"
                }`}
              >
                <div>{day}</div>
                <div className="text-xs">{events[day]}</div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
