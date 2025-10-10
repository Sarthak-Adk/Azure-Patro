import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// Image imports
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
import { Link } from "react-router-dom";
const rashifalData = [
  {
    link: "/rashifal/aries",
    nameNepali: "मेष राशि",
    nameEnglish: "Aries",
    img: ariesImg,
    desc: "नयाँ अवसर र सम्भावनाले उत्साह बढाउनेछ। आज नयाँ कार्यको सुरुवात गर्न शुभ दिन छ। आत्मविश्वासले सफलता दिलाउनेछ।",
  },
  {
    link: "/rashifal/taurus",
    nameNepali: "वृष राशि",
    nameEnglish: "Taurus",
    img: taurusImg,
    desc: "कुटुम्बमा खुशी छाउनेछ। व्यापारमा फाइदा र आर्थिक सुधारको संकेत छ।",
  },
  {
    link: "/rashifal/gemini",
    nameNepali: "मिथुन राशि",
    nameEnglish: "Gemini",
    img: geminiImg,
    desc: "सफलताले हिम्मत दिलाउनेछ। प्रयासका काममा जग बसाउने मौका छ।",
  },
  {
    link: "/rashifal/cancer",
    nameNepali: "कर्कट राशि",
    nameEnglish: "Cancer",
    img: cancerImg,
    desc: "परिवारमा सुख शान्ति रहनेछ। नयाँ सम्पर्कले फाइदा दिलाउनेछ।",
  },
  {
    link: "/rashifal/leo",
    nameNepali: "सिंह राशि",
    nameEnglish: "Leo",
    img: leoImg,
    desc: "आत्मविश्वास बढ्नेछ। सामाजिक सम्मान प्राप्त हुने सम्भावना छ।",
  },
  {
    link: "/rashifal/virgo",
    nameNepali: "कन्या राशि",
    nameEnglish: "Virgo",
    img: virgoImg,
    desc: "परिश्रमको उचित परिणाम प्राप्त हुनेछ। नयाँ योजना सफल हुनेछ।",
  },
  {
    link: "/rashifal/libra",
    nameNepali: "तुला राशि",
    nameEnglish: "Libra",
    img: libraImg,
    desc: "मान–प्रतिष्ठा बढ्नेछ। प्रेम र सम्बन्धमा आत्मीयता बढ्नेछ।",
  },
  {
    link: "/rashifal/scorpio",
    nameNepali: "वृश्चिक राशि",
    nameEnglish: "Scorpio",
    img: scorpioImg,
    desc: "अध्ययन वा अनुसन्धानमा मन जानेछ। आत्मबल बढ्नेछ।",
  },
  {
    link: "/rashifal/sagittarius",
    nameNepali: "धनु राशि",
    nameEnglish: "Sagittarius",
    img: sagittariusImg,
    desc: "विदेश वा नयाँ अवसरका लागि समय शुभ छ। यात्राबाट लाभ हुनेछ।",
  },
  {
    link: "/rashifal/capricorn",
    nameNepali: "मकर राशि",
    nameEnglish: "Capricorn",
    img: capricornImg,
    desc: "आर्थिक स्थितिमा सुधार आउनेछ। कार्यस्थलमा प्रशंसा पाइनेछ।",
  },
  {
    link: "/rashifal/aquarius",
    nameNepali: "कुम्भ राशि",
    nameEnglish: "Aquarius",
    img: aquariusImg,
    desc: "नयाँ मित्रता र सम्बन्धले सहयोग पुर्‍याउनेछ। योजना सफल हुनेछ।",
  },
  {
    link: "/rashifal/pisces",
    nameNepali: "मीन राशि",
    nameEnglish: "Pisces",
    img: piscesImg,
    desc: "धार्मिक कार्यमा मन लाग्नेछ। पारिवारिक सुख र सहयोग प्राप्त हुनेछ।",
  },
];


export default function RashifalCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 3 < rashifalData.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleCards = rashifalData.slice(currentIndex, currentIndex + 3);

  return (
    <div className="relative  bg-white p-5  font-[Mukta] mt-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4  lg:mx-[77px]">
        <button className="bg-red-500 text-white text-xl px-4 py-1 rounded-full shadow hover:bg-red-600 transition">
          आजको राशिफल
        </button>
      <Link to="/rashifal"> <button className="flex items-center gap-1 text-sm cursor-pointer text-gray-700 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition">
          सबै राशिफल हेर्नुहोस् <ChevronRight size={16} />
        </button></Link>
      </div>

      {/* Cards */}
      <div className="flex gap-5  lg:mx-[77px]">
       {visibleCards.map((rashi, i) => (
  <Link
    to={rashi.link}
    key={i}
    className="w-full max-w-[32%] bg-color cursor-pointer rounded-2xl shadow p-4 hover:shadow-lg transition no-underline"
  >
    <div className="flex flex-col items-center text-center">
      <img
        src={rashi.img}
        alt={rashi.nameEnglish}
        className="w-18 h-18 object-cover border-white mb-2 rounded-full p-2 bg-white"
      />
      <h2 className="text-base font-bold text-black">
        {rashi.nameNepali}{" "}
        <span className="text-black">({rashi.nameEnglish})</span>
      </h2>
    </div>

    <div className="bg-white text-sm rounded-xl p-3 text-justify mt-3">
      <p className="text-red-600 text-sm">आजको राशिफल:</p>
      <p className="text-gray-700 line-clamp-3 h-[56px]">{rashi.desc}</p>
      <button className="text-red-600 text-sm mt-2 hover:cursor-pointer">
        सबै पढ्न क्लिक गर्नुहोस्
      </button>
    </div>
  </Link>
))}

      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="text-2xl bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition disabled:opacity-30"
          disabled={currentIndex === 0}
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={handleNext}
          className="text-2xl bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition disabled:opacity-30"
          disabled={currentIndex + 3 >= rashifalData.length}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
