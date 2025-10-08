import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <footer className=" border-t border-gray-200 mt-4  text-white"
        style={{background: "linear-gradient(90deg,rgba(229, 45, 73, 1) 30%, rgba(245, 82, 93, 1) 61%, rgba(251, 95, 102, 1) 88%)",
       }}>
      <div className=" mx-[75px]  py-10 grid grid-cols-2 md:grid-cols-5 gap-10 text-sm">
        
        {/* Nepali Calendar */}
        <div>
          <h3 className="font-bold mb-3">Patro २०८२<br />NEPALI CALENDAR 2082</h3>
          <ul className="space-y-1">
            {[
              "बैशाख - Baisakh","जेठ - Jestha","असार - Ashar","साउन - Shrawan",
              "भदौ - Bhadra","असोज - Ashoj","कार्तिक - Kartik","मंसिर - Mangsir",
              "पौष - Poush","माघ - Magh","फागुन - Falgun","चैत - Chaitra"
            ].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Daily Rashifal */}
        <div>
          <h3 className="font-bold mb-3">आजको राशिफल<br />DAILY RASHIFAL</h3>
          <ul className="space-y-1">
            {[
              "मेष - Aries","वृष - Taurus","मिथुन - Gemini","कर्कट - Cancer",
              "सिंह - Leo","कन्या - Virgo","तुला - Libra","वृश्चिक - Scorpio",
              "धनु - Sagittarius","मकर - Capricorn","कुम्भ - Aquarius","मीन - Pisces"
            ].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold mb-3">सेवाहरू<br />SERVICES</h3>
          <ul className="space-y-1">
            <Link to=""><li>Calendar</li></Link>
           <Link to="" ><li>Horoscope</li></Link>
           <Link to=""><li>Blogs</li></Link>
           <Link to=""><li>Paramarsha</li></Link>
           <Link to=""><li>News</li></Link>
           <Link to=""><li>Suva Sait</li></Link>
           <Link to=""><li>Government Holidays</li></Link>
           <Link to=""><li>Subscription</li></Link>
          </ul>
        </div>

        {/* Nepali Patro */}
        <div>
          <h3 className="font-bold mb-3 ">पात्रो<br />Patro</h3>
          <ul className="space-y-1">
          <Link to=""><li>About Us</li></Link>
          <Link to=""><li>Apps</li></Link>
          <Link to=""><li>Contact</li></Link>
          <Link to=""><li>Feedback and Suggestions</li></Link>
          <Link to=""><li>Close Account</li></Link>
          </ul>

          <h3 className="font-bold mt-4">SALES & SUPPORT</h3>
          <p className="flex items-center gap-2 mt-2"><FaPhoneAlt /> +977 9876543210</p>
          <p className="flex items-center gap-2"><MdEmail /> hello@azure.com.np</p>
        </div>

        {/* Utilities */}
        <div>
          <h3 className="font-bold mb-3">युटिलिटिज<br />UTILITIES</h3>
          <ul className="space-y-1">
           <Link to=""> <li>Mac Statusbar App</li></Link>
             <Link to=""> <li>Web Widget</li></Link>
             <Link to=""> <li>Date Converter</li></Link>
             <Link to=""> <li>Gold & Silver</li></Link>
             <Link to=""> <li>Forex</li></Link>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 mt-6 py-4 text-center text-xs">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6">
          <p>Terms Of Use - Privacy Policy</p>
          <div className="flex gap-3 mt-3 md:mt-0">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10"/>
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-10"/>
          </div>
        </div>
        <p className="mt-4">Copyright © 2025 Patro - पात्रो. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
