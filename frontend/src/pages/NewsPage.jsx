import React from "react";
import newsImg from "../assets/news.jpg"; // main sample news image
import newsThumb from "../assets/news.jpg"; // thumbnail image for smaller news

export default function NewsPage() {
  const topNews = {
    title: "Government Declares Ilam a Disaster Crisis Zone",
    image: newsImg,
    content: `Kathmandu, Oct 9 — The government has declared Ilam district a disaster crisis zone after heavy landslides and floods caused severe damage. 
    Authorities are mobilizing emergency resources and rescue teams to affected regions. Local residents are being relocated to safer areas as 
    the risk of further landslides continues.`,
  };

  const moreNews = [
    {
      title: "Prime Minister to Visit Flood-Hit Areas Tomorrow",
      image: newsThumb,
      content:
        "PM will head to eastern Nepal to inspect flood damage and meet displaced families. Relief funds to be distributed soon.",
    },
    {
      title: "Nepal's Gold Reserves Reach Record High",
      image: newsThumb,
      content:
        "The Nepal Rastra Bank reported that the country's gold reserves have reached a historic milestone this quarter.",
    },
    {
      title: "Major Road Expansion Project Launched in Kathmandu",
      image: newsThumb,
      content:
        "The government announced the start of a new 4-lane road project expected to ease congestion in the capital city.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-4 lg:p-6 flex flex-col lg:flex-row gap-4 sm:gap-6">
      {/* --- Left Section: Main News --- */}
      <div className="flex-1">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-red-600 mb-3">
          आजको समाचार - Today's News
        </h1>

        {/* Featured News */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden mb-6 border border-gray-200">
          <img
            src={topNews.image}
            alt={topNews.title}
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              {topNews.title}
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {topNews.content}
            </p>
          </div>
        </div>

        {/* More News List */}
        <div className="space-y-4 sm:space-y-6">
          {moreNews.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 bg-white shadow-md rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full sm:w-48 h-40 object-cover"
              />
              <div className="p-3 sm:p-4 flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Right Sidebar: Latest News --- */}
      <aside className="w-full lg:w-1/3 bg-white p-3 sm:p-5 shadow-md rounded-xl border border-gray-200 lg:sticky lg:top-4 self-start">
        <h3 className="text-base sm:text-lg font-bold text-gray-700 mb-3">
          LATEST NEWS
        </h3>

        <div className="space-y-3 sm:space-y-4">
          {/* First News Block */}
          <div>
            <img
              src={newsImg}
              alt="Main News"
              className="rounded-lg mb-2 object-cover"
            />
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
              Govt. declares Ilam a disaster crisis zone
            </h4>
            <p className="text-gray-500 text-xs sm:text-sm">
              Kathmandu, Oct 9: The government has declared landslide and flood
              affected Ilam district as a disaster crisis zone.
            </p>
          </div>

          {/* Smaller News List */}
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-2 sm:gap-3 mt-2 sm:mt-4">
              <img
                src={newsThumb}
                alt="News Thumbnail"
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800 text-sm sm:text-base">
                  CIAA records statement from Krishna Bahadur Mahara in gold
                  smuggling case
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">17m ago</p>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
