import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedin, FaGlobe } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import headerbanner from "../assets/headerbanner.png";
import logo from "../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Calendar", path: "/calendar" },
    { name: "Horoscope", path: "/rashifal" },
    { name: "News", path: "/news" },
    { name: "Radios", path: "/radios" },
    { name: "Gold & Silver", path: "/gold-silver" },
    { name: "More", path: "/more" },
  ];

  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div
        className="text-white flex justify-between items-center py-2 px-5 md:px-10 lg:px-[100px]"
        style={{
          background:
            "linear-gradient(90deg,rgba(229, 45, 73, 1) 30%, rgba(245, 82, 93, 1) 61%, rgba(251, 95, 102, 1) 88%)",
        }}
      >
        <div className="flex gap-4 text-sm">
          <span className="cursor-pointer">Contact</span>
          <span className="cursor-pointer">Subscription</span>
        </div>
        <div className="flex gap-3 text-sm">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedin />
          <FaGlobe />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white text-gray-800 font-semibold py-3 px-5 md:px-10 lg:px-[100px] flex justify-between items-center relative">
        <NavLink to="/">
          <img className="h-12 w-[142px]" src={logo} alt="Logo" />
        </NavLink>

        {/* Desktop Links */}
        <nav className="hidden lg:flex gap-4 items-center">
          {links.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-1 rounded-3xl hover:bg-red-100 ${
                  isActive
                    ? "text-white font-bold bg-[#E52D49]"
                    : "text-gray-800"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <button className="hidden lg:block bg-[#E52D49] text-white py-2 px-4 rounded-3xl hover:bg-red-600 transition">
          Go To App
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col p-4 gap-2 lg:hidden z-50">
            {links.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg hover:bg-red-100 ${
                    isActive ? "text-white bg-[#E52D49]" : "text-gray-800"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <button className="bg-[#E52D49] text-white py-2 px-4 rounded-3xl mt-2">
              Go To App
            </button>
          </div>
        )}
      </div>

      {/* Optional Banner */}
      {/* 
      <section className="banner w-full mt-2">
        <div
          className="flex flex-col md:flex-row items-center gap-4 md:gap-12 px-5 md:px-10 lg:px-[100px] py-4 text-white"
          style={{
            background:
              "linear-gradient(90deg,rgba(204, 37, 37, 1) 16%, rgba(212, 77, 19, 1) 53%, rgba(222, 116, 35, 1) 88%)",
          }}
        >
          <div>
            <h2 className="text-base md:text-lg">{date}, {time}</h2>
            <p>असोज शुक्ल तृतिया</p>
            <p>पञ्चाङ्ग: एन्द्र तैतल चित्रा</p>
          </div>
          <div className="w-full md:w-[900px] h-[150px]">
            <img
              src={headerbanner}
              alt="headerbanner"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
      */}
    </header>
  );
}
