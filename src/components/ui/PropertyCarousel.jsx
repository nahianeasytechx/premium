import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const PropertyCarousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const swiperRef = useRef(null);

  const properties = [
    { id: 1, title: "The Premium Sunleaf Garden", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80", hoverText: "Amin Mohammad Model Town, Ashulia" },
    { id: 2, title: "JUMEIRAH VILLAGE CIRCLE", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80", hoverText: "Contemporary apartments offering stunning views." },
    { id: 3, title: "MEYDAN - RIVIERA", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80", hoverText: "Waterfront living with premium experiences." },
    { id: 4, title: "PALM JUMEIRAH", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", hoverText: "Exclusive beachfront properties in Dubai." },
    { id: 5, title: "DUBAI MARINA", image: "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=800&q=80", hoverText: "Skyline views & vibrant nightlife." },
    { id: 6, title: "DOWNTOWN DUBAI", image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80", hoverText: "Prestigious urban residences." },
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

          <button className="px-6 md:px-8 py-2 md:py-3 border border-gray-900 text-gray-900 text-sm font-medium tracking-wider hover:bg-gray-900 hover:text-white transition-all duration-300 whitespace-nowrap shadow-sm hover:shadow-md">
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
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
          >
            {properties.map((property, idx) => (
              <SwiperSlide key={property.id}>
                <div
                  className="group relative h-72 sm:h-80 md:h-96 cursor-pointer overflow-hidden shadow-xl md:shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Default Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${
                    hoveredIndex === idx ? "opacity-0" : "opacity-100"
                  }`}>
                    <div className="absolute bottom-0 p-4">
                      <h3 className="text-white text-lg font-medium truncate">{property.title}</h3>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-center p-6 transition-opacity duration-300 ${
                    hoveredIndex === idx ? "opacity-100" : "opacity-0"
                  }`}>
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