// src/pages/AboutPage.jsx
import React, { useState, useEffect } from "react";
import {
  Award,
  Users,
  Building2,
  TrendingUp,
  Target,
  Heart,
  Shield,
  Sparkles,
} from "lucide-react";
import about1 from "../assets/about/about1.jpg";
import OurPartners from "./OurPartners";
import { FaCheckCircle } from "react-icons/fa";
import ceo from "../assets/Team/Md. Mainul Hasan Dulon .jpeg";
import deputyCeo from "../assets/Team/Md. Ejaj-Ur-Rahaman.jpeg";
import coo from "../assets/Team/Md. Rayhan Bhuiyan.jpeg";
import director from "../assets/Team/Md. Monsur Alam Munna .jpeg"
const AboutComponent = () => {
  // Dynamic content configuration
  const content = {
    hero: {
      title: "Building Dreams, Creating Communities",
      subtitle:
        "For over 25 years, we've been transforming landscapes and enriching lives through exceptional real estate development.",
      img: about1,
    },
    stats: [
      { icon: Building2, value: 4, suffix: "M", label: "Awards Winning" },
      { icon: Users, value: 20, suffix: "M", label: "Happy Customers" },
      { icon: Award, value: 12, suffix: "k", label: "Ready Property" },
      {
        icon: TrendingUp,
        value: 99,
        suffix: "%",
        label: "Customer Satisfaction",
      },
    ],
    story: {
      title: "The Premium Homes Ltd?",
      paragraphs: [
        "We're not just another real estate agency — we’re your trusted advisors. With deep market insight and an unwavering commitment to integrity, our team ensures a seamless and rewarding experience.",
      ],
      features: [
        "Trusted by 10,000+ happy homeowners",
        "Tailored solutions for buyers and sellers",
        "Dedicated post-sale support",
        "Virtual tours & 24/7 support",
        "Transparent pricing with no hidden fees",
      ],
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      imageAlt: "Our Story",
    },
    values: {
      title: "Our Core Values",
      subtitle:
        "The principles that guide every decision we make and every project we undertake.",
      items: [
        {
          icon: Shield,
          title: "Trust & Transparency",
          description:
            "We build lasting relationships through honest communication and transparent dealings with every client.",
        },
        {
          icon: Sparkles,
          title: "Quality Excellence",
          description:
            "Our commitment to superior construction quality and premium materials ensures enduring value.",
        },
        {
          icon: Heart,
          title: "Customer First",
          description:
            "Your dreams and satisfaction drive everything we do. We're here to make your vision a reality.",
        },
        {
          icon: Target,
          title: "Innovation & Growth",
          description:
            "We continuously evolve, embracing new technologies and sustainable practices for better living.",
        },
      ],
    },
    timeline: {
      title: "Our Journey",
      milestones: [
        {
          year: "2023",
          title: "Foundation",
          description: "Started with a vision to transform urban living",
        },


        {
          year: "2024",
          title: "Smart City Initiative",
          description: "Introduced The Premium Smart City IN Ashulia Model Town",
        },
        {
          year: "2025",
          title: "12k+ Projects",
          description: "Reached milestone of 12k completed projects",
        },
      ],
    },
    team: {
      title: "Leadership Team",
      members: [
        {
          name: "Md. Mainul Hasan Dulon",
          role: "Chief Executive Officer",
          image:ceo,
          description:
            "Visionary leader with 20+ years in real estate development",
        },
        {
          name: "Ejajur Rahaman",
          role: "Chief Operating Officer",
          image:deputyCeo,
          description:
            "Expert in project management and operational excellence",
        },
        {
          name: "Md. Rayhan Bhuiyan",
          role: "Cheif Operations Officer",
          image:coo,
          description:
            "Skilled in optimizing operations and enhancing customer satisfaction",
          description:
            "Award-winning architect specializing in sustainable design",
        },
        {
          name: "Md. Monsur Alam Munna",
          role: "Director",
          image:director,
          description: "Dedicated to ensuring exceptional customer experiences",
        },
      ],
    },
    cta: {
      title: "Ready to Build Your Dream?",
      subtitle:
        "Join thousands of satisfied homeowners who trusted us with their dreams.",
      buttonText: "Explore Projects",
    },
  };

  const [visibleElements, setVisibleElements] = useState(new Set());
  const [counts, setCounts] = useState(content.stats.map(() => 0));

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll("[data-animate]");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          setVisibleElements(
            (prev) => new Set([...prev, element.getAttribute("data-animate")])
          );
        }
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isVisible = (id) => visibleElements.has(id);

  // Counter animation logic
  useEffect(() => {
    if (isVisible("stats")) {
      const duration = 1500;
      const frameRate = 30;
      const totalFrames = Math.round(duration / (1000 / frameRate));
      const startTime = Date.now();

      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setCounts(
          content.stats.map((stat) => Math.floor(stat.value * progress))
        );
        if (progress === 1) clearInterval(interval);
      }, 1000 / frameRate);

      return () => clearInterval(interval);
    }
  }, [visibleElements]);

  return (
    <div className="bg-white text-neutral-900 overflow-x-hidden">
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        .animate-fade-up { animation: fadeUp 1s ease forwards; }
        .animate-fade-in { animation: fadeIn 1s ease forwards; }
        .animate-scale-in { animation: scaleIn 0.8s ease forwards; }
        .opacity-0 { opacity: 0; }
      `}</style>

      {/* ✅ HERO SECTION */}
      <section className="relative  flex flex-col items-center justify-center text-center h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={content.hero.img}
          alt="About us"
          className="absolute inset-0 w-full h-full  object-cover object-center"
        />
      </section>

      {/* ✅ COUNTER SECTION */}
      <section className=" py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center"
            data-animate="stats"
          >
            {content.stats.map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center justify-center ${
                  isVisible("stats") ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <stat.icon className="w-10 h-10 md:w-12 md:h-12 text-[#018a5c] mb-3 md:mb-4" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0d3d2d] mb-1 md:mb-2">
                  {counts[i].toLocaleString()}
                  {stat.suffix}
                </div>
                <div className="text-sm md:text-base text-neutral-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-16 md:py-24 bg-[#a2fede24]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div data-animate="story-left">
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0d3d2d] ${
                isVisible("story-left") ? "animate-fade-up" : "opacity-0"
              }`}
            >
              {content.story.title}
            </h2>
            {content.story.paragraphs.map((paragraph, index) => (
              <p key={index}
              className="mb-5 lg:mb-3"
              >
                {paragraph}
                </p>
            ))}
            <ul
              className={` space-y-3 text-neutral-700 leading-relaxed ${
                isVisible("story-left")
                  ? "animate-fade-up delay-200"
                  : "opacity-0"
              }`}
            >
              {content.story.features.map((sentence, index) => (
                <li key={index} className="flex space-x-4">
                  <FaCheckCircle className="mt-1 mr-2 text-lg text-green-500" />{" "}
                  {sentence}
                </li>
              ))}
            </ul>
          </div>
          <div data-animate="story-right" className="order-first md:order-last">
            <div
              className={`aspect-video rounded-2xl overflow-hidden shadow-2xl ${
                isVisible("story-right")
                  ? "animate-scale-in delay-300"
                  : "opacity-0"
              }`}
            >
              <img
                src={content.story.image}
                alt={content.story.imageAlt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-animate="values-title">
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#0d3d2d] ${
                isVisible("values-title") ? "animate-fade-up" : "opacity-0"
              }`}
            >
              {content.values.title}
            </h2>
            <p
              className={` text-neutral-600 max-w-2xl mx-auto ${
                isVisible("values-title")
                  ? "animate-fade-up delay-200"
                  : "opacity-0"
              }`}
            >
              {content.values.subtitle}
            </p>
          </div>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            data-animate="values-grid"
          >
            {content.values.items.map((value, i) => (
              <div
                key={i}
                className={`bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  isVisible("values-grid") ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <value.icon className="w-12 h-12 text-[#018a5c] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-[#0d3d2d]">
                  {value.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 md:py-24 bg-[#0d3d2d] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-animate="timeline-title">
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
                isVisible("timeline-title") ? "animate-fade-up" : "opacity-0"
              }`}
            >
              {content.timeline.title}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto" data-animate="timeline">
            {content.timeline.milestones.map((milestone, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row gap-6 md:gap-8 mb-12 last:mb-0 ${
                  isVisible("timeline") ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="md:w-24 text-left md:text-right text-2xl lg:text-3xl font-bold text-amber-200">
                  {milestone.year}
                </div>
                <div className="md:w-px bg-amber-200 relative hidden md:block">
                  <div className="absolute top-2 -left-2 w-4 h-4 rounded-full bg-amber-200"></div>
                </div>
                <div className="pb-2 md:pb-8">
                  <h3 className="text-xl lg:text-2xl font-bold mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-neutral-300">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 md:py-24 bg-[#a2fede24]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-animate="team-title">
            <h2
              className={`text-3xl md:text-4xl lg:tex-5xl font-bold mb-4 text-[#0d3d2d] ${
                isVisible("team-title") ? "animate-fade-up" : "opacity-0"
              }`}
            >
              {content.team.title}
            </h2>
          </div>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            data-animate="team-grid"
          >
            {content.team.members.map((member, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  isVisible("team-grid") ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-[#0d3d2d]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#018a5c] font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-neutral-600">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <OurPartners />
      {/* CTA */}
      <section className="mb-10 py-16 md:py-24  text-white text-center">
        <div
          className="bg-linear-to-br from-[#0d3d2d] to-[#018a5c] rounded-xl py-20 container mx-auto px-4"
          data-animate="cta"
        >
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 ${
              isVisible("cta") ? "animate-fade-up" : "opacity-0"
            }`}
          >
            {content.cta.title}
          </h2>
          <p
            className={`md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto text-neutral-200 ${
              isVisible("cta") ? "animate-fade-up delay-0" : "opacity-0"
            }`}
          >
            {content.cta.subtitle}
          </p>
          <button
            className={`cursor-pointer text-xs md:text-sm px-5 py-3 md:px-8 md:py-4 bg-amber-200 text-[#0d3d2d] hover:bg-white transition-all duration-300 uppercase tracking-widest font-bold  hover:shadow-xl rounded-lg ${
              isVisible("cta") ? "animate-fade-up delay-400" : "opacity-0"
            }`}
          >
            {content.cta.buttonText}
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutComponent;