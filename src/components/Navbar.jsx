import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/logo/logo.webp";
import whitelogo from "../assets/logo/white.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavbarStyles = () => {
    if (!isHomePage) {
      return {
        navBg: 'bg-white shadow-md',
        textColor: 'text-black',
        hoverColor: 'hover:text-gray-600',
        buttonStyle: 'border-black text-black hover:bg-black hover:text-white',
        hamburgerColor: 'text-black',
        logoSrc: logo
      };
    } else {
      return isScrolled
        ? {
            navBg: 'bg-gray-100 shadow-md',
            textColor: 'text-black',
            hoverColor: 'hover:text-gray-600',
            buttonStyle: 'border-black text-black hover:bg-black hover:text-white',
            hamburgerColor: 'text-black',
            logoSrc: logo
          }
        : {
            navBg: 'bg-gradient-to-b from-black/50 to-transparent',
            textColor: 'text-white',
            hoverColor: 'hover:text-gray-300',
            buttonStyle: 'border-white text-white hover:bg-white hover:text-black',
            hamburgerColor: 'text-white',
            logoSrc: whitelogo
          };
    }
  };

  const styles = getNavbarStyles();

  const navLinkClass = `
    relative
    transition-colors duration-300
    after:content-[''] after:absolute after:w-0 after:h-[1.5px] 
    after:left-0 after:-bottom-1 after:bg-current hover:after:w-full 
    after:transition-all after:duration-300
  `;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${styles.navBg}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">

          {/* Desktop Left Nav */}
          <div className={`hidden lg:flex items-center space-x-5 text-sm tracking-tight font-normal ${styles.textColor}`}>
            <Link to="/" className={`${navLinkClass} ${styles.hoverColor}`}>Home</Link>
            <Link to="/projects" className={`${navLinkClass} ${styles.hoverColor}`}>Projects</Link>
            <Link to="/reviews" className={`${navLinkClass} ${styles.hoverColor}`}>Reviews</Link>
            <Link to="/contact" className={`${navLinkClass} ${styles.hoverColor}`}>Contact</Link>
            <Link to="/about" className={`${navLinkClass} ${styles.hoverColor}`}>About</Link>
            <Link to="/media" className={`${navLinkClass} ${styles.hoverColor}`}>Blogs</Link>
            <Link to="/faq" className={`${navLinkClass} ${styles.hoverColor}`}>FAQ</Link>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center ">
            <img src={styles.logoSrc} alt="Logo" className="object-contain w-50 transition-opacity duration-300" />
          </Link>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center space-x-5">
            <button className={`px-6 py-2 border text-xs tracking-tight font-medium transition-all duration-300 ${styles.buttonStyle}`}>
              BOOK NOW
            </button>
            <Link to="#" className={`text-sm tracking-tight transition ${styles.textColor} ${styles.hoverColor}`}>
              premiums
            </Link>
            <a href="tel:8801958253300" className={`text-sm tracking-tight transition ${styles.textColor} ${styles.hoverColor}`}>
              +8801958253300
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className={`lg:hidden text-2xl transition-colors duration-300 ${styles.hamburgerColor}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <RxCross1 /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden w-full bg-white shadow-xl absolute top-full left-0 overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col space-y-5">
          <Link to="/" onClick={() => setIsOpen(false)} className="border-b pb-2 text-gray-800 hover:text-gray-600">Home</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="border-b pb-2 text-gray-800 hover:text-gray-600">Projects</Link>
          <Link to="/reviews" onClick={() => setIsOpen(false)} className="border-b pb-2 text-gray-800 hover:text-gray-600">Reviews</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="border-b pb-2 text-gray-800 hover:text-gray-600">Contact</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="border-b pb-2 text-gray-800 hover:text-gray-600">About</Link>
          <Link to="/faq" onClick={() => setIsOpen(false)} className="border-b pb-2 text-gray-800 hover:text-gray-600">FAQ</Link>

          <button className="w-full px-6 py-3 border-2 border-black text-black text-sm font-medium hover:bg-black hover:text-white mt-3" onClick={() => setIsOpen(false)}>
            BOOK NOW
          </button>

          <div className="flex justify-between pt-4 text-gray-800 text-sm">
            <Link to="#" onClick={() => setIsOpen(false)}>premium</Link>
            <a href="tel:8801958253300">+8801958253300</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
