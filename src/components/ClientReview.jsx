import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaStar, FaQuoteLeft } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";

const ClientReview = () => {
  const reviews = [
    {
      id: 1,
      link: "https://www.youtube.com/embed/zxcvNVqIl-0",
    },
    {
      id: 2,
      link: "https://www.youtube.com/embed/8fbwq7b4SFk",
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
              1280: { slidesPerView: 2 },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="px-3">
                  <div className="bg-white p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group h-full flex flex-col relative overflow-hidden">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <iframe 
                        src={review.link}
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={`Client Review ${review.id}`}
                      ></iframe>
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
          <Stat target={500} label="Happy Clients" suffix="+" />
          <Stat target={4.9} label="Average Rating" decimals={1} suffix="/5" />
          <Stat target={98} label="Satisfaction Rate" suffix="%" />
          <Stat target={50} label="Projects Completed" suffix="+" />
        </div>
      </div>
    </div>
  );
};

const Stat = ({ target, label, suffix = "", decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const statRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.min(increment * currentStep, target));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={statRef} className="text-center">
      <h3 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
        {count.toFixed(decimals)}{suffix}
      </h3>
      <p className="text-gray-600 text-sm md:text-base">{label}</p>
    </div>
  );
};

export default ClientReview;