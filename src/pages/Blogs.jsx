// src/pages/BlogsPage.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const BlogsPage = () => {
  const { blogs } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-[#06573c] text-white mt-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
            Insights, stories, and expert advice on real estate and property investment
          </p>
        </div>
      </div>

      {/* Blogs Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs && blogs.length > 0 ? (
            blogs.map((blog) => (
              <article
                key={blog.id}
                onClick={() => navigate(`/blogs/${blog.id}`)}
                className="cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
              >
                {/* Blog Image */}
                <div className="relative h-56 overflow-hidden bg-gray-200">
                  {blog.image ? (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#06573c] to-emerald-700 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold opacity-50">
                        {blog.title?.charAt(0) || "B"}
                      </span>
                    </div>
                  )}
                  {blog.category && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#06573c] text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                        {blog.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    {blog.date && (
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{blog.date}</span>
                      </div>
                    )}
                    {blog.readTime && (
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{blog.readTime}</span>
                      </div>
                    )}
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#06573c] transition-colors">
                    {blog.title}
                  </h2>

                  {blog.excerpt && (
                    <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                  )}

                  {blog.author && (
                    <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{blog.author}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-[#06573c] font-semibold group-hover:gap-3 transition-all">
                    <span>Read More</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <div className="inline-block p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-20 h-20 bg-gradient-to-br from-[#06573c] to-emerald-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">📝</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No Blogs Yet</h3>
                <p className="text-gray-600">Check back soon for exciting content!</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mb-10">
        <div className="container py-16 px-4 bg-[#06573c] mx-auto text-center rounded-xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Subscribe to our newsletter for the latest insights and updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border border-white text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white shadow-lg bg-transparent"
            />
            <button className="bg-white text-[#06573c] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
