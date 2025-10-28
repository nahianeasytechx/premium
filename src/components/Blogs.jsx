import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCalendar, FaUser, FaComment } from "react-icons/fa6";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import blogone from "../assets/blogs/blog1.webp";
import blogtwo from "../assets/blogs/blog2.webp";

const Blogs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const allBlogs = [ /* your blog data stays exactly as is */ 
    {
      id: 1,
      title: "We are proud to share that The Premium Homes Ltd. was the Title Partner of TEDxDaffodilU 202",
      excerpt: "Discover the essential factors you need to evaluate before making one of life's biggest investments.",
      image: blogone,
      author: "Sarah Johnson",
      date: "Oct 15, 2024",
      comments: 24,
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Collaborative Discussion with the Honorable Vice Chancellor of City University about The Premium Smart City of The Premium Homes Ltd.",
      excerpt: "Explore the latest interior design trends that are shaping homes and commercial spaces this year.",
      image: blogtwo,
      author: "Michael Chen",
      date: "Oct 12, 2024",
      comments: 18,
      readTime: "7 min read",
    },
    // ...rest stays unchanged
  ];

  return (
    <>


      <div className="bg-gray-50 py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Latest Blog Posts
            </h2>
            <div className="w-16 md:w-20 h-1 bg-green-700"></div>
          </div>

          {/* Swiper Carousel */}
          <div className="relative pb-20">



            <Swiper
              modules={[Navigation]}
              navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
              spaceBetween={16}
              slidesPerView={4}
              speed={600}
              breakpoints={{
                1024: { slidesPerView: 4 },
                768: { slidesPerView: 2 },
                0: { slidesPerView: 1 }
              }}
            >
              {allBlogs.map((blog, idx) => (
                <SwiperSlide key={blog.id}>
                  <div
                    className="bg-white rounded-lg border border-slate-300 shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-2 flex flex-col h-full"
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden flex-shrink-0 rounded-t-lg">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold text-white bg-black/70">
                        {blog.readTime}
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60" />

                      <div className={`absolute inset-0 flex flex-col justify-end p-4 transition-all duration-500 ${hoveredCard === idx ? "opacity-100" : "opacity-0"} `}>
                        <p className="text-white text-sm line-clamp-3 mb-3">{blog.excerpt}</p>
                        <button className="self-start px-5 py-2 bg-white text-gray-900 text-sm font-semibold hover:bg-green-700 hover:text-white transition-all">
                          READ MORE
                        </button>
                      </div>
                    </div>

                    <div className="p-4 flex flex-col flex-grow">
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
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
