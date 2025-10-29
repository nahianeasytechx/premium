import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Download, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const VeronaPropertyPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Check all animated elements
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          setVisibleElements(prev => new Set([...prev, element.getAttribute('data-animate')]));
        }
      });
    };

    handleScroll(); // Check on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const specifications = [
    { label: "Orientation", value: "South" },
    { label: "Front Road width", value: "60' (South)" },
    { label: "Land Size", value: "156.84 Katha" },
    { label: "Apartment Size", value: "1600 – 2974 sqft (Simplex)\n3506 – 5574 sqft (Duplex)" },
    { label: "Towers", value: "8" },
    { label: "Number of Apartments", value: "291" },
    { label: "Number of Parkings", value: "344 (including 8 guest parking)" },
    { label: "Number of Floors", value: "B2+B1+G+13 (Tower 1 – 7)\nB+G+13 (Tower 8)" },
  ];

  const amenities = [
    { name: "Pool", img: "photo-1576013551627-0cc20b96c2a7" },
    { name: "Community space", img: "photo-1497366216548-37526070297c" },
    { name: "Double height reception", img: "photo-1497366811353-6870744d04b2" },
    { name: "Coworking space", img: "photo-1497366754035-f200968a6e72" },
    { name: "Jogging track", img: "photo-1476480862126-209bfaa8edc8" },
    { name: "Joggers' hub", img: "photo-1540979388789-6cee28a1cdc9" },
    { name: "Courtyard", img: "photo-1558618666-fcd25c85cd64" },
    { name: "Double height cafeteria", img: "photo-1554118811-1e0d58224f24" },
    { name: "Clubhouse", img: "photo-1534438327276-14e5300c3a48" },
    { name: "Double height gym", img: "photo-1534438327276-14e5300c3a48" },
    { name: "Water feature", img: "photo-1544551763-46a013bb70d5" },
    { name: "Prayer space", img: "photo-1591154669695-5f2a8d20c089" },
    { name: "Indoor games", img: "photo-1511512578047-dfb367046420" },
    { name: "Zen garden", img: "photo-1558618666-fcd25c85cd64" },
    { name: "Play area", img: "photo-1587280501635-68a0e82cd5ff" },
    { name: "Rooftop lounge", img: "photo-1600607687644-c7171b42498b" },
    { name: "BBQ", img: "photo-1555939594-58d7cb561ad1" }
  ];

  const blueprintFeatures = [
    "Grand Double Height Reception",
    "Tranquil Zen Garden",
    "ATM Booth",
    "Central Garden Entry",
    "Guard Station",
    "Jogging Track",
    "Clubhouse",
    "Play Ground",
    "Prayer Space",
    "Indoor Games",
    "Outdoor Games",
    "GYM",
    "Kids Play Zone",
    "Swimming Pool"
  ];

  const towers = [
    { name: "Tower 1", floors: "B2+B1+G+13", types: ["A: 2925-2946 SQFT", "B: 2962-2974 SQFT", "C: 2544-2596 SQFT"] },
    { name: "Tower 2", floors: "B2+B1+G+13", types: ["A: 2412-2431 SQFT", "B: 2875-2921 SQFT", "C: 2150 SQFT"] },
    { name: "Tower 3", floors: "B2+B1+G+13", types: ["A: 2960-2964 SQFT", "B: 2083-2097 SQFT", "C: 2159 SQFT"] },
    { name: "Tower 4", floors: "B2+B1+G+13", types: ["A: 2441-2452 SQFT", "B: 2540-2723 SQFT", "C: 2073-2102 SQFT"] },
    { name: "Tower 5", floors: "B2+B1+G+13", types: ["A: 2156-2200 SQFT", "B: 1967-1990 SQFT", "C: 2462-2593 SQFT"] },
    { name: "Tower 6", floors: "B2+B1+G+13", types: ["A: 1960-1981 SQFT", "B: 2075-2093 SQFT", "C: 2046-2060 SQFT"] },
    { name: "Tower 7", floors: "B2+B1+G+13", types: ["A: 2038-2114 SQFT", "B: 2165-2216 SQFT", "C: 1966-1994 SQFT"] },
    { name: "Tower 8", floors: "B+G+13", types: ["A: 1891-1892 SQFT", "B: 1600-1623 SQFT"] }
  ];

  // Animation helper function
  const isVisible = (id) => visibleElements.has(id);

  return (
    <div className="bg-[#0d3d2d] text-white font-sans overflow-x-hidden">
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-up {
          animation: fadeUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-slide-left {
          animation: slideInLeft 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-slide-right {
          animation: slideInRight 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .opacity-0 {
          opacity: 0;
        }
        
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
      `}</style>





      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-amber-50 text-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div data-animate="about-left">
              <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 ${isVisible('about-left') ? 'animate-fade-up' : 'opacity-0'}`}>
                Verona
              </h2>
              <p className={`text-base sm:text-lg leading-relaxed text-neutral-700 ${isVisible('about-left') ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
                Verona, the city of romance and timeless beauty, inspires our vision for Edison Verona. 
                Just as Shakespeare&apos;s Verona stood as a beacon of charm and elegance, Edison Verona combines 
                architectural brilliance with a profound sense of harmony. A masterpiece of design and innovation, 
                it brings together the finest conveniences and the allure of natural serenity.
              </p>
            </div>
            <div data-animate="about-right">
              <div className={`aspect-square md:aspect-[4/3] lg:aspect-square bg-neutral-300 rounded-2xl overflow-hidden shadow-2xl ${isVisible('about-right') ? 'animate-scale-in delay-300' : 'opacity-0'}`}>
                <img 
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800" 
                  alt="Verona" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section id="specifications" className="py-12 sm:py-16 md:py-24 bg-[#0d3d2d]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <div data-animate="specs-left">
              <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-16 ${isVisible('specs-left') ? 'animate-fade-up' : 'opacity-0'}`}>
                Specification
              </h2>
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {specifications.map((spec, i) => (
                  <div 
                    key={i} 
                    className={`border-b bg-[#0d3d2d] pb-4 sm:pb-6 hover:border-amber-200 transition-all duration-300 ${isVisible('specs-left') ? 'animate-fade-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-6">
                      <span className="text-neutral-400 text-xs sm:text-sm uppercase tracking-wider mb-1 sm:mb-0">{spec.label}</span>
                      <span className="text-right whitespace-pre-line font-light text-sm sm:text-base">{spec.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className={`mt-8 sm:mt-12 px-6 sm:px-8 py-3 sm:py-4 bg-neutral-700 hover:bg-amber-200 hover:text-neutral-900 transition-all duration-300 uppercase tracking-widest flex items-center gap-3 text-xs sm:text-sm ${isVisible('specs-left') ? 'animate-fade-up delay-600' : 'opacity-0'}`}>
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download Brochure
              </button>
            </div>
            <div data-animate="specs-right">
              <div className={`aspect-[4/3] md:aspect-[3/4] bg-neutral-700 rounded-2xl overflow-hidden shadow-2xl ${isVisible('specs-right') ? 'animate-slide-right delay-300' : 'opacity-0'}`}>
                <img 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800" 
                  alt="Building" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-12 sm:py-16 md:py-24 bg-amber-50 text-neutral-900">
        <div className="container mx-auto px-4">
          <div data-animate="amenities-title">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center ${isVisible('amenities-title') ? 'animate-fade-up' : 'opacity-0'}`}>
              291 luxury apartments
            </h2>
            <p className={`text-center text-lg sm:text-xl mb-8 sm:mb-16 text-neutral-600 ${isVisible('amenities-title') ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
              with state-of-the-art amenities
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6" data-animate="amenities-grid">
            {amenities.map((amenity, i) => (
              <div
                key={i}
                className={`bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer group ${isVisible('amenities-grid') ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="aspect-square bg-neutral-200 rounded-lg mb-3 sm:mb-4 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${amenity.img}?w=400`} 
                    alt={amenity.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <h3 className="font-semibold text-center text-xs sm:text-sm">{amenity.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blueprint */}
      <section id="blueprint" className="py-12 sm:py-16 md:py-24 bg-[#0d3d2d]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div data-animate="blueprint-left">
              <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12 leading-tight ${isVisible('blueprint-left') ? 'animate-fade-up' : 'opacity-0'}`}>
                The blueprint
                <br />
                of elegance
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {blueprintFeatures.map((feature, i) => (
                  <li 
                    key={i} 
                    className={`flex items-start gap-3 hover:text-amber-200 transition-colors duration-300 ${isVisible('blueprint-left') ? 'animate-fade-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-amber-200 text-neutral-900 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-xs sm:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div data-animate="blueprint-right">
              <div className={`aspect-[4/3] md:aspect-square bg-[#0d3d2d] rounded-2xl overflow-hidden shadow-2xl ${isVisible('blueprint-right') ? 'animate-scale-in delay-400' : 'opacity-0'}`}>
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800" 
                  alt="Blueprint" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Towers */}
      <section id="towers" className="py-12 sm:py-16 md:py-24 bg-[#0d3d2d]">
        <div className="container mx-auto px-4">
          <div data-animate="towers-title">
            <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-12 md:mb-20 text-center ${isVisible('towers-title') ? 'animate-fade-up' : 'opacity-0'}`}>
              Explore our floor plan
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" data-animate="towers-grid">
            {towers.map((tower, i) => (
              <div
                key={i}
                className={`bg-[#018a5c] p-6 sm:p-8 rounded-xl border-2 border-neutral-700 hover:border-amber-200 transition-all duration-500 hover:-translate-y-2 cursor-pointer ${isVisible('towers-grid') ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-amber-200">{tower.name}</h3>
                <p className="text-xs sm:text-sm text-neutral-400 mb-4 sm:mb-6">{tower.floors}</p>
                <div className="space-y-2 sm:space-y-3">
                  {tower.types.map((type, j) => (
                    <p key={j} className="text-xs sm:text-sm text-neutral-300 border-b border-neutral-700 pb-2">
                      {type}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubhouse */}
      <section id="clubhouse" className="py-12 sm:py-16 md:py-24 bg-[#0d3d2d]">
        <div className="container mx-auto px-4">
          <div data-animate="clubhouse-title">
            <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12 ${isVisible('clubhouse-title') ? 'animate-fade-up' : 'opacity-0'}`}>
              Superior amenities for
              <br />
              exclusive lifestyle
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div data-animate="clubhouse-left">
              <p className={`text-base sm:text-lg mb-6 sm:mb-8 text-neutral-300 leading-relaxed ${isVisible('clubhouse-left') ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
                Experience a lifestyle beyond the ordinary. Edison-owned and managed amenities designed for residents, 
                open to their friends. Including:
              </p>
              <ul className={`space-y-2 sm:space-y-3 text-neutral-300 ${isVisible('clubhouse-left') ? 'animate-fade-up delay-300' : 'opacity-0'}`}>
                {['a cafeteria', 'a gym', 'a swimming complex', 'a sauna', 'a changing room', 'deck', 'lounge'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 hover:text-amber-200 transition-colors duration-300">
                    <span className="w-2 h-2 bg-amber-200 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div data-animate="clubhouse-right">
              <div className={`aspect-[4/3] bg-neutral-700 rounded-2xl overflow-hidden shadow-2xl ${isVisible('clubhouse-right') ? 'animate-scale-in delay-400' : 'opacity-0'}`}>
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800" 
                  alt="Clubhouse" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-12 sm:py-16 md:py-24 bg-[#0d3d2d]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div data-animate="location-left">
              <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 ${isVisible('location-left') ? 'animate-fade-up' : 'opacity-0'}`}>
                Location
              </h2>
              <p className={`text-2xl sm:text-3xl text-amber-100 mb-8 sm:mb-12 ${isVisible('location-left') ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
                Diabari, Uttara
              </p>
              <button className={`px-6 sm:px-8 py-3 sm:py-4 border-2 border-white hover:bg-white hover:text-neutral-900 transition-all duration-300 uppercase tracking-widest flex items-center gap-3 text-xs sm:text-sm ${isVisible('location-left') ? 'animate-fade-up delay-400' : 'opacity-0'}`}>
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                See on Map
              </button>
            </div>
            <div data-animate="location-right">
              <div className={`aspect-video bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl ${isVisible('location-right') ? 'animate-slide-right delay-300' : 'opacity-0'}`}>
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800" 
                  alt="Map" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-12 sm:py-16 md:py-24 bg-amber-50 text-neutral-900">
        <div className="container mx-auto px-4 max-w-2xl">
          <div data-animate="contact-title">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center ${isVisible('contact-title') ? 'animate-fade-up' : 'opacity-0'}`}>
              Let us guide you to
              <br />
              the extraordinary
            </h2>
          </div>
          <div className={`space-y-4 sm:space-y-6 mt-12 sm:mt-16 ${isVisible('contact-title') ? 'animate-fade-up delay-300' : 'opacity-0'}`} data-animate="contact-title">
            <input 
              type="text" 
              placeholder="Type your name..." 
              className="w-full px-6 sm:px-8 py-4 sm:py-5 border-2 border-neutral-300 focus:border-neutral-900 outline-none transition-all duration-300 rounded-lg text-base sm:text-lg" 
            />
            <input 
              type="tel" 
              placeholder="Type your phone number..." 
              className="w-full px-6 sm:px-8 py-4 sm:py-5 border-2 border-neutral-300 focus:border-neutral-900 outline-none transition-all duration-300 rounded-lg text-base sm:text-lg" 
            />
            <input 
              type="email" 
              placeholder="Type your email..." 
              className="w-full px-6 sm:px-8 py-4 sm:py-5 border-2 border-neutral-300 focus:border-neutral-900 outline-none transition-all duration-300 rounded-lg text-base sm:text-lg" 
            />
            <button className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-[#06865c] text-white hover:bg-[#147253] transition-all duration-300 uppercase tracking-widest text-sm sm:text-base hover:shadow-xl rounded-lg">
              Request Call Back
            </button>
            <p className="text-xs sm:text-sm text-center text-neutral-600 leading-relaxed">
              By submitting your request, you agree to our privacy policy.
              <br />
              Rest assured, your personal information will be kept safe and secure.
            </p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default VeronaPropertyPage;