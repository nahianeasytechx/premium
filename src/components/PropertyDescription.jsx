import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Download, MapPin, ChevronLeft } from 'lucide-react';
import { AppContext } from '../context/AppContext';

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { allProperties } = useContext(AppContext);
  
  const [scrolled, setScrolled] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());

  // Find the property by ID
  const property = allProperties.find(p => p.id === parseInt(id));

  // Redirect if property not found
  useEffect(() => {
    if (!property) {
      navigate('/projects');
    }
  }, [property, navigate]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior:"smooth" });
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          setVisibleElements(prev => new Set([...prev, element.getAttribute('data-animate')]));
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isVisible = (id) => visibleElements.has(id);

  if (!property) return null;

  return (
    <div className="bg-[#0d3d2d] text-white font-sans overflow-x-hidden">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-up { animation: fadeUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-fade-in { animation: fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-slide-left { animation: slideInLeft 1s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-slide-right { animation: slideInRight 1s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-scale-in { animation: scaleIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .opacity-0 { opacity: 0; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
      `}</style>

      {/* Back Button */}
      <div className="bg-[#0d3d2d] border-b border-neutral-700">
        <div className="container mx-auto px-4 py-4">
          <button 
            onClick={() => navigate('/projects')}
            className="flex items-center gap-2 text-amber-200 hover:text-amber-100 transition-colors duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider">Back to Projects</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <div className="absolute inset-0">
          <img 
            src={property.image} 
            alt={property.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d3d2d] via-[#0d3d2d]/50 to-transparent"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12 md:pb-16">
          <p className="text-amber-200 text-sm uppercase tracking-wider mb-2">{property.location}</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{property.name}</h1>
          <p className="text-xl text-neutral-300">{property.types}</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-amber-50 text-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div data-animate="about-left">
              <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 ${isVisible('about-left') ? 'animate-fade-up' : 'opacity-0'}`}>
                {property.name}
              </h2>
              <p className={`text-base sm:text-lg leading-relaxed text-neutral-700 ${isVisible('about-left') ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
                {property.description}
              </p>
              <div className={`mt-6 grid grid-cols-2 gap-4 ${isVisible('about-left') ? 'animate-fade-up delay-300' : 'opacity-0'}`}>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-2xl font-bold text-[#0d3d2d]">{property.apartmentCount}</p>
                  <p className="text-sm text-neutral-600">Apartments</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-2xl font-bold text-[#0d3d2d]">{property.specifications.find(s => s.label === "Towers")?.value}</p>
                  <p className="text-sm text-neutral-600">Towers</p>
                </div>
              </div>
            </div>
            <div data-animate="about-right">
              <div className={`aspect-square md:aspect-4/3 lg:aspect-square bg-neutral-300 rounded-2xl overflow-hidden shadow-2xl ${isVisible('about-right') ? 'animate-scale-in delay-300' : 'opacity-0'}`}>
                <img 
                  src={property.image}
                  alt={property.name}
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
                {property.specifications.map((spec, i) => (
                  <div 
                    key={i} 
                    className={`border-b border-neutral-700 pb-4 sm:pb-6 hover:border-amber-200 transition-all duration-300 ${isVisible('specs-left') ? 'animate-fade-up' : 'opacity-0'}`}
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
              <div className={`aspect-4/3 md:aspect-3/4 bg-neutral-700 rounded-2xl overflow-hidden shadow-2xl ${isVisible('specs-right') ? 'animate-slide-right delay-300' : 'opacity-0'}`}>
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
              {property.apartmentCount} luxury apartments
            </h2>
            <p className={`text-center text-lg sm:text-xl mb-8 sm:mb-16 text-neutral-600 ${isVisible('amenities-title') ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
              with state-of-the-art amenities
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6" data-animate="amenities-grid">
            {property.amenities.map((amenity, i) => (
              <div
                key={i}
                className={`bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer group ${isVisible('amenities-grid') ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="aspect-square bg-neutral-200 rounded-lg mb-3 sm:mb-4 overflow-hidden">
                  <img 
                    src={amenity.img}
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
                {property.blueprintFeatures.map((feature, i) => (
                  <li 
                    key={i} 
                    className={`flex items-start gap-3 hover:text-amber-200 transition-colors duration-300 ${isVisible('blueprint-left') ? 'animate-fade-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-amber-200 text-neutral-900 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-xs sm:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div data-animate="blueprint-right">
              <div className={`aspect-4/3 md:aspect-square bg-neutral-800 rounded-2xl overflow-hidden shadow-2xl ${isVisible('blueprint-right') ? 'animate-scale-in delay-400' : 'opacity-0'}`}>
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8" data-animate="towers-grid">
            {property.towers.map((tower, i) => (
              <div
                key={i}
                className={`bg-[#018a5c] p-6 sm:p-8 rounded-xl border-2 border-neutral-700 hover:border-amber-200 transition-all duration-500 hover:-translate-y-2 cursor-pointer ${isVisible('towers-grid') ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-amber-200">{tower.name}</h3>
                <p className="text-xs sm:text-sm text-neutral-300 mb-4 sm:mb-6">{tower.floors}</p>
                <div className="space-y-2 sm:space-y-3">
                  {tower.types.map((type, j) => (
                    <p key={j} className="text-xs sm:text-sm text-neutral-200 border-b border-neutral-600 pb-2">
                      {type}
                    </p>
                  ))}
                </div>
              </div>
            ))}
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
                {property.fullLocation}
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
      <section id="contact" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-green-500 via-green-800 to-amber-100 text-neutral-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <div data-animate="contact-title" className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4">
              <span className="text-amber-300 text-sm uppercase tracking-[0.3em] font-semibold">Contact Us</span>
              <div className="w-16 h-0.5 bg-amber-600 mx-auto mt-2"></div>
            </div>
            <h2 className={`text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isVisible('contact-title') ? 'animate-fade-up' : 'opacity-0'}`}>
              Let us guide you to
              <br />
              the extraordinary
            </h2>
            <p className={`text-white text-base sm:text-lg max-w-xl mx-auto ${isVisible('contact-title') ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
              Share your details and our team will reach out to help you find your perfect home
            </p>
          </div>
          
          <div className={`bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 ${isVisible('contact-title') ? 'animate-fade-up delay-300' : 'opacity-0'}`} data-animate="contact-title">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Enter your full name" 
                  required
                  className="w-full px-5 py-4 bg-neutral-50 border border-neutral-200 focus:border-[#06865c] focus:ring-2 focus:ring-[#06865c]/20 outline-none transition-all duration-300 rounded-xl text-base placeholder:text-neutral-400 hover:border-neutral-300" 
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input 
                  type="tel" 
                  placeholder="+880 1XXX XXXXXX" 
                  required
                  className="w-full px-5 py-4 bg-neutral-50 border border-neutral-200 focus:border-[#06865c] focus:ring-2 focus:ring-[#06865c]/20 outline-none transition-all duration-300 rounded-xl text-base placeholder:text-neutral-400 hover:border-neutral-300" 
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  placeholder="your.email@example.com" 
                  required
                  className="w-full px-5 py-4 bg-neutral-50 border border-neutral-200 focus:border-[#06865c] focus:ring-2 focus:ring-[#06865c]/20 outline-none transition-all duration-300 rounded-xl text-base placeholder:text-neutral-400 hover:border-neutral-300" 
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Message (Optional)
                </label>
                <textarea 
                  placeholder="Tell us about your requirements..." 
                  rows="4"
                  className="w-full px-5 py-4 bg-neutral-50 border border-neutral-200 focus:border-[#06865c] focus:ring-2 focus:ring-[#06865c]/20 outline-none transition-all duration-300 rounded-xl text-base placeholder:text-neutral-400 hover:border-neutral-300 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-[#06865c] to-[#05704d] text-white font-semibold hover:from-[#05704d] hover:to-[#046342] transition-all duration-300 uppercase tracking-wider text-sm rounded-xl hover:shadow-lg hover:shadow-[#06865c]/30 transform hover:-translate-y-0.5"
              >
                Request Call Back
              </button>

              <div className="pt-4 border-t border-neutral-200">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#06865c] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    By submitting this form, you agree to our <a href="#" className="text-[#06865c] hover:underline font-medium">privacy policy</a>. Your personal information will be kept safe and secure, and we'll only use it to contact you about your inquiry.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetailsPage;