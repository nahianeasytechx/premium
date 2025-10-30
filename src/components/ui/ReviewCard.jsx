import React, { useRef, useEffect } from "react";
import { allProperties } from "../../data/data";

// Utility function to merge classnames
const cn = (...classes) => classes.filter(Boolean).join(' ');

// Marquee Component
function Marquee({
  children,
  reverse = false,
  pauseOnHover = false,
  className,
}) {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const duration = 30 * 1000; // 30 seconds

    const animation = container.animate(
      [
        { transform: "translateX(0%)" },
        { transform: reverse ? "translateX(50%)" : "translateX(-50%)" },
      ],
      {
        duration,
        iterations: Infinity,
        easing: "linear",
      }
    );

    animationRef.current = animation;

    if (pauseOnHover) {
      const handleMouseEnter = () => animation.pause();
      const handleMouseLeave = () => animation.play();
      
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        animation.cancel();
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }

    return () => animation.cancel();
  }, [reverse, pauseOnHover]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex whitespace-nowrap gap-4",
        className
      )}
      style={{ willChange: 'transform' }}
    >
      {children}
      {children}
    </div>
  );
}

// Image Card Component with Navigation
const ImageCard = ({ property, onClick }) => (
  <figure
    className={cn(
      "relative h-full w-[180px] md:w-[300px] lg:w-[350px] cursor-pointer overflow-hidden",
      "hover:scale-105 transition-transform duration-300"
    )}
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
  >
    <img 
      className="w-full h-full object-cover" 
      alt={property.name} 
      src={property.image} 
    />
    <div className="absolute bottom-0 left-0 p-4 pt-16 bg-gradient-to-t from-black/80 via-black/50 to-transparent w-full">
      <figcaption className="font-medium text-white text-xl">
        {property.name}
      </figcaption>
      <p className="text-white/80 text-sm mt-1">{property.location}</p>
    </div>
  </figure>
);

// Main Component
export default function MovingImages() {
  // Split properties into two rows
  const firstRow = allProperties.slice(0, Math.ceil(allProperties.length / 2));
  const secondRow = allProperties.slice(Math.ceil(allProperties.length / 2));

  // Handle navigation to property detail page
  const handlePropertyClick = (propertyId) => {
    // Using window.location for navigation since we don't have access to useNavigate
    window.location.href = `/property/${propertyId}`;
  };

  return (
    <div className="bg-[#065E33] py-10">
      <div className="container mx-auto px-4">
        {/* Marquee Container with proper overflow */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4">
          <Marquee pauseOnHover className="py-4">
            {firstRow.map((property) => (
              <ImageCard 
                key={`first-${property.id}`} 
                property={property}
                onClick={() => handlePropertyClick(property.id)}
              />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="py-4">
            {secondRow.map((property) => (
              <ImageCard 
                key={`second-${property.id}`} 
                property={property}
                onClick={() => handlePropertyClick(property.id)}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}