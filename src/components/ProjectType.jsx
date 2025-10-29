import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import card1 from "../assets/Property/PropertyOne.webp";
import card2 from "../assets/Property/propertyTwo.webp";
import card3 from "../assets/Property/propertyThree.webp";
import card4 from "../assets/Property/propertyFour.webp";
import card5 from "../assets/Property/propertyFive.webp";
import card6 from "../assets/Property/propertySix.webp";
import card7 from "../assets/Property/propertySeven.webp";
import card8 from "../assets/Property/propertyEight.webp";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const ProjectsByType = () => {
  const [activeTab, setActiveTab] = useState("regular");
  const [hoveredCard, setHoveredCard] = useState(null);
  const swiperRef = useRef(null);

  const projectTypes = [
    { id: "all", label: "All" },
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
        image: card5,
        status: "ONGOING",
        description: "Modern luxury villas with premium amenities and spacious interiors",
      },
      {
        id: 2,
        title: "The Premium Lakeview Terrace",
        location: "Ashulia Model Town",
        image: card7,
        status: "ONGOING",
        description: "Contemporary residences with stunning lake views and green spaces",
      },

    ],
    condominium: [
      {
        id: 5,
        title: "The Legacy Residence",
        location: "The Premium Smart City",
        image: card4,
        status: "ONGOING",
        description: "Upscale waterfront condominiums with world-class amenities",
      },
      {
        id: 6,
        title: "The Nobel Court",
        location: "The Premium Smart City",
        image: card3,
        status: "ONGOING",
        description: "Elegant condominium living in the heart of the city",
      },
      {
        id: 7,
        title: "The Mapel Heigths",
        location: "The Premium Smart City",
        image: card1,
        status: "COMPLETED",
        description: "Premium condos with rooftop gardens and smart home features",
      },

    ],
    studio: [
      {
        id: 9,
        title: "The Premium Suite 3.0",
        location: "Ashulia Model Town",
        image: card2,
        status: "ONGOING",
        description: "Compact yet stylish studio apartments for modern professionals",
      },
      {
        id: 10,
        title: "The Premium Suite 4.0",
        location: "Ashulia Model Town",
        image: card6,
        status: "COMPLETED",
        description: "Fully furnished smart studios with all modern conveniences",
      },


    ],
    commercial: [
      
    ],
  };

  // Combine all projects for the "all" tab
  const allProjects = [
    ...projects.regular,
    ...projects.condominium,
    ...projects.studio,
    ...projects.commercial,
  ];

  return (
    <div className="py-10">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Projects by Type
          </h2>
          <div className="w-20 h-1 bg-green-700"></div>
        </div>

        <div className="lg:flex justify-start">
          {/* Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-12">
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
        <div className="relative pb-10">
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
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 4 },
            }}
          >
            {(activeTab === "all" ? allProjects : projects[activeTab]).map(
              (project, idx) => (
                <SwiperSlide key={project.id}>
                  <div
                    className="bg-white rounded-lg border border-slate-300 shadow-xl md:shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-2 flex flex-col"
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                     onClick={() => navigate(`/property/${project.id}`)}
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
              )
            )}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className="absolute -top-20 right-20 z-10 bg-gray-900 text-white p-4 hover:bg-gray-800 transition-all shadow-lg"
            aria-label="Previous"
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className="absolute -top-20 right-4 z-10 bg-gray-900 text-white p-4 hover:bg-gray-800 transition-all shadow-lg"
            aria-label="Next"
          >
            <FaArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsByType;
