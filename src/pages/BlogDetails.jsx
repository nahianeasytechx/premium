import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Calendar, Clock, ArrowLeft, User, MessageSquare, Tag, Instagram, Twitter, Facebook, Youtube, Linkedin } from 'lucide-react';

const BlogDetailsPage = () => {
  const { blogs } = useContext(AppContext);
  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample tags
  const tags = ['REAL ESTATE', 'PROPERTY', 'INVESTMENT', 'HOUSING', 'DEVELOPMENT', 'MARKET', 'SMART CITY'];

  useEffect(() => {
    if (blogs && id) {
      const foundBlog = blogs.find(b => b.id === parseInt(id));
      setBlog(foundBlog || null);

      if (foundBlog) {
        const recent = blogs
          .filter(b => b.id !== foundBlog.id)
          .slice(0, 4);
        setRecentBlogs(recent);
      }
    }
  }, [blogs, id]);
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior:"smooth" });
  }, [id]);

  
  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Blog not found</h2>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-emerald-800 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
<>
    <div className="min-h-screen my-20 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">



            {/* Article Card */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Header */}
              <div className="bg-emerald-700 text-white px-6 py-4">
                <span className="inline-block bg-white/20 px-3 py-1 rounded text-sm font-medium mb-3">
                  Real Estate
                </span>
                <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                  {blog.title}
                </h1>
              </div>

              {/* Meta Info */}
              <div className="px-6 py-4 border-b border-gray-200 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>by <span className="text-emerald-700 font-medium">{blog.author || 'Admin'}</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>{blog.comments || 0} Comments</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blog.readTime}</span>
                </div>
              </div>

              {/* Featured Image */}
              {blog.image && (
                <div className="w-full h-64 md:h-96 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="px-6 py-8">
                {blog.excerpt && (
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {blog.excerpt}
                  </p>
                )}

                <div className="prose max-w-none">
                  {blog.content ? (
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                  ) : (
                    <div className="space-y-4 text-gray-700">
                      <p>
                        Aenean vitae mattis elit. Aenean justo lacus, viverra et ornare sit amet, molestie at purus. 
                        Suspendisse potenti or ac felis tristique, ullamcis lobortis. Nunc malesuada consequat tellus 
                        eget consectetur. Maecenas condimentum elementum turpis sed placerat. Suspendisse potenti lacus lorem.
                      </p>

                      <p>
                        Nullam cursus elit facs. Sed purus ante, scelerisque nec imperdiet vitae, tempus interdum. 
                        Proin vitae vulputate ipsum. Etiam dignissim. Curabitur ultricies ante sed convallis volutpat. 
                        In tincent ligula, nec est ultrices dignissim.
                      </p>

                      <div className="bg-emerald-50 border-l-4 border-emerald-700 p-6 my-6">
                        <p className="text-lg italic text-gray-800">
                          Pellentesque tristique malesuada risus dignissim pretium aliquet ante. Pellentesque volutpat 
                          dignissim sit amet vulputate vitae eu feugiat viverra quis amet dui ligula posuere erat convallis 
                          volutpat eget feugiat
                        </p>
                      </div>

                      <p>
                        Aenean vitae mattis elit. Aenean justo lacus, viverra et ornare sit amet, molestie at purus. 
                        Suspendisse potenti or ac felis tristique, ullamcis lobortis.
                      </p>

                      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        Smart Investment Strategies
                      </h2>

                      <p>
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia cursae. 
                        Curabitur ultricies ante sed convallis volutpat. Etiam a magna nulla. Donec lobortis aliquet 
                        imperdiet ipsum orci nunc, temper ac turpis in nec. Etiam ullam corper, metus nec nunc tristique dui.
                      </p>

                      <div className="my-6">
                        <img 
                          src={blog.image} 
                          alt="Real estate development" 
                          className="w-full rounded-lg"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap items-center gap-3">
                    <Tag className="w-5 h-5 text-gray-400" />
                    <span className="text-sm font-semibold text-gray-600">Tags:</span>
                    {tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm hover:bg-emerald-700 hover:text-white transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-8 space-y-6">
              {/* Social Networks */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Social Networks</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button className="cursor-pointer flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all">
                    <Instagram className="w-5 h-5" />
                    <span className="text-sm font-medium">Instagram</span>
                  </button>
                  <button className="cursor-pointer flex items-center gap-2 bg-blue-400 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all">
                    <Twitter className="w-5 h-5" />
                    <span className="text-sm font-medium">Twitter</span>
                  </button>
                  <button className="cursor-pointer flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all">
                    <Facebook className="w-5 h-5" />
                    <span className="text-sm font-medium">Facebook</span>
                  </button>
                  <button className="cursor-pointer flex items-center gap-2 bg-red-600 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all">
                    <Youtube className="w-5 h-5" />
                    <span className="text-sm font-medium">Youtube</span>
                  </button>
                  <button className="cursor-pointer flex items-center gap-2 bg-red-700 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0a12 12 0 0 0-4.37 23.17c-.06-.56-.12-1.42.03-2.03l.97-4.11s-.25-.5-.25-1.24c0-1.16.67-2.03 1.51-2.03.71 0 1.06.54 1.06 1.18 0 .72-.46 1.79-.7 2.78-.2.84.42 1.52 1.25 1.52 1.5 0 2.65-1.58 2.65-3.86 0-2.02-1.45-3.43-3.52-3.43-2.4 0-3.81 1.8-3.81 3.66 0 .73.28 1.5.63 1.92.07.08.08.15.06.24l-.23.95c-.04.15-.13.18-.29.11-1.05-.49-1.71-2.03-1.71-3.27 0-2.66 1.93-5.1 5.58-5.1 2.93 0 5.21 2.09 5.21 4.88 0 2.91-1.84 5.26-4.38 5.26-.86 0-1.66-.45-1.94-.97l-.53 2.02c-.19.73-.71 1.65-1.06 2.21.8.25 1.64.38 2.52.38 6.63 0 12-5.37 12-12S18.63 0 12 0z"/>
                    </svg>
                    <span className="text-sm font-medium">Pinterest</span>
                  </button>
                  <button className="cursor-pointer flex items-center gap-2 bg-blue-700 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all">
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm font-medium">Linkedin</span>
                  </button>
                </div>
              </div>





              {/* Filter by Keyword */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Filter by Keyword</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <button className="cursor-pointer bg-emerald-700 text-white px-6 py-2 rounded-lg hover:bg-emerald-800 transition-all font-medium">
                    SEARCH
                  </button>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-emerald-700 hover:text-white transition-all text-sm font-medium">
                    RECENT
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-emerald-700 hover:text-white transition-all text-sm font-medium">
                    TRENDY
                  </button>
                </div>
              </div>

              {/* Recent Post */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Post</h3>
                <div className="space-y-4">
                  {recentBlogs.map((post) => (
                    <Link
                      key={post.id}
                      to={`/blogs/${post.id}`}
                      className="flex gap-3 group"
                    >
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-emerald-700 transition-colors mb-1">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Tag Cloud */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Tag Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <button
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-emerald-700 hover:text-white transition-all font-medium"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</>
  );
};

export default BlogDetailsPage;