import { NavLink } from "react-router-dom";

import { FaFacebookF, FaInstagram, FaLinkedin, FaGlobe } from "react-icons/fa";

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


  return (
    <header className="">
       <div className="bg-red-700 text-white flex justify-between items-center  py-2 text-sm px-[100px]">
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
    <div className="bg-white text-red-600 py-3 px-[100px] flex justify-between items-center shadow-[0px_3px_5px_gray]">
      <h1 className="text-xl font-bold">Azure.Patro</h1>
     <nav className="hidden lg:flex gap-4 font-medium">
  {links.map((link, i) => (
    <NavLink
      key={i}
      to={link.path}
      className={({ isActive }) =>
        `hover:underline ${isActive ? "text-black font-bold" : ""}`
      }
    >
      {link.name}
    </NavLink>
  ))}
</nav>

      <div className="text-xs">🔒 Log In</div>
      </div>
    </header>
  );
}
