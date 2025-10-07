export default function Sidebar() {
  const events = [
    { title: "World Pharmacists Day", month: "असोज", date: 9, tag: "Tomorrow" },
    {
      title: "International Nuclear Weapons Day",
      month: "असोज",
      date: 10,
      tag: "2 Days left",
    },
    { title: "World Tourism Day", month: "असोज", date: 11, tag: "3 Days left" },
    { title: "World Rabies Day", month: "असोज", date: 12, tag: "4 Days left" },
  ];

  return (
    <aside className="w-full lg:w-80 bg-white mr-2 rounded-2xl shadow p-4 ">
      {/* Date Box */}
      <div className="max-w-md mx-auto bg-red-600 rounded-xl shadow-md overflow-hidden flex items-center p-4 text-sm">
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center text-white  px-4">
          <span className="text-sm font-semibold">असोज</span>
          <span className="text-2xl font-bold">९</span>
        </div>

        {/* Divider */}
        <div className="w-[4px] bg-white mx-4 h-18"></div>

        {/* Right Section */}
        <div className="flex flex-col">
          <span className=" font-medium text-white">
            असोज ९, २०८२ | 25 Sep, 2025
          </span>
          <span className=" text-white">
            विश्व फार्मासिस्ट दिवस ( World Pharmacists Day )
          </span>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className=" rounded p-3 mt-3">
        <h3 className=" mb-2 ">UPCOMING EVENTS</h3>
        <ul className="space-y-3 ">
          {events.map((event, i) => (
            <li key={i} className=" p-3 rounded-2xl bg-gray-100 ">
              <div className="flex gap-3 items-center">
                <div className="flex flex-col items-center text-red-600 p-3 border rounded-full bg-white border-white ">
                  <div>{event.month}</div>
                  <div>{event.date}</div>
                </div>
                <div>
                  <div className=" text-sm">{event.title}</div>
                
                  <div className=" text-red-400 text-sm mt-1">
                    {event.tag}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
