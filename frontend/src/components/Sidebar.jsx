import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import event3 from "../assets/event3.jpg";
import event4 from "../assets/event4.jpg";

export default function Sidebar() {
  const events = [
    {
      title: "महानवमी व्रत",
      description: "नवरात्रिको नवौं दिन",
      category: "देवता पूजा",
      time: "30 मिनेट",
      type: "धार्मिक",
      image: event1,
    },
    {
      title: "विजया दशमी टिका २०८२",
      description:
        "यस वर्ष विजयादशमीको उत्तम साईत असोज १६ गते बिहान ११:५१ बजे रहेको छ।",
      category: "चाडपर्व",
      time: "1 मिनेट",
      type: "संस्कृति",
      image: event2,
    },
    {
      title: "शयन विधि",
      description:
        "सफल स्वास्थ्य र स्वस्थ जीवनको चाहना गर्ने मान्छेहरुले राति समयमा...",
      category: "दैनिक पूजा",
      time: "0 मिनेट",
      type: "धार्मिक",
      image: event3,
    },
    //   {
    //     title: "गणेश पूजा",
    //     description:
    //       "गणेश पूजा हिन्दू धर्ममा सबैभन्दा प्रमुख र प्रारम्भिक पूजा मानिन्छ।",
    //     category: "देवता पूजा",
    //     time: "20 मिनेट",
    //     type: "धार्मिक",
    //     image: event4
    // },
  ];
  return (
    <aside className="w-full lg:w-[420px] bg-white rounded-2xl shadow p-4 mr-3">
      {/* Date Box */}
      <div
        className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden flex items-center p-4 text-sm mb-4"
        style={{
          background:
            "linear-gradient(90deg, rgba(229,45,73,1) 30%, rgba(245,82,93,1) 61%, rgba(251,95,102,1) 88%)",
        }}
      >
        <div className="flex flex-col items-center justify-center text-white px-4">
          <span className="text-sm font-semibold">मंगलबार</span>
          <span className="text-2xl font-bold">९</span>
        </div>

        <div className="w-[4px] bg-white mx-4 h-18"></div>

        <div className="flex flex-col">
          <span className="font-medium text-white">
            असोज ९, २०८२ | 25 Sep, 2025
          </span>
          <span className="text-white">
            विश्व फार्मासिस्ट दिवस ( World Pharmacists Day )
          </span>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="rounded p-3">
        <h3 className="mb-4 font-semibold text-gray-700">आगामी कार्यक्रमहरू</h3>
        <ul className="space-y-4">
          {events.map((event, i) => (
            <li
              key={i}
              className="flex gap-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 w-full"
            >
              {/* Image */}
              <div className="flex-shrink-0 w-24 h-22 rounded-xl overflow-hidden m-3">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between py-3 pr-3 flex-1">
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">
                    {event.title}
                  </h4>
                  <p className="text-gray-600 text-xs mt-1 line-clamp-2">
                    {event.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2 text-xs">
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full">
                    {event.category}
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {event.type}
                  </span>
                  <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded-full">
                    {event.time}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
