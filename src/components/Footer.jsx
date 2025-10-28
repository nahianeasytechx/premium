import React from "react";
import {
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
  Apple,
  PlayCircle,
  MessageCircle,
  ChevronUp,
} from "lucide-react";
import { IoLocation } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0d3d2d] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Contact Section */}
          <div className="space-y-6">
            <div className="flex  lg:justify-center items-center space-x-2">
              {/* <div className="w-10 h-10 bg-emerald-600 rounded flex items-center justify-center">
                <div className="text-white font-bold text-xs">TPH</div>
              </div> */}
              <div className="text-emerald-500 text-xs font-semibold">
                <img
                  src="/src/assets/logo/white.png"
                  alt=""
                  className="w-50 lg:w-full"
                />
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Projects</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-emerald-500 transition-colors"
                >
                  The Premium Green Valley
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-emerald-500 transition-colors"
                >
                  The Premium Glory Garden
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-emerald-500 transition-colors"
                >
                  The Premium Green Haven
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-emerald-500 transition-colors"
                >
                  The Premium Floral Haven
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-emerald-500 transition-colors"
                >
                  The Premium Harmony Residence
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-emerald-500 hover:text-emerald-400 transition-colors font-semibold"
                >
                  View All
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-emerald-500 transition-colors"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-emerald-500 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-emerald-500 transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-emerald-500 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-emerald-500 transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <div>
              <h3 className="text-white font-semibold mb-3">Contact Us</h3>
              <a
                href="tel:09617777000"
                className="flex text-white hover:text-emerald-300 transition-colors"
              >
              <span><IoIosCall className="mt-1"/></span>  09617777000
              </a>
              <br />

              <a
                href=""
                className="text-white hover:text-emerald-300 transition-colors"
              >
               
              </a>
            </div>
<br />
            {/* Location Section */}
            <div>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center space-x-3 text-white hover:text-emerald-300 transition-colors"
                >
                  <div className="text-sm">
                    <h3 className="flex font-semibold text-gray-200">
                                           <span>
                        {" "}
                        <IoLocation className=" text-base" />
                      </span>
                      Corporate Office:{" "}

                    </h3>
                    <div className=" text-xs ">
                      Land View Commercial Center, 9th Floor 28 Gulshan North
                      C/A, Gulshan Circle-2 ,DHaka
                    </div>
                  </div>
                </a>

              </div>
              <br />
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center space-x-3 text-white hover:text-emerald-300 transition-colors"
                >
                  <div className="text-sm">
                    <h3 className="flex font-semibold text-gray-200">
                                           <span>
                        {" "}
                        <IoLocation className=" text-base" />
                      </span>
                      Site Office:{" "}

                    </h3>
                    <div className=" text-xs ">
                      2nd & 3rd Floor, Tokyo Plaza,Ashulia Model Town Khagan Bazar,Dhaka
                      C/A, Gulshan Circle-2 ,Dhaka
                    </div>
                  </div>
                </a>

              </div>
            </div>
<br />
            {/* Social Media */}
            <div>
              <h3 className="text-white font-semibold mb-4">
                Follow us on social media
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-emerald-500 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-emerald-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-emerald-500 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-emerald-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-sm text-center sm:text-left">
              © The Premium Homes Ltd 2025 - Developed by Easy Tech Solutions
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
              >
                Privacy
              </a>
              <span className="text-gray-600">·</span>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
              >
                Terms
              </a>
              <span className="text-gray-600">·</span>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
              >
                Sitemap
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center text-emerald-500 hover:bg-emerald-500 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
