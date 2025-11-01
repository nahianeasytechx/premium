import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, User } from "lucide-react";

export default function ReviewsPage() {
  const [reviews] = useState([
    {
      id: 1,
      name: "Sarah Ahmed",
      role: "Homeowner",
      rating: 5,
      videoUrl: "https://www.youtube.com/embed/SiuEcyr5tPo",
      review:
        "The Premium Homes exceeded all our expectations. The quality of construction and attention to detail is remarkable. Our family couldn't be happier!",
      date: "March 2024",
      project: "The Premium Green Valley",
      thumbnail:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=450&fit=crop",
    },
    {
      id: 2,
      name: "Karim Rahman",
      role: "Property Investor",
      rating: 5,
      videoUrl: "https://youtube.com/embed/zxcvNVqIl-0",
      review:
        "Outstanding investment opportunity. The location, amenities, and build quality make this one of the best real estate investments in Dhaka.",
      date: "February 2024",
      project: "The Premium Glory Garden",
      thumbnail:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=450&fit=crop",
    },
    {
      id: 3,
      name: "Fatima Hossain",
      role: "Resident",
      rating: 5,
      videoUrl: "https://youtube.com/embed/8fbwq7b4SFk",
      review:
        "Living here has been an absolute dream. The community is wonderful and the facilities are world-class. Highly recommend to anyone looking for their dream home.",
      date: "January 2024",
      project: "The Premium Harmony Residence",
      thumbnail:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=450&fit=crop",
    },
    {
      id: 4,
      name: "Rafiq Khan",
      role: "Business Owner",
      rating: 5,
      videoUrl:
        "https://www.youtube.com/embed/5TxIjYfNsZg?si=epH2DzkkNtF3sbd7",
      review:
        "The professionalism and transparency throughout the entire process was impressive. Premium Homes truly lives up to its name.",
      date: "December 2023",
      project: "The Premium Floral Haven",
      thumbnail:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=450&fit=crop",
    },
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Client{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              Reviews
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hear what our valued clients have to say about their experience with
            The Premium Homes
          </p>
        </div>
      </div>

      {/* Slider */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid md:grid-cols-2 gap-0 bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
          {/* Video */}
          <div className="flex-1">
            <iframe
              src={reviews[currentSlide].videoUrl}
              title={reviews[currentSlide].name}
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full h-full aspect-video"
            />
          </div>

          {/* Review Content */}
          <div className="flex-1 p-8 md:p-10 flex flex-col justify-center space-y-6">
            <Quote className="w-12 h-12 text-emerald-400 opacity-50" />
            <div className="space-y-4">
              <div className="flex items-center space-x-1">
                {[...Array(reviews[currentSlide].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-200 text-lg leading-relaxed italic">
                "{reviews[currentSlide].review}"
              </p>
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-700">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg">
                  <User className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    {reviews[currentSlide].name}
                  </h3>
                  <p className="text-emerald-400 text-sm">
                    {reviews[currentSlide].role}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    {reviews[currentSlide].date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? "w-12 h-3 bg-emerald-500"
                  : "w-3 h-3 bg-slate-600"
              }`}
            />
          ))}
        </div>
      </div>


    </div>
  );
}
