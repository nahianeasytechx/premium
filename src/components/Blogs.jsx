// src/pages/Blogs.jsx
import React, { useState, useContext } from "react";
import { FaArrowLeft, FaArrowRight, FaCalendar, FaUser, FaComment } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { blogs } = useContext(AppContext); // ✅ Get blogs from context

  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-gray-600 text-lg">No blogs found.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-8 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Latest Blog Posts
          </h2>
          <div className="w-16 md:w-20 h-1 bg-green-700"></div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          spaceBetween={16}
          slidesPerView={4}
          speed={600}
          breakpoints={{
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {blogs.map((blog, idx) => (
            <SwiperSlide key={blog.id}>
              <Link to={`/blogs/${blog.id}`} className="block">
                <div
                  className="bg-white rounded-lg border border-slate-300 shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-2 flex flex-col h-full"
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden shrink-0 rounded-t-lg">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold text-white bg-black/70">
                      {blog.readTime}
                    </div>
                    <div
                      className={`absolute inset-0 flex flex-col justify-end p-4 transition-all duration-500 ${
                        hoveredCard === idx ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <p className="text-white text-sm line-clamp-3 mb-3">{blog.excerpt}</p>
                      <button className="self-start px-5 py-2 bg-white text-gray-900 text-sm font-semibold hover:bg-green-700 hover:text-white transition-all">
                        READ MORE
                      </button>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col grow">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-700 transition-colors">
                      {blog.title}
                    </h3>
                    <div className="flex items-center text-xs text-gray-600 mt-auto pt-3 border-t border-gray-200">
                      <FaUser className="mr-1 text-green-700" /> {blog.author}
                      <FaCalendar className="ml-4 mr-1 text-green-700" /> {blog.date}
                      <FaComment className="ml-auto mr-1 text-green-700" /> {blog.comments}
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}

          {/* Navigation buttons */}
          <div className="swiper-button-prev text-green-700" />
          <div className="swiper-button-next text-green-700" />
        </Swiper>
      </div>
    </div>
  );
};

export default Blogs;
