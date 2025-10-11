import React from "react";
import { FaFire, FaLeaf, FaGem, FaMoon } from "react-icons/fa"; // sample zodiac icons
import news from "../assets/news.jpg"; // sample news image
import ariesImg from "../assets/rashifal/aries.jpg";
import taurusImg from "../assets/rashifal/taurus.jpg";
import geminiImg from "../assets/rashifal/gemini.jpg";
import cancerImg from "../assets/rashifal/cancer.jpg";
import leoImg from "../assets/rashifal/leo.jpg";
import virgoImg from "../assets/rashifal/virgo.jpg";
import libraImg from "../assets/rashifal/libra.jpg";
import scorpioImg from "../assets/rashifal/scorpio.jpg";
import sagittariusImg from "../assets/rashifal/sagittarius.jpg";
import capricornImg from "../assets/rashifal/capricorn.jpg";
import aquariusImg from "../assets/rashifal/aquarius.jpg";
import piscesImg from "../assets/rashifal/pisces.jpg";

export default function Rashifal() {
  const horoscopes = [
    {
      sign: "मेष - ARIES",
      img: ariesImg,
      date: "चु, चे, चो, ला, लि, लु, ले, लो, अ",
      content: `You will have the opportunity to participate in fun gatherings. 
      The results of your hard work will boost your confidence. Special opportunities 
      will bring happiness, and the support of colleagues will create enthusiasm in your work. 
      You will meet distinguished people, and you may receive attractive gifts. 
      You will enjoy fun gatherings. New work opportunities will bring encouragement.`,
    },
    {
      sign: "वृष - TAURUS",
      img: taurusImg,
      date: "इ, उ, ए, ओ, वा, वि, वु, वे, वो",
      content: `You may have to give up something to gain something. 
      It is time to try for travel and tours. Distant friends will support you in your work. 
      Repeated attempts will complete the stalled work. Even if there is a lack of money, 
      you will be able to raise money through loans when needed. However, expenses will increase, 
      and laziness will cause you to lag behind. You will have the opportunity to increase investment.`,
    },
    {
      sign: "मिथुन - GEMINI",
      img: geminiImg,
      date: "का, कि, कु, घ, ङ, छ, के, को, ह",
      content: `Work-related stress may increase but support from family will keep you balanced.
      Avoid unnecessary disputes and focus on completing old projects.`,
    },
    {
      sign: "कर्क - CANCER",
      img: cancerImg,
      date: "हि, हु, हे, हो, ड, डा, डि, डु, डे",
      content: `Financial improvements are likely. You’ll receive recognition at work.
      A long-standing issue will find resolution. A good day to plan ahead.`,
    },
     {
      sign: "मिथुन - GEMINI",
      img: geminiImg,
      date: "का, कि, कु, घ, ङ, छ, के, को, ह",
      content: `Work-related stress may increase but support from family will keep you balanced.
      Avoid unnecessary disputes and focus on completing old projects.`,
    },
    {
      sign: "कर्क - CANCER",
      img: cancerImg,
      date: "हि, हु, हे, हो, ड, डा, डि, डु, डे",
      content: `Financial improvements are likely. You’ll receive recognition at work.
      A long-standing issue will find resolution. A good day to plan ahead.`,
    },
     {
      sign: "वृष - TAURUS",
      img: taurusImg,
      date: "इ, उ, ए, ओ, वा, वि, वु, वे, वो",
      content: `You may have to give up something to gain something. 
      It is time to try for travel and tours. Distant friends will support you in your work. 
      Repeated attempts will complete the stalled work. Even if there is a lack of money, 
      you will be able to raise money through loans when needed. However, expenses will increase, 
      and laziness will cause you to lag behind. You will have the opportunity to increase investment.`,
    },
     {
      sign: "वृष - TAURUS",
      img: taurusImg,
      date: "इ, उ, ए, ओ, वा, वि, वु, वे, वो",
      content: `You may have to give up something to gain something. 
      It is time to try for travel and tours. Distant friends will support you in your work. 
      Repeated attempts will complete the stalled work. Even if there is a lack of money, 
      you will be able to raise money through loans when needed. However, expenses will increase, 
      and laziness will cause you to lag behind. You will have the opportunity to increase investment.`,
    },
    
  ];

  
  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-4 lg:p-6 flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-6">
      {/* Left Section */}
      <div className="flex-1">
        <h1 className="text-2xl sm:text-3xl font-bold text-red-600 mb-1 sm:mb-2">
          आजको राशिफल - Today's Horoscope
        </h1>
        <p className="text-gray-700 text-sm sm:text-base mb-1">
          Thursday, October 9, 2025, Ashoj 23, 2082. Kartik Krishna Paksha Tritiya
          Tithi. Bharani Nakshatra. Moon in Aries.
        </p>
        <p className="text-gray-500 text-xs sm:text-sm mb-3">
          Deputy Prof. Lakshmi Prasad Baral (Astrologer)
        </p>

        {/* Horoscope Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {horoscopes.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-3 sm:p-5 rounded-xl border border-gray-200 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <img src={item.img} alt={item.sign} className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg" />
                <h2 className="text-lg sm:text-xl font-bold text-red-600">{item.sign}</h2>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm mb-1 sm:mb-2">{item.date}</p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Section */}
      <aside className="w-full lg:w-1/3 bg-white p-3 sm:p-5 shadow-md rounded-xl border border-gray-200 lg:sticky lg:top-4 self-start">
        <h3 className="text-base sm:text-lg font-bold text-gray-700 mb-2 sm:mb-3">LATEST NEWS</h3>
        <div className="space-y-3 sm:space-y-4">
          <div>
            <img src={news} alt="Meeting" className="rounded-lg mb-1 sm:mb-2" />
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
              Govt. declares Ilam a disaster crisis zone
            </h4>
            <p className="text-gray-500 text-xs sm:text-sm">
              Kathmandu, Oct 9: The government has declared landslide and flood most
              affected Ilam district as a disaster crisis zone.
            </p>
          </div>

          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-2 sm:gap-3 mt-2 sm:mt-4">
              <img src={news} alt="News" className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover" />
              <div>
                <p className="font-semibold text-gray-800 text-sm sm:text-base">
                  CIAA records statement from Krishna Bahadur Mahara in gold smuggling case
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