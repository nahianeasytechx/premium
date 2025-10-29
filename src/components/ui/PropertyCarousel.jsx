import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import card1 from "../../assets/Property/PropertyOne.webp";
import card2 from "../../assets/Property/propertyTwo.webp";
import card3 from "../../assets/Property/propertyThree.webp";
import card4 from "../../assets/Property/propertyFour.webp";
import card5 from "../../assets/Property/propertyFive.webp";
import card6 from "../../assets/Property/propertySix.webp";
import card7 from "../../assets/Property/propertySeven.webp";
import card8 from "../../assets/Property/propertyEight.webp";

const PropertyCarousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  const properties = [
    { id: 1, title: "The Legacy Residence", image: card4, hoverText: "Ashulia Model Town" },
    { id: 2, title: "The Premium Suite 4.0", image: card6, hoverText: "Ahulia Model Town" },
    { id: 3, title: "The Premium Glory Garden", image: card8, hoverText: "Amin Mohammad Model Town, Ashulia." },
    { id: 4, title: "The Premium Suite 3.0", image: card2, hoverText: "Ashulia Model Town" },
    { id: 5, title: "The Maple Heights", image: card1, hoverText: "The Premium Smart City." },
    { id: 6, title: "The Premium Southpoiont Villa", image: card5, hoverText: "Ahulia Model Town" },
    { id: 7, title: "The Premium green Heaven", image: card5, hoverText: "D Block Amin Mohammad Model Town, Ashulia." },
  ];

  return (
    <div className="bg-white py-12 relative">
      <div className="container mx-auto px-3 lg:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Featured Properties
            </h2>
            <p className="text-gray-600 max-w-lg">
              Discover exceptional properties in prime locations.
            </p>
          </div>

          <button
            className="px-6 md:px-8 py-2 md:py-3 border border-gray-900 text-gray-900 text-sm font-medium tracking-wider hover:bg-gray-900 hover:text-white transition-all duration-300 whitespace-nowrap shadow-sm hover:shadow-md"
            onClick={() => navigate("/projects")}
          >
            SEE ALL
          </button>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            speed={600}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{ 640: { slidesPerView: 1 }, 1024: { slidesPerView: 2 }, 1280: { slidesPerView: 4 } }}
          >
            {properties.map((property, idx) => (
              <SwiperSlide key={property.id}>
                <div
                  className="group relative h-72 sm:h-80 md:h-96 cursor-pointer overflow-hidden shadow-xl md:shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => navigate(`/property/${property.id}`)} // Navigate on click
                >
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Default Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-t from-black/30 to-transparent transition-opacity duration-300 ${
                      hoveredIndex === idx ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <div className="absolute bottom-0 p-4">
                      <h3 className="text-white text-lg font-medium truncate">{property.title}</h3>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-center p-6 transition-opacity duration-300 ${
                      hoveredIndex === idx ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <h3 className="text-white text-xl font-bold mb-3">{property.title}</h3>
                    <p className="text-white/90 text-sm">{property.hoverText}</p>
                    <button className="mt-6 px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-all">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="absolute -top-24 md:-top-15 right-4 md:right-1 flex gap-3 md:gap-4 z-10">
            <button
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="bg-white p-2.5 md:p-3 border border-gray-900 hover:bg-gray-900 hover:text-white transition-all shadow-md"
              aria-label="Previous"
            >
              <FaArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            <button
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="bg-white p-2.5 md:p-3 border border-gray-900 hover:bg-gray-900 hover:text-white transition-all shadow-md"
              aria-label="Next"
            >
              <FaArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCarousel;
