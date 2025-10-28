import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const ProjectsByType = () => {
  const [activeTab, setActiveTab] = useState("regular");
  const [hoveredCard, setHoveredCard] = useState(null);
  const swiperRef = useRef(null);

  const projectTypes = [
    { id: "regular", label: "Regular Residential" },
    { id: "condominium", label: "Condominium" },
    { id: "studio", label: "Studio Suite" },
    { id: "commercial", label: "Commercial" },
  ];

  const projects = {
    regular: [
      {
        id: 1,
        title: "The Premium Southpoint Villa",
        location: "Ashulia Model Town",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
        status: "ONGOING",
        description: "Modern luxury villas with premium amenities and spacious interiors",
      },
      {
        id: 2,
        title: "The Premium Lakeview Terrace",
        location: "Ashulia Model Town",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
        status: "ONGOING",
        description: "Contemporary residences with stunning lake views and green spaces",
      },
      {
        id: 3,
        title: "Green Valley Residence",
        location: "Bashundhara R/A",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        status: "ONGOING",
        description: "Eco-friendly homes nestled in lush greenery with modern facilities",
      },
      {
        id: 4,
        title: "Skyline Heights",
        location: "Gulshan",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        status: "UPCOMING",
        description: "Luxury high-rise living with panoramic city views",
      },
    ],
    condominium: [
      {
        id: 5,
        title: "Marina Condominium",
        location: "Banani",
        image: "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=800&q=80",
        status: "ONGOING",
        description: "Upscale waterfront condominiums with world-class amenities",
      },
      {
        id: 6,
        title: "Pearl Towers",
        location: "Dhanmondi",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
        status: "ONGOING",
        description: "Elegant condominium living in the heart of the city",
      },
      {
        id: 7,
        title: "Sunset Boulevard",
        location: "Gulshan-2",
        image: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&q=80",
        status: "COMPLETED",
        description: "Premium condos with rooftop gardens and smart home features",
      },
      {
        id: 8,
        title: "Royal Gardens",
        location: "Baridhara",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
        status: "ONGOING",
        description: "Luxurious condominiums surrounded by landscaped gardens",
      },
    ],
    studio: [
      {
        id: 9,
        title: "Urban Studio Living",
        location: "Uttara",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
        status: "ONGOING",
        description: "Compact yet stylish studio apartments for modern professionals",
      },
      {
        id: 10,
        title: "Smart Studio Apartments",
        location: "Mirpur DOHS",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
        status: "COMPLETED",
        description: "Fully furnished smart studios with all modern conveniences",
      },
      {
        id: 11,
        title: "The Compact Elite",
        location: "Mohakhali",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        status: "ONGOING",
        description: "Efficient studio suites with premium finishes and amenities",
      },
      {
        id: 12,
        title: "Metro Studio Residence",
        location: "Banani",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
        status: "UPCOMING",
        description: "Contemporary studios near metro stations for easy commuting",
      },
    ],
    commercial: [
      {
        id: 13,
        title: "Business Hub Center",
        location: "Motijheel",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
        status: "ONGOING",
        description: "State-of-the-art commercial spaces in the financial district",
      },
      {
        id: 14,
        title: "Trade Plaza",
        location: "Gulshan Avenue",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
        status: "UPCOMING",
        description: "Premium retail and office spaces in prime location",
      },
      {
        id: 15,
        title: "Corporate Tower",
        location: "Kawran Bazar",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
        status: "ONGOING",
        description: "Modern corporate offices with cutting-edge infrastructure",
      },
      {
        id: 16,
        title: "The Business District",
        location: "Tejgaon",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
        status: "COMPLETED",
        description: "Mixed-use commercial complex with parking and amenities",
      },
    ],
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Projects by Type
          </h2>
          <div className="w-20 h-1 bg-green-700"></div>
        </div>

        <div className="hidden lg:flex justify-start">
          {/* Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
            {projectTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`cursor-pointer py-3.5 px-5 text-sm font-medium transition-all duration-300 rounded-lg ${
                  activeTab === type.id
                    ? "bg-green-700 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-green-700"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Carousel */}
        <div className="relative pb-24">
          <Swiper
            key={activeTab}
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
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
            {projects[activeTab].map((project, idx) => (
              <SwiperSlide key={project.id}>
                <div
                  className="bg-white rounded-lg border border-slate-300 shadow-xl md:shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-2 flex flex-col"
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Status Badge */}
                    <div className="absolute top-5 left-5">
                      <span
                        className={`px-4 py-2 text-xs font-bold text-white shadow-md ${
                          project.status === "ONGOING"
                            ? "bg-green-600"
                            : project.status === "UPCOMING"
                            ? "bg-blue-600"
                            : "bg-gray-700"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                    {/* Hover Content */}
                    <div
                      className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 ${
                        hoveredCard === idx
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                    >
                      <p className="text-white text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <button className="self-start px-6 py-2.5 bg-white text-gray-900 text-sm font-semibold hover:bg-green-700 hover:text-white transition-all duration-300">
                        VIEW DETAILS
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-white flex-grow">
                    <h3 className="truncate text-xl font-medium text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 flex items-center truncate">
                      <svg
                        className="w-4 h-4 mr-2 text-green-700 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {project.location}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className="absolute -top-20 right-20 md:right-24 z-10 bg-gray-900 text-white p-3 md:p-4 hover:bg-gray-800 transition-all shadow-lg"
            aria-label="Previous"
          >
            <FaArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className="absolute -top-20 right-8 md:right-6 z-10 bg-gray-900 text-white p-3 md:p-4 hover:bg-gray-800 transition-all shadow-lg"
            aria-label="Next"
          >
            <FaArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsByType;