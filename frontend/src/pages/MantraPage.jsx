import React, { use, useState } from "react";
import mantraData from "../data/mantra";
import FestivalCard from "../components/FestivalCard"; // ✅ Make sure this file exists

const MantraPage = () => {
  const [viewAllClicked, setViewAllClicked] = useState(false);
  const filteredMantras = viewAllClicked ? mantraData : mantraData.slice(0, 4);
  return (
    <>
      {/* --- Hero Section --- */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* --- Left Section: Text --- */}
          <div className="lg:pr-16">
            <h1 className="text-4xl sm:text-5xl font-sans font-normal text-gray-800 mb-2">
              Introducing <span className="font-semibold">Hamro Jyotish</span>
            </h1>

            <p className="text-xl sm:text-2xl font-normal text-[#8c001a] mb-8">
              Consult with top jyotish from Nepal
            </p>

            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Talk to the best <strong>Jyotishes (Vedic astrologers)</strong> and{" "}
              <strong>Vastu experts</strong> from Nepal on live audio/video call and
              get instant astrology consultation. Accurate astrology predictions and
              solutions from Nepal's top and verified Jyotish on your favorite{" "}
              <strong>Hamro Patro</strong> app. Get remedy recommendations on your{" "}
              <strong>Graha/Dasha</strong>. Join <strong>10,000 others</strong> who
              benefited from live consultation on Hamro Jyotish Sewa.
            </p>

            <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-12 rounded shadow-lg transition duration-300 ease-in-out text-lg tracking-wider">
              BUY TICKET
            </button>

            <p className="text-gray-500 text-sm mt-3">
              Affordable. Private. Secure.
            </p>
          </div>

          {/* --- Right Section: Image Mockup --- */}
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <div className="aspect-video relative bg-gray-900 flex items-center justify-center">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/hamro-jyotish-mockup-image.jpg')", // Replace with your actual image
                }}
              >
                {/* Overlay Text */}
                <div className="absolute top-1/4 left-1/4 transform -translate-x-1/4 text-white text-3xl font-bold p-2 bg-black bg-opacity-40 rounded">
                  हाम्रो पात्रो ज्योतिष
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-600 hover:bg-red-700 p-4 rounded-full cursor-pointer shadow-lg transition duration-300">
                    <svg
                      className="h-10 w-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14zM16 8v8l-6-4 6-4z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                  </div>
                </div>

                {/* Logo */}
                <div className="absolute top-4 left-4 flex items-center bg-white px-2 py-1 rounded-full text-sm font-semibold text-red-600">
                  <span className="mr-1">🔴</span>
                  HAMRO JYOTISH
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Cards Section --- */}
      <div className="flex flex-wrap justify-center gap-6 py-6 bg-white">
        {filteredMantras.map((item) => (
          <FestivalCard
            key={item.id}
            image={item.image}
            heading={item.heading}
            subheading={item.subheading}
            title={item.title}
            views={item.views}
            duration={item.duration}
          />
        ))}
      </div>
      <div className="flex justify-center">
      <button className="cursor-pointer  bg-red-500 text-white font-bold py-2 px-6 mt-3 shadow-lg transition
       duration-300 ease-in-out text-lg tracking-wider mb-6 rounded-2xl" onClick={() => setViewAllClicked(!viewAllClicked)}>
        {viewAllClicked? <span onClick={() => setViewAllClicked(false)}>View Less</span>:<span onClick={() => setViewAllClicked(true)}>View More</span>}
      </button>
      </div>
    </>
  );
};

export default MantraPage;
