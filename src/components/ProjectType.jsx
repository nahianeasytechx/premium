import React, { useState, useRef, useContext } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const ProjectsByType = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  
  // Get properties from context
  const { allProperties } = useContext(AppContext);

  const projectTypes = [
    { id: "all", label: "All" },
    { id: "premium", label: "The Premium City" },
    { id: "ashulia", label: "Ashulia Model Town" },
    { id: "ati", label: "The Ati Society" },
  ];

  // Group projects by community
  const projectsByType = {
    all: allProperties,
    premium: allProperties.filter(p => p.community === "The Premium City"),
    ashulia: allProperties.filter(p => p.community === "Ashulia Model Town"),
    ati: allProperties.filter(p => p.community === "The Ati Society"),
  };

  const currentProjects = projectsByType[activeTab] || [];

  return (
    <div className="py-10">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Projects by Community
          </h2>
          <div className="w-20 h-1 bg-green-700"></div>
        </div>

        <div className="lg:flex justify-start">
          {/* Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
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
        {currentProjects.length > 0 ? (
          <div className="relative pb-10">
            <Swiper
              key={activeTab}
              ref={swiperRef}
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              speed={600}
              loop={currentProjects.length > 1}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
              }}
            >
              {currentProjects.map((project, idx) => (
                <SwiperSlide key={project.id}>
                  <div
                    className="mt-10 lg:mt-0 bg-white rounded-lg border border-slate-300 shadow-xl md:shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-2 flex flex-col"
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => navigate(`/property/${project.id}`)}
                  >
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden shrink-0">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Status Badge */}
                      {project.tag && (
                        <div className="absolute top-5 left-5">
                          <span className="px-4 py-2 text-xs font-bold text-white shadow-md bg-green-600">
                            {project.tag}
                          </span>
                        </div>
                      )}

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

                        <button className="self-start px-6 py-2.5 bg-white text-gray-900 text-sm font-semibold hover:bg-green-700 hover:text-white transition-all duration-300">
                          VIEW DETAILS
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 bg-white grow">
                      <h3 className="truncate text-xl font-medium text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-600 flex items-center truncate">
                        <svg
                          className="w-4 h-4 mr-2 text-green-700 shrink-0"
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
                      <p className="text-xs text-gray-500 mt-2">{project.types}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            {currentProjects.length > 1 && (
              <>
                <button
                  onClick={() => swiperRef.current?.swiper.slidePrev()}
                  className="absolute -top-10 lg:-top-20 right-20 z-10 bg-gray-900 text-white p-4 hover:bg-gray-800 transition-all shadow-lg"
                  aria-label="Previous"
                >
                  <FaArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => swiperRef.current?.swiper.slideNext()}
                  className="absolute -top-10 lg:-top-20  right-4 z-10 bg-gray-900 text-white p-4 hover:bg-gray-800 transition-all shadow-lg"
                  aria-label="Next"
                >
                  <FaArrowRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No projects available in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsByType;