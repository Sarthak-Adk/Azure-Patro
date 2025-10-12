import React, { useState } from "react";
import mantraData from "../data/mantra";
import MantraSection from "../components/MantraSection";

const mantraItems = [
  {
    id: 1,
    title: "Morning Mantra",
    heading: "Start Your Day Right",
    description: `नैव९॥ किञ्चित्करोमीति युक्तो मन्येत तत्ववित्‌ । इन्द्रियाणीन्द्रियार्थेषु वर्तन्त इति धारयन्‌ ॥
    पश्यञ्श्रुण्वन्स्प्रशन्न्शिघ्रन्नश्नन्गच्छन्स्वपन्श्वसन्‌ ॥८॥ इन्द्रियाणीन्द्रियार्थेषु वर्तन्त इति धारयन्‌ ॥
    प्रलपन्विसृजन्गृह्णन्नुम्मिषन्निमिषन्नपि । इन्द्रियाणीन्द्रियार्थेषु वर्तन्त इति धारयन्‌ ॥
    इन्द्रियाणीन्द्रियार्थेषु वर्तन्त इति धारयन्‌ ॥
    नैव९॥ किञ्चित्करोमीति युक्तो मन्येत तत्ववित्‌ । इन्द्रियाणीन्द्रियार्थेषु वर्तन्त इति धारयन्‌ ॥
    पश्यञ्श्रुण्वन्स्प्रशन्न्शिघ्रन्नश्नन्गच्छन्स्वपन्श्वसन्‌ ॥८॥

    प्रलपन्विसृजन्गृह्णन्नुम्मिषन्निमिषन्नपि । इन्द्रियाणीन्द्रियार्थेषु वर्तन्त इति धारयन्‌ ॥
    इन्द्रियाणीन्द्रियार्थेषु वर्तन्त इति धारयन्‌ ॥
    नैव९॥ किञ्चित्करोमीति युक्तो मन्येत तत्ववित्‌ । इन्द्रियाणीन्द्रियार्थेषु वर्तन्त इति धारयन्‌ ॥
    पश्यञ्श्रुण्वन्स्प्रशन्न्शिघ्रन्नश्नन्गच्छन्स्वपन्श्वसन्‌ ॥८॥
    प्रलपन्विसृजन्गृह्णन्नुम्मिषन्निमिषन्नपि ।

    इन्द्रियाणीन्द्रियार्थेषु वर्तन्त इति धारयन्‌ ॥
    किञ्चित्करोमीति युक्तो मन्येत तत्ववित्‌ ।
    पश्यञ्श्रुण्वन्स्प्रशन्न्शिघ्रन्नश्नन्गच्छन्स्वपन्श्वसन्‌ ॥८॥
    प्रलपन्विसृजन्गृह्णन्नुम्मिषन्निमिषन्नपि ।
    इन्द्रियाणीन्द्रियार्थेषु वर्तन्त इति धारयन्‌ ॥`,
    
  },
];

const MantraPage = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4); // ✅ show 4 initially

  // ✅ Slice data based on visibleCount
  const filteredMantras = mantraData.slice(0, visibleCount);

  const handleViewMore = () => {
    // ✅ Load next 4 cards if available
    if (visibleCount < mantraData.length) {
      setVisibleCount((prev) => prev + 4);
    } else {
      // ✅ Reset to 4 if already showing all
      setVisibleCount(4);
    }
  };

  return (
    <>
      {/* --- Hero Section --- */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* --- Left Section: Text --- */}
          <div className="lg:pr-16">
            {mantraItems.map((item) => (
              <div key={item.id}>
                <h2 className="text-4xl sm:text-5xl font-sans font-normal text-gray-800 mb-2">
                  {item.title}
                </h2>

                <p className="text-xl sm:text-2xl font-normal text-[#8c001a] mb-8">
                  Consult with top Pandit from Nepal
                </p>

                <p
                  className={`text-gray-900 text-base font-bold leading-relaxed mb-3 whitespace-pre-line transition-all duration-300 ${
                    showFullText ? "" : "line-clamp-12"
                  }`}
                >
                  {item.description}
                </p>

                <button
                  onClick={() => setShowFullText(!showFullText)}
                  className="bg-red-500 hover:bg-red-800 rounded-2xl text-white font-bold py-2 px-5 cursor-pointer shadow-md transition duration-300 ease-in-out text-md tracking-wide"
                >
                  {showFullText ? "View Less" : "View More"}
                </button>
              </div>
            ))}
          </div>

          {/* --- Right Section: YouTube Video --- */}
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <div className="aspect-video relative bg-gray-900 flex items-center justify-center">
              <iframe
                className="w-full h-full rounded-xl cursor-pointer"
                src="https://www.youtube.com/embed/0XYUOYffGhw?rel=0&autoplay=0&mute=0"
                title="Hamro Jyotish Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* --- Cards Section --- */}
      <div className="flex flex-wrap justify-center gap-6 py-6 ">
        {filteredMantras.map((item) => (
          <MantraSection
            key={item.id}
            image={item.image}
            heading={item.heading}
            subheading={item.subheading}
            title={item.title}
            views={item.views}
            duration={item.duration}
          />
        ))}
          {/* --- View More / View Less Button --- */}
      <div className="flex justify-center">
        <button
          className="cursor-pointer bg-red-500 text-white font-bold py-2 px-6 mt-3 shadow-lg transition duration-300 ease-in-out text-lg tracking-wider mb-6 rounded-2xl"
          onClick={handleViewMore}
        >
          {visibleCount < mantraData.length ? "View More" : "View Less"}
        </button>
      </div>
      </div>

    
    </>
  );
};

export default MantraPage;
