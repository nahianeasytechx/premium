import React, { useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import bannerOne from "../assets/Banner images/bannerOne.png";
import bannerTwo from "../assets/Banner images/bannerTwo.png";
import bannerThree from "../assets/Banner images/bannerThree.png";
import bannerFour from "../assets/Banner images/bannerFour.png";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "ASHULIA",
      image: bannerOne,
    },
    {
      title: "Ati Society",
      image: bannerTwo,
    },
    {
      title: "",
      image: bannerThree,
    },
    {
      title: "MODERN LIVING",
      image: bannerFour,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      {/* Hero Slider Section */}
      <div className="relative container sm:max-w-full h-screen overflow-hidden">
        {/* Background Images */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full  object-cover lg:object-fit-fill"
            />
            <div className="object-fit absolute inset-0 bg-black/10" />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4">
          <h1 className="text-4xl sm:text-5xl   font-bold mb-6 md:mb-8 tracking-wider text-center">
            {slides[currentSlide].title}
          </h1>
          <button className="px-6 sm:px-8 py-1 sm:py-3 border border-white text-white text-xs  font-medium tracking-wider hover:bg-white hover:text-black transition">
            DISCOVER
          </button>
        </div>

        {/* Dot Navigation */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white w-6 sm:w-8"
                  : "bg-white/50 hover:bg-white/75 w-2 sm:w-3"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrow Navigation */}
        {/* <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button> */}
        {/* <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition"
          aria-label="Next slide"
        >
          <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button> */}
      </div>

      {/* Floating Contact Buttons */}
      <div className="fixed right-3 sm:right-4 md:right-6 bottom-3 sm:bottom-4 md:bottom-6 flex flex-col space-y-2 sm:space-y-3 md:space-y-4 z-50">
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 sm:p-3 md:p-4 rounded-full shadow-lg transition">
          <a
            href="mailto:business.d4@dpremiumhomes.com"

            target="_blank"
          >
            <FaEnvelope className="w-4 h-4 " />
          </a>
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 sm:p-3 md:p-4 rounded-full shadow-lg transition">
          <a href="tel:+8801901310848">
            {" "}
            <FaPhone className="w-4 h-4 " />
          </a>
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white p-2.5 sm:p-3 md:p-4 rounded-full shadow-lg transition">
          <a
            href="https://wa.me/+8801958253300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="w-4 h-4 " />
          </a>
        </button>
      </div>
    </>
  );
};

export default HeroSlider;
