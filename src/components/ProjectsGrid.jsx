import React, { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import card1 from "../assets/Property/PropertyOne.webp";
import card2 from "../assets/Property/propertyTwo.webp";
import card3 from "../assets/Property/propertyThree.webp";
import card4 from "../assets/Property/propertyFour.webp";
import card5 from "../assets/Property/propertyFive.webp";
import card6 from "../assets/Property/propertySix.webp";
import card7 from "../assets/Property/propertySeven.webp";
import card8 from "../assets/Property/propertyEight.webp";

const ProjectGrid = () => {
  const navigate = useNavigate();
  const [selectedCommunities, setSelectedCommunities] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [priceRangeOpen, setPriceRangeOpen] = useState(false);
  const [communitiesOpen, setCommunitiesOpen] = useState(true);

  const communities = [
    "The Premium City",
    "Ashulia Model Town",
    "The Ati Society",
  ];

  const priceRanges = [
    "Under 50 Lac BDT",
    "50 Lac - 1 Crore BDT",
    "1 Crore - 2 Crore BDT",
    "2 Crore - 5 Crore BDT",
    "Above 5 Crore BDT",
  ];

  const projects = [
    {
      id: 1,
      name: "The Maple Heights",
      location: "Ashulia Model Town",
      types: "STUDIO, 1, 2 BEDROOMS & PENTHOUSE",
      image: card1,
      tag: "NEW RELEASE",
      community: "Ashulia Model Town",
      priceRange: "50 Lac - 1 Crore BDT",
    },
    {
      id: 2,
      name: "The Premium Suite 3.0",
      location: "The Premium Smart City",
      types: "STUDIO, 1 & 2 BEDROOMS",
      image: card2,
      tag: "NEW RELEASE",
      community: "The Premium City",
      priceRange: "Under 50 Lac BDT",
    },
    {
      id: 3,
      name: "The Premium Nobel Court",
      location: "The Premium Smart City",
      types: "STUDIO, 1 & 2 BEDROOMS",
      image: card3,
      tag: "NEW RELEASE",
      community: "The Premium City",
      priceRange: "1 Crore - 2 Crore BDT",
    },
    {
      id: 4,
      name: "The Legacy Residence",
      location: "The Premium Smart City",
      types: "STUDIO, 1 & 2 BEDROOMS",
      image: card4,
      tag: "",
      community: "The Premium City",
      priceRange: "50 Lac - 1 Crore BDT",
    },
    {
      id: 5,
      name: "The Premium Southpoint Villa",
      location: "Ashulia Model Town",
      types: "STUDIO, 1, 2 & 3 BEDROOMS",
      image: card5,
      tag: "",
      community: "Ashulia Model Town",
      priceRange: "2 Crore - 5 Crore BDT",
    },
    {
      id: 6,
      name: "The Premium Studio Suite 4.0",
      location: "Ashulia Model Town",
      types: "STUDIO, 1, 2 & 3 BEDROOMS",
      image: card6,
      tag: "",
      community: "Ashulia Model Town",
      priceRange: "1 Crore - 2 Crore BDT",
    },
    {
      id: 7,
      name: "The Premium Lakeview Terrace",
      location: "Ashulia Model Town",
      types: "STUDIO, 1, 2 & 3 BEDROOMS",
      image: card7,
      tag: "",
      community: "Ashulia Model Town",
      priceRange: "1 Crore - 2 Crore BDT",
    },
    {
      id: 8,
      name: "The Premium Glory Garden",
      location: "The Ati Society",
      types: "STUDIO, 1, 2 & 3 BEDROOMS",
      image: card8,
      tag: "",
      community: "The Ati Society",
      priceRange: "1 Crore - 2 Crore BDT",
    },
  ];

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

  const resetFilters = () => {
    setSelectedCommunities([]);
    setSelectedPriceRanges([]);
  };

  const hasActiveFilters =
    selectedCommunities.length > 0 || selectedPriceRanges.length > 0;

  const filteredProjects = projects.filter((project) => {
    const matchesCommunity =
      selectedCommunities.length === 0 ||
      selectedCommunities.includes(project.community);
    const matchesPrice =
      selectedPriceRanges.length === 0 ||
      selectedPriceRanges.includes(project.priceRange);
    return matchesCommunity && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center gap-6 text-sm">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <span className="text-gray-400">/</span>
          <a href="#" className="text-gray-900 font-medium">
            Projects
          </a>
        </div>
      </div>

      {/* Title Section */}
      <div className="text-center py-12">
        <h2 className="text-gray-500 text-sm tracking-wider mb-2">PROJECTS</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-400 tracking-wide">
          WE ARE RENOWNED FOR FLAGSHIP RESIDENTIAL PROJECTS
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 pb-16">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="w-64 flex-shrink-0">
            <div className="sticky top-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs font-semibold text-gray-600 tracking-wider">
                  FILTER
                </h3>
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="flex items-center gap-1 text-xs text-red-600 hover:text-red-700 font-medium transition-colors"
                  >
                    <X className="w-3 h-3" />
                    Reset
                  </button>
                )}
              </div>

              {/* Communities Filter */}
              <div className="mb-6">
                <button
                  onClick={() => setCommunitiesOpen(!communitiesOpen)}
                  className="flex items-center justify-between w-full text-left mb-4 hover:text-gray-600 transition-colors"
                >
                  <span className="text-sm font-semibold text-gray-900">
                    COMMUNITIES
                    {selectedCommunities.length > 0 && (
                      <span className="ml-2 text-xs bg-gray-900 text-white px-2 py-0.5 rounded-full">
                        {selectedCommunities.length}
                      </span>
                    )}
                  </span>
                  {communitiesOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                {communitiesOpen && (
                  <div className="space-y-3 pl-1">
                    {communities.map((community) => (
                      <label
                        key={community}
                        className="flex items-start cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={selectedCommunities.includes(community)}
                          onChange={() => toggleCommunity(community)}
                          className="w-4 h-4 mt-0.5 border-2 border-gray-300 rounded cursor-pointer accent-gray-900"
                        />
                        <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 leading-tight">
                          {community}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Price Range Filter */}
              <div className="border-t pt-6">
                <button
                  onClick={() => setPriceRangeOpen(!priceRangeOpen)}
                  className="flex items-center justify-between w-full text-left mb-4 hover:text-gray-600 transition-colors"
                >
                  <span className="text-sm font-semibold text-gray-900">
                    PRICE RANGE
                    {selectedPriceRanges.length > 0 && (
                      <span className="ml-2 text-xs bg-gray-900 text-white px-2 py-0.5 rounded-full">
                        {selectedPriceRanges.length}
                      </span>
                    )}
                  </span>
                  {priceRangeOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                {priceRangeOpen && (
                  <div className="space-y-3 pl-1">
                    {priceRanges.map((range) => (
                      <label
                        key={range}
                        className="flex items-start cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={selectedPriceRanges.includes(range)}
                          onChange={() => togglePriceRange(range)}
                          className="w-4 h-4 mt-0.5 border-2 border-gray-300 rounded cursor-pointer accent-gray-900"
                        />
                        <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 leading-tight">
                          {range}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Project Grid */}
          <div className="flex-1">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">
                  No projects found matching your filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-4 px-6 py-2 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <div 
                    key={project.id} 
                    className="group cursor-pointer"
                    onClick={() => navigate(`/property/${project.id}`)}
                  >
                    <div className="relative overflow-hidden bg-gray-100">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {project.tag && (
                        <div className="absolute top-4 right-4 bg-white px-3 py-1 text-xs font-semibold">
                          {project.tag}
                        </div>
                      )}
                    </div>
                    <div className="bg-gray-100 p-4">
                      <p className="text-xs text-gray-600 mb-2">
                        {project.location}
                      </p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {project.name}
                      </h3>
                      {project.types && (
                        <p className="text-xs text-gray-600 flex items-center gap-2">
                          {project.types}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;