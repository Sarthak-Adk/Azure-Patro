import { NavLink } from "react-router-dom";

import { FaFacebookF, FaInstagram, FaLinkedin, FaGlobe } from "react-icons/fa";
import headerbanner from "../assets/headerbanner.png";
import logo from "../assets/logo.png";

export default function Header() {
  const links = [
  { name: "Calendar", path: "/calendar" },
  { name: "Horoscope", path: "/horoscope" },
  { name: "Paramarsha", path: "/paramarsha" },
  { name: "Blogs", path: "/blogs" },
  { name: "News", path: "/news" },
  { name: "Radios", path: "/radios" },
  { name: "Gold & Silver", path: "/gold-silver" },
  { name: "More", path: "/more" },
];

const now = new Date();

  const date = now.toLocaleDateString(); // e.g. 9/24/2025
  const time = now.toLocaleTimeString(); // e.g. 7:45:10 PM

  return (
     <>
    <header className="">
       <div className=" text-white flex justify-between items-center   py-2 
 px-[100px]"
       style={{background: "linear-gradient(90deg,rgba(229, 45, 73, 1) 30%, rgba(245, 82, 93, 1) 61%, rgba(251, 95, 102, 1) 88%)" }}
       >
        <div className="flex gap-4">
          <span className="cursor-pointer">Contact</span>
          <span className="cursor-pointer">Subscription</span>
        </div>
        <div className="flex gap-3">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedin />
          <FaGlobe />
        </div>
      </div>
    <div className="bg-white text-gray-800 font-semibold py-3 px-[100px] flex justify-between items-center ">
      <NavLink to="/"><img className="h-12 w-[142px]" src={logo} alt="" /></NavLink>
     <nav className="hidden lg:flex gap-4 mukta-regular">
  {links.map((link, i) => (
    <NavLink
      key={i}
      to={link.path}
      className={({ isActive }) =>
        ` ${isActive ? "text-white font-bold bg-[#E52D49] rounded-3xl p-1" : ""}`
      }
    >
      {link.name}
    </NavLink>
  ))}
</nav>

      <div className="text-xs">🔒 Log In</div>
      </div>
    </header>
    {/* <section className="banner">
<div
  className="w-full h-[200px] px-[100px] flex items-center gap-12 text-white text-xl"
  style={{
background: "linear-gradient(90deg,rgba(204, 37, 37, 1) 16%, rgba(212, 77, 19, 1) 53%, rgba(222, 116, 35, 1) 88%)",
  }}
>

<div>
  <h2>9 Ashoj 8082, Thursday </h2>
  <p>असोज शुक्ल तृतिया</p>
  <p>पञ्चाङ्ग: एन्द्र तैतल चित्रा</p>
  <p>Current Time:{time}</p>
  <p>Current Date:{date}</p>
</div>
<div className="h-[150px] w-[900px]">
  <img src={headerbanner} alt="headerbanner" className="h-full w-full object-cover"/>
</div>
</div>

    </section> */}
   </>
  );
}
