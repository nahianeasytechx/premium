import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark, Facebook, Twitter, Linkedin, Link2, Tag, TrendingUp, ArrowRight } from 'lucide-react';

const BlogDetailsPage = ({ blogId, onBack }) => {
  const { blogs } = useContext(AppContext);
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    if (blogs && blogId) {
      const foundBlog = blogs.find(b => b.id === parseInt(blogId));
      setBlog(foundBlog || null);

      // Get related blogs (same category, excluding current)
      if (foundBlog) {
        const related = blogs
          .filter(b => b.id !== foundBlog.id && b.category === foundBlog.category)
          .slice(0, 3);
        setRelatedBlogs(related);
      }
    }
  }, [blogs, blogId]);

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = blog?.title || '';
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } else {
      window.open(shareUrls[platform], '_blank');
    }
  };

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#06573c] to-emerald-700 rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse">
            <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Blog not found</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 bg-[#06573c] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-emerald-800 transition-all shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section with Featured Image */}
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] bg-gray-900 overflow-hidden mt-10">
        {blog.image ? (
          <>
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#06573c] via-emerald-800 to-emerald-900">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl"></div>
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-10">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-semibold hover:bg-white/20 transition-all border border-white/20 shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Back to Blogs</span>
            <span className="sm:hidden">Back</span>
          </button>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 text-white px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
          <div className="max-w-4xl mx-auto">
            {blog.category && (
              <span className="inline-block bg-[#06573c] px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-lg">
                {blog.category}
              </span>
            )}
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm">
              {blog.author && (
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#06573c] to-emerald-700 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg">
                    {blog.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">{blog.author}</p>
                    {blog.date && <p className="text-gray-300 text-xs">{blog.date}</p>}
                  </div>
                </div>
              )}
              {blog.readTime && (
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{blog.readTime}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 max-w-7xl mx-auto">
          {/* Article Content */}
          <article className="flex-1 min-w-0">
            {/* Excerpt/Introduction */}
            {blog.excerpt && (
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 border-l-4 border-[#06573c] shadow-lg">
                <p className="text-base sm:text-xl text-gray-700 leading-relaxed font-medium">
                  {blog.excerpt}
                </p>
              </div>
            )}

            {/* Main Content */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="prose prose-sm sm:prose-lg max-w-none">
                {blog.content ? (
                  <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                ) : (
                  <>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">Key Insights</h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-l-4 border-[#06573c] p-4 sm:p-6 my-6 sm:my-8 rounded-r-xl shadow-sm">
                      <p className="text-sm sm:text-base md:text-lg text-gray-700 italic leading-relaxed">
                        "This is a sample quote or important highlight from the blog post that emphasizes a key point or insight."
                      </p>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">Understanding the Market</h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>

                    <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                      <li>Important point about real estate market trends</li>
                      <li>Investment strategies for modern buyers</li>
                      <li>Tips for maximizing property value</li>
                      <li>Understanding location dynamics</li>
                    </ul>

                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">Conclusion</h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                  </>
                )}
              </div>

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    <Tag className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-[#06573c] hover:text-white transition-colors cursor-pointer shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-80 w-full">
            <div className="lg:sticky lg:top-8 space-y-4 sm:space-y-6">
              {/* Share Card */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                  <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#06573c]" />
                  Share This Article
                </h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#06573c] hover:text-white transition-all shadow-sm"
                  >
                    <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Facebook</span>
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#06573c] hover:text-white transition-all shadow-sm"
                  >
                    <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Twitter</span>
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#06573c] hover:text-white transition-all shadow-sm"
                  >
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>LinkedIn</span>
                  </button>
                  <button
                    onClick={() => handleShare('copy')}
                    className="flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#06573c] hover:text-white transition-all shadow-sm"
                  >
                    <Link2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Copy Link</span>
                  </button>
                </div>
              </div>

              {/* Save for Later */}
              <button className="w-full flex items-center justify-center gap-2 bg-white border-2 border-[#06573c] text-[#06573c] px-5 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-bold hover:bg-[#06573c] hover:text-white transition-all shadow-lg">
                <Bookmark className="w-4 h-4 sm:w-5 sm:h-5" />
                Save for Later
              </button>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Blogs Section */}
      {relatedBlogs.length > 0 && (
        <div className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Related Articles</h2>
              <p className="text-base sm:text-xl text-gray-600">Continue exploring similar topics</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <article
                  key={relatedBlog.id}
                  onClick={() => window.location.reload()}
                  className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="relative h-40 sm:h-48 overflow-hidden bg-gray-200">
                    {relatedBlog.image ? (
                      <img
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#06573c] to-emerald-700 flex items-center justify-center">
                        <span className="text-white text-2xl sm:text-3xl font-bold opacity-50">
                          {relatedBlog.title?.charAt(0) || 'B'}
                        </span>
                      </div>
                    )}
                    {relatedBlog.category && (
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                        <span className="bg-[#06573c] text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs font-semibold shadow-lg">
                          {relatedBlog.category}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-[#06573c] transition-colors">
                      {relatedBlog.title}
                    </h3>
                    {relatedBlog.excerpt && (
                      <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 mb-3 sm:mb-4">
                        {relatedBlog.excerpt}
                      </p>
                    )}
                    <button className="text-[#06573c] font-semibold text-xs sm:text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Newsletter CTA */}
      <div className="mb-6 sm:mb-10">
        <div className="container py-12 sm:py-16 px-4 bg-[#06573c] mx-auto text-center rounded-xl shadow-lg">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Enjoyed this article?
          </h2>
          <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 px-4">
            Subscribe to get more insights like this delivered to your inbox
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-2xl mx-auto px-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 sm:px-6 sm:py-4 rounded-full text-sm sm:text-base text-white border border-white bg-transparent focus:outline-none focus:ring-2 focus:ring-white shadow-lg placeholder-gray-300"
            />
            <button className="bg-white text-[#06573c] px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-bold hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;