import React, { useContext, useEffect, useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const ProjectGrid = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isVisible, setIsVisible] = useState(false);
  
  // Get data and filter state from Context
  const {
    allProperties,
    communities,
    priceRanges,
    selectedCommunities,
    setSelectedCommunities,
    selectedPriceRanges,
    setSelectedPriceRanges,
    priceRangeOpen,
    setPriceRangeOpen,
    communitiesOpen,
    setCommunitiesOpen,
    resetFilters,
    filteredProjects
  } = useContext(AppContext);

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Sync URL params with Context state on mount
  useEffect(() => {
    const communitiesParam = searchParams.get("communities");
    const priceRangesParam = searchParams.get("priceRanges");
    
    if (communitiesParam) {
      setSelectedCommunities(communitiesParam.split(","));
    }
    if (priceRangesParam) {
      setSelectedPriceRanges(priceRangesParam.split(","));
    }
  }, []);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (selectedCommunities.length > 0) {
      params.set("communities", selectedCommunities.join(","));
    }
    
    if (selectedPriceRanges.length > 0) {
      params.set("priceRanges", selectedPriceRanges.join(","));
    }
    
    setSearchParams(params, { replace: true });
  }, [selectedCommunities, selectedPriceRanges, setSearchParams]);

  const toggleCommunity = (community) => {
    setSelectedCommunities((prev) =>
      prev.includes(community)
        ? prev.filter((c) => c !== community)
        : [...prev, community]
    );
  };

  const togglePriceRange = (range) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range]
    );
  };

  const handleResetFilters = () => {
    resetFilters();
    setSearchParams({}, { replace: true });
  };

  const hasActiveFilters =
    selectedCommunities.length > 0 || selectedPriceRanges.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 backdrop-blur-sm bg-white/80 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center gap-6 text-sm">
          <button 
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
          >
            Home
          </button>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium">
            Projects
          </span>
        </div>
      </div>

      {/* Title Section */}
      <div className={`text-center py-16 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
        <h2 className="text-green-700 text-xs uppercase tracking-[0.3em] mb-4 font-semibold">
          Projects
        </h2>
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 tracking-tight max-w-5xl mx-auto leading-tight">
          We Are Renowned For Flagship Residential Projects
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-800 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-72 shrink-0 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="lg:sticky lg:top-24 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-sm font-bold text-gray-900 tracking-wider flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  FILTERS
                </h3>
                {hasActiveFilters && (
                  <button
                    onClick={handleResetFilters}
                    className="flex items-center gap-1.5 text-xs text-red-600 hover:text-red-700 font-medium transition-all duration-300 hover:gap-2 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg"
                  >
                    <X className="w-3.5 h-3.5" />
                    Reset
                  </button>
                )}
              </div>

              {/* Communities Filter */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <button
                  onClick={() => setCommunitiesOpen(!communitiesOpen)}
                  className="flex items-center justify-between w-full text-left mb-4 hover:text-green-700 transition-colors duration-300 group"
                >
                  <span className="text-sm font-bold text-gray-900 flex items-center gap-2">
                    COMMUNITIES
                    {selectedCommunities.length > 0 && (
                      <span className="text-xs bg-green-700 text-white px-2.5 py-1 rounded-full font-semibold animate-pulse">
                        {selectedCommunities.length}
                      </span>
                    )}
                  </span>
                  <div className={`transform transition-transform duration-300 ${communitiesOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-green-700" />
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${communitiesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-3 pl-1 pt-2">
                    {communities.map((community, idx) => (
                      <label
                        key={community}
                        className={`flex items-start cursor-pointer group transition-all duration-300 hover:translate-x-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <input
                          type="checkbox"
                          checked={selectedCommunities.includes(community)}
                          onChange={() => toggleCommunity(community)}
                          className="w-4 h-4 mt-0.5 border-2 border-gray-300 rounded cursor-pointer text-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-1 transition-all duration-300"
                        />
                        <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 leading-tight transition-colors duration-300">
                          {community}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <button
                  onClick={() => setPriceRangeOpen(!priceRangeOpen)}
                  className="flex items-center justify-between w-full text-left mb-4 hover:text-green-700 transition-colors duration-300 group"
                >
                  <span className="text-sm font-bold text-gray-900 flex items-center gap-2">
                    PRICE RANGE
                    {selectedPriceRanges.length > 0 && (
                      <span className="text-xs bg-green-700 text-white px-2.5 py-1 rounded-full font-semibold animate-pulse">
                        {selectedPriceRanges.length}
                      </span>
                    )}
                  </span>
                  <div className={`transform transition-transform duration-300 ${priceRangeOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-green-700" />
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${priceRangeOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-3 pl-1 pt-2">
                    {priceRanges.map((range, idx) => (
                      <label
                        key={range}
                        className={`flex items-start cursor-pointer group transition-all duration-300 hover:translate-x-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <input
                          type="checkbox"
                          checked={selectedPriceRanges.includes(range)}
                          onChange={() => togglePriceRange(range)}
                          className="w-4 h-4 mt-0.5 border-2 border-gray-300 rounded cursor-pointer text-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-1 transition-all duration-300"
                        />
                        <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 leading-tight transition-colors duration-300">
                          {range}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Grid */}
          <div className={`flex-1 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {filteredProjects.length === 0 ? (
              <div className="text-center py-24 bg-white rounded-2xl shadow-lg">
                <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <p className="text-gray-500 text-lg mb-6">
                  No projects found matching your filters.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-8 py-3 bg-gradient-to-r from-green-700 to-green-800 text-white text-sm font-semibold hover:from-green-800 hover:to-green-900 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-sm text-gray-600">
                    Showing <span className="font-semibold text-gray-900">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project, idx) => (
                    <div 
                      key={project.id} 
                      className={`group cursor-pointer transition-all duration-500 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      style={{ transitionDelay: `${idx * 100}ms` }}
                      onClick={() => navigate(`/property/${project.id}`)}
                    >
                      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100">
                        <div className="relative overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {project.tag && (
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 text-xs font-bold shadow-lg rounded-lg animate-pulse">
                              {project.tag}
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                          <p className="text-xs text-green-700 mb-2 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {project.location}
                          </p>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300 line-clamp-1">
                            {project.name}
                          </h3>
                          {project.types && (
                            <p className="text-sm text-gray-600 line-clamp-1">
                              {project.types}
                            </p>
                          )}
                          <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                            <span className="text-xs text-gray-500 font-medium">{project.community}</span>
                            <svg className="w-5 h-5 text-green-700 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;