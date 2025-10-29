import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaStar, FaQuoteLeft } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";

const ClientReview = () => {
  const swiperRef = useRef(null);
  const reviews = [
    {
      id: 1,
      link: "https://youtube.com/embed/zxcvNVqIl-0"
    },
    {
      id: 2,
      link: "https://youtube.com/embed/8fbwq7b4SFk"
    },
    {
      id: 2,
      link: "https://youtube.com/embed/R6t93PSHPlQ-0"
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Client Reviews
            </h2>
            <div className="w-20 h-1 bg-green-700 mb-3"></div>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl">
              Hear from our satisfied clients about their experiences with us.
              Your trust is our greatest achievement.
            </p>
          </div>

          <button className="px-6 md:px-8 py-3 border border-gray-900 text-gray-900 text-sm font-medium tracking-wider hover:bg-gray-900 hover:text-white transition-all duration-300 whitespace-nowrap shadow-sm hover:shadow-md">
            VIEW ALL REVIEWS
          </button>
        </div>

        {/* Carousel */}
        <div className="relative pb-10">
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

          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            navigation={false}
            loop={true}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 2 },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="px-3">
                  <div className="rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group h-full flex flex-col relative overflow-hidden">
                    <iframe 
                      src={review.link} 
                      frameBorder="0"
                      className="w-full h-64 md:h-72 lg:h-80"
                      title={`Client review video ${review.id}`}
                      allowFullScreen
                    ></iframe>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-700 to-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-gray-200">
          <Stat number="500+" label="Happy Clients" />
          <Stat number="4.9/5" label="Average Rating" />
          <Stat number="98%" label="Satisfaction Rate" />
          <Stat number="50+" label="Projects Completed" />
        </div>
      </div>
    </div>
  );
};

const Stat = ({ number, label }) => (
  <div className="text-center">
    <h3 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
      {number}
    </h3>
    <p className="text-gray-600 text-sm md:text-base">{label}</p>
  </div>
);

export default ClientReview;