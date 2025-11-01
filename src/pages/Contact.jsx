import React, { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Facebook, Linkedin, Youtube, Instagram } from "lucide-react";

export default function ContactPage() {
      // Scroll to top on page load
      useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior:"smooth" });
      }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  const offices = [
    {
      title: "Corporate Office",
      address: "Land View Commercial Center, 9th Floor 28 Gulshan North C/A, Gulshan Circle-2, Dhaka",
      phone: "09617777000",
      email: "info@thepremiumhomes.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0977753474845!2d90.41461207603654!3d23.780839787076883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a1c6b1b6c7%3A0x8b5e5b5b5b5b5b5b!2sGulshan%20Circle%202%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
    },
    {
      title: "Site Office",
      address: "2nd & 3rd Floor, Tokyo Plaza, Ashulia Model Town Khagan Bazar, Dhaka",
      phone: "09617777001",
      email: "site@thepremiumhomes.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.8776885!2d90.3252!3d23.8859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDUzJzA5LjIiTiA5MMKwMTknMzAuNyJF!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
    }
  ];

  const [selectedOffice, setSelectedOffice] = useState(0);

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-500"></div>
                <Mail className="w-6 h-6 text-emerald-400" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-500"></div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
                Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Touch</span>
              </h1>
              <p className="text-xl text-black max-w-2xl mx-auto">
                We're here to help you find your dream home. Reach out to us anytime!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="bg-[#06573c]  backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <CheckCircle className="w-12 h-12 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Message Sent!</h3>
                  <p className="text-gray-400 text-center">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                        placeholder="+880 1XXX-XXXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                        placeholder="Property Inquiry"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full px-6 py-4   bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(16,185,129,0.5)] hover:shadow-[0_0_25px_rgba(16,185,129,0.8)] hover:scale-105"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </div>
              )}
            </div>

            {/* Social Media */}
            <div className="bg-[#06573c]  backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/thepremiumhomesltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-900/50 border border-slate-700 flex items-center justify-center text-gray-300 hover:text-emerald-400 hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/thepremiumhomes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-900/50 border border-slate-700 flex items-center justify-center text-gray-300 hover:text-emerald-400 hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/@ThePremiumHomesLTD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-900/50 border border-slate-700 flex items-center justify-center text-gray-300 hover:text-emerald-400 hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-slate-900/50 border border-slate-700 flex items-center justify-center text-gray-300 hover:text-emerald-400 hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Office Selector */}
            <div className="flex space-x-4">
              {offices.map((office, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOffice(index)}
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedOffice === index
                      ? "bg-[#06573c]  text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                      : "bg-slate-800/20 border border-slate-700  hover:border-emerald-500"
                  }`}
                >
                  {office.title}
                </button>
              ))}
            </div>

            {/* Contact Cards */}
            <div className="grid gap-6">
              <div className="bg-[#06573c]  backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/50 transition-all shadow-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-2">{offices[selectedOffice].title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{offices[selectedOffice].address}</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#06573c]   backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/50 transition-all shadow-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-2">Phone Number</h3>
                    <a href={`tel:${offices[selectedOffice].phone}`} className="text-white hover:text-emerald-300 transition-colors text-sm">
                      {offices[selectedOffice].phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#06573c]   backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/50 transition-all shadow-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-2">Email Address</h3>
                    <a href={`mailto:${offices[selectedOffice].email}`} className="text-white hover:text-emerald-300 transition-colors text-sm">
                      {offices[selectedOffice].email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#06573c]  backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/50 transition-all shadow-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-2">Business Hours</h3>
                    <p className="text-gray-300 text-sm">Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-300 text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-300 text-sm">Friday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-emerald-600 backdrop-blur-lg border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video w-full">
                <iframe
                  src={offices[selectedOffice].mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-linear-to-br from-[#0d3d2d] to-[#018a5c] rounded-2xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Let our experienced team guide you through every step of your real estate journey.
          </p>
          <button className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}