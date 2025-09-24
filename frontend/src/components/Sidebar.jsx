 export default function Sidebar() {
  const events = [
    { title: "World Pharmacists Day", date: "Ashoj 09, 2082 - 25 Sep, 2025", tag: "Tomorrow" },
    { title: "International Nuclear Weapons Day", date: "Ashoj 10, 2082 - 26 Sep, 2025", tag: "2 Days left" },
    { title: "World Tourism Day", date: "Ashoj 11, 2082 - 27 Sep, 2025", tag: "3 Days left" },
    { title: "World Rabies Day", date: "Ashoj 12, 2082 - 28 Sep, 2025", tag: "4 Days left" },
  ];

  return (
    <aside className="w-full lg:w-80 bg-white shadow p-4 ">
      {/* Date Box */}
      <div className="bg-gray-100 rounded p-4 mb-6 text-center">
        <div className="text-3xl font-bold text-orange-600">8</div>
        <p className="text-sm">Wednesday</p>
        <p className="text-lg font-semibold mt-2">Ashoj, 2082</p>
        <p className="text-xs text-gray-500">24 September, 2025</p>
        <div className="mt-4 text-xs text-gray-600">
          <p>☀ 05:54 AM | 🌇 18:00 PM</p>
        </div>
        <button className="mt-2 bg-orange-500 text-white text-sm px-2 py-1 rounded">Today's Panchanga ⌄</button>
      </div>

      {/* Upcoming Events */}
      <h3 className="font-semibold mb-2">UPCOMING EVENTS</h3>
      <ul className="space-y-3 text-sm">
        {events.map((event, i) => (
          <li key={i} className="bg-gray-100 p-3 rounded shadow-sm">
            <div className="font-medium">{event.title}</div>
            <div className="text-xs text-gray-500">{event.date}</div>
            <div className="text-orange-600 font-semibold text-xs">{event.tag}</div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
