import React, { useState } from "react";
import {
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
  ChevronUp,
  Send,
} from "lucide-react";
import { IoLocation } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import whiteLogo from "../assets/logo/white.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#0d3d2d] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="text-emerald-500 text-xs font-semibold">
                <img
                  src={whiteLogo}
                  alt="The Premium Homes"
                  className="w-60 lg:w-full"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering communities through compassion and dedication to making a positive difference.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/thepremiumhomesltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a4d3d] flex items-center justify-center text-gray-300 hover:text-emerald-500 hover:bg-[#215740] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/thepremiumhomes?originalSubdomain=bd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a4d3d] flex items-center justify-center text-gray-300 hover:text-emerald-500 hover:bg-[#215740] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@ThePremiumHomesLTD"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a4d3d] flex items-center justify-center text-gray-300 hover:text-emerald-500 hover:bg-[#215740] transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1a4d3d] flex items-center justify-center text-gray-300 hover:text-emerald-500 hover:bg-[#215740] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Menu Section */}
          <div>
            <h3 className="text-white font-semibold mb-4 relative inline-block">
              Quick Menu
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-emerald-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-emerald-500 transition-colors text-sm flex items-center"
                >
                  <ChevronUp className="w-3 h-3 rotate-90 mr-1" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-emerald-500 transition-colors text-sm flex items-center"
                >
                  <ChevronUp className="w-3 h-3 rotate-90 mr-1" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-300 hover:text-emerald-500 transition-colors text-sm flex items-center"
                >
                  <ChevronUp className="w-3 h-3 rotate-90 mr-1" />
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-gray-300 hover:text-emerald-500 transition-colors text-sm flex items-center"
                >
                  <ChevronUp className="w-3 h-3 rotate-90 mr-1" />
                  Blogs
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-emerald-500 transition-colors text-sm flex items-center"
                >
                  <ChevronUp className="w-3 h-3 rotate-90 mr-1" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-white font-semibold mb-4 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-emerald-500"></span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <IoLocation className="text-emerald-500 text-lg mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white font-semibold mb-1">Address:</p>
                  <p className="text-gray-300">
                    Land View Commercial Center, 9th Floor 28 Gulshan North C/A, Gulshan Circle-2, Dhaka
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <IoIosCall className="text-emerald-500 text-lg mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white font-semibold mb-1">Phone:</p>
                  <a
                    href="tel:09617777000"
                    className="text-gray-300 hover:text-emerald-500 transition-colors"
                  >
                    09617777000
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MdEmail className="text-emerald-500 text-lg mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white font-semibold mb-1">Email:</p>
                  <a
                    href="mailto:info@thepremiumhomes.com"
                    className="text-gray-300 hover:text-emerald-500 transition-colors"
                  >
                    info@thepremiumhomes.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-white font-semibold mb-4 relative inline-block">
              Newsletter
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-emerald-500"></span>
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Stay updated with our latest news and promotions.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-[#1a4d3d] text-white placeholder-gray-400 border border-[#2a5d4d] rounded focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-semibold transition-all flex items-center justify-center space-x-2 text-sm shadow-[0_0_15px_rgba(16,185,129,0.5)] hover:shadow-[0_0_25px_rgba(16,185,129,0.8)] hover:scale-105"
              >
                <Send className="w-4 h-4" />
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-sm text-center sm:text-left">
              © 2025 The Premium Homes Ltd. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm text-center sm:text-right">
              Developed by <a href="#" className="text-emerald-500 hover:text-emerald-400 transition-colors">Easy Tech Solutions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}