import React, { useRef, useEffect } from "react";
import card1 from "../../assets/Property/PropertyOne.webp"
import card2 from "../../assets/Property/propertyTwo.webp"
import card3 from "../../assets/Property/propertyThree.webp"
import card4 from "../../assets/Property/propertyFour.webp"
import card5 from "../../assets/Property/propertyFive.webp"
import card6 from "../../assets/Property/propertySix.webp"
import card7 from "../../assets/Property/propertySeven.webp"
import card8 from "../../assets/Property/propertyEight.webp"


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

    const duration = 30 * 1000; // 20 seconds

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

// Image Card Component - Simplified for just images
const ImageCard = ({ img, title }) => (
  <figure
    className={cn(
      "relative h-full w-[350px] cursor-pointer overflow-hidden",
      "hover:scale-105 transition-transform duration-300"
    )}
  >
    <img 
      className="w-full h-full object-cover" 
      alt={title} 
      src={img} 
    />
    <div className="absolute bottom-0 left-0 p-4 pt-16 bg-gradient-to-t from-black/80 via-black/50 to-transparent w-full">
      <figcaption className="font-medium text-white text-xl">{title}</figcaption>
    </div>
  </figure>
);

// Reviews data
const images = [
  { title: "The Maple Heights", img: card1 },
  { title: "The Premium Suite 3.0", img: card2 },
  { title: "The Premium Nobel Court", img: card3 },
  { title: "The Legacy Residence", img: card4 },
  { title: "The Premium Southpoint Villa", img: card5 },
  { title: "The Premium Studio Suite 4.0", img: card6 },
  { title: "The Premium Lakeview Terrace", img: card7 },
  { title: "The Premium Glory Garden", img: card8 },
];

const firstRow = images.slice(0, images.length / 2);
const secondRow = images.slice(images.length / 2);

// Main Component
export default function MovingImages() {
  return (
    <div className="bg-[#065E33] py-10">
      <div className="container mx-auto px-4">
        {/* Marquee Container with proper overflow */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4">
          <Marquee pauseOnHover className="py-4">
            {firstRow.map((image, index) => (
              <ImageCard key={`first-${index}`} {...image} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="py-4">
            {secondRow.map((image, index) => (
              <ImageCard key={`second-${index}`} {...image} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}