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
  const [isPageReady, setIsPageReady] = useState(false);

  // Find the property by ID
  const property = allProperties.find(p => p.id === parseInt(id));

  // Redirect if property not found
  useEffect(() => {
    if (!property) {
      navigate('/projects');
    }
  }, [property, navigate]);

  // Scroll to top when page is ready
  useEffect(() => {
    if (property) {
      // Set a small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        setIsPageReady(true);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [property, id]);

  // Alternative more reliable approach - use useLayoutEffect
  useEffect(() => {
    if (property) {
      // Force scroll to top on next animation frame
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      });
    }
  }, [property, id]);

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

      {/* Rest of your component remains exactly the same */}
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

      {/* ... rest of your sections remain exactly the same ... */}
      
    </div>
  );
};

export default PropertyDetailsPage;