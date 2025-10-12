import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
      <footer className="bg-[#18191a] px-6 md:px-12 lg:px-[120px] text-white">
      {/* Top Section */}
      <div className="px-0 md:px-10 pb-12 pt-16 flex flex-col lg:flex-row justify-between gap-10 text-sm text-[#fd0d34]">
        {/* Left Section */}
        <div className="lg:w-[300px]">
          <h1 className="font-bold text-3xl pb-3">AzureDev</h1>
          <p className="text-white text-[15px] leading-relaxed">
            Maxime quaerat asperiores ab cumque labore eveniet facilis ducimus
            nemo autem aperiam. Labore eveniet facilis ducimus nemo autem
            aperiam.
          </p>
          <div className="pt-5 flex gap-4 items-center flex-wrap">
            <span className="bg-[#fd0d34] p-2 rounded-full cursor-pointer hover:scale-110 transition">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-lg text-white"
              />
            </span>
            <span className="bg-[#fd0d34] p-2 rounded-full cursor-pointer hover:scale-110 transition">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-lg text-white"
              />
            </span>
            <span className="bg-[#fd0d34] p-2 rounded-full cursor-pointer hover:scale-110 transition">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-lg text-white"
              />
            </span>
            <span className="bg-[#fd0d34] p-2 rounded-full cursor-pointer hover:scale-110 transition">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-lg text-white"
              />
            </span>
          </div>
        </div>

        {/* Middle Sections */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-16 flex-1">
          {/* Column 1 */}
          <div>
            <h4 className="font-bold text-xl mb-2">AzureDev</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="hover:underline text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:underline text-white">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="" className="hover:underline text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-bold text-xl mb-2">Our Services</h4>
            <ul className="space-y-1">
              <li>
                <Link
                  to="join/hackathon"
                  className="hover:underline text-white"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="hackathon" className="hover:underline text-white">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link to="" className="hover:underline text-white">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="" className="hover:underline text-white">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link to="" className="hover:underline text-white">
                  AI & ML
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-bold text-xl mb-2">Information</h4>
            <ul className="space-y-2 text-white text-[15px]">
              <li>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-[#A2A2A2] pr-2"
                />{" "}
                +977-9800000000
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-[#A2A2A2] pr-2"
                />{" "}
                hello@azure.com.np
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-[#A2A2A2] pr-2"
                />{" "}
                Bharatpur-10, Chitwan
              </li>
            </ul>
            <h4 className="font-bold text-xl mb-2 pt-5">Opening Hours</h4>
            <p>Sunday–Friday (10:00 - 05:00)</p>
            <p>Saturday (Closed)</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-0 md:px-10 py-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-xs text-white">
        <p className="text-center md:text-left mb-3 md:mb-0">
          © 2025 AzureDev, Inc. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="" className="hover:underline">
            Community guidelines
          </Link>
          <Link to="" className="hover:underline">
            Terms of service
          </Link>
          <Link to="" className="hover:underline">
            Security
          </Link>
          <Link to="" className="hover:underline">
            CA notice
          </Link>
          <Link to="" className="hover:underline">
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
