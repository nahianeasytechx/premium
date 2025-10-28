import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaStar, FaQuoteLeft } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";

const ClientReview = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      location: "Gulshan, Dhaka",
      rating: 5,
      review:
        "Exceptional service and quality! The team went above and beyond to ensure every detail was perfect. Our dream home became a reality, and we couldn't be happier with the results.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      project: "The Premium Southpoint Villa",
    },
    {
      id: 2,
      name: "Ahmed Rahman",
      role: "Property Investor",
      location: "Banani, Dhaka",
      rating: 5,
      review:
        "Outstanding investment opportunity with excellent returns. The construction quality and location are top-notch. Highly recommend for anyone looking for premium properties in Dhaka.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      project: "Marina Condominium",
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Business Owner",
      location: "Dhanmondi, Dhaka",
      rating: 5,
      review:
        "From initial consultation to final handover, everything was seamless. The attention to detail and customer service exceeded our expectations. A truly professional experience.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      project: "Pearl Towers",
    },
    {
      id: 4,
      name: "Michael Chen",
      role: "Entrepreneur",
      location: "Uttara, Dhaka",
      rating: 5,
      review:
        "The perfect blend of modern design and functionality. Living here has been an absolute pleasure. The amenities and community atmosphere are fantastic.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      project: "Urban Studio Living",
    },
    {
      id: 5,
      name: "Fatima Khan",
      role: "Corporate Executive",
      location: "Bashundhara, Dhaka",
      rating: 5,
      review:
        "Premium quality construction with world-class amenities. The project was completed on time, and the after-sales service has been excellent. Highly satisfied with our purchase.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
      project: "Green Valley Residence",
    },
    {
      id: 6,
      name: "David Martinez",
      role: "Architect",
      location: "Motijheel, Dhaka",
      rating: 5,
      review:
        "As an architect, I'm impressed by the structural integrity and design excellence. The commercial spaces are well-planned and perfect for modern businesses.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      project: "Business Hub Center",
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
        <div className="relative pb-24">
          {/* Custom Buttons */}
          {/* <button className="swiper-button-prev bg-gray-900 text-white p-3 md:p-4 absolute -bottom-20 right-16 md:right-24 z-10 hover:bg-green-700 transition-all shadow-lg">
            <FaArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button className="swiper-button-next bg-gray-900 text-white p-3 md:p-4 absolute -bottom-20 right-4 md:right-6 z-10 hover:bg-green-700 transition-all shadow-lg">
            <FaArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button> */}

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop={true}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="px-3">
                  <div className="bg-white p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group h-full flex flex-col relative overflow-hidden">
                    {/* Quote Icon */}
                    <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                      <FaQuoteLeft className="w-20 h-20 md:w-24 md:h-24 text-green-700" />
                    </div>

                    {/* Client Info */}
                    <div className="flex items-center mb-6">
                      <div className="relative">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-green-700 shadow-md"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <h4 className="text-lg md:text-xl font-bold text-gray-900">
                          {review.name}
                        </h4>
                        <p className="text-sm text-gray-600">{review.role}</p>
                        <p className="text-xs text-gray-500">{review.location}</p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 mr-1"
                        />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-grow italic line-clamp-2 mb-4">
                      "{review.review}"
                    </p>

                    {/* Project */}
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-500">
                        Project:{" "}
                        <span className="text-green-700 font-semibold">
                          {review.project}
                        </span>
                      </p>
                    </div>

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
