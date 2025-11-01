// src/context/AppContext.jsx
import React, { createContext, useState, useMemo } from "react";
import { allProperties, communities, priceRanges,allBlogs } from "../data/data"; // import blogs from data.js

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const [selectedCommunities, setSelectedCommunities] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [priceRangeOpen, setPriceRangeOpen] = useState(true);
  const [communitiesOpen, setCommunitiesOpen] = useState(true);

  const filteredProjects = useMemo(() => {
    return allProperties.filter((property) => {
      const communityMatch =
        selectedCommunities.length === 0 ||
        selectedCommunities.includes(property.community);
      const priceMatch =
        selectedPriceRanges.length === 0 ||
        selectedPriceRanges.includes(property.priceRange);
      return communityMatch && priceMatch;
    });
  }, [selectedCommunities, selectedPriceRanges]);

  const selectPropertyById = (id) => {
    const found = allProperties.find((p) => p.id === parseInt(id));
    setSelectedProperty(found || null);
  };

  const resetFilters = () => {
    setSelectedCommunities([]);
    setSelectedPriceRanges([]);
  };

  const value = {
    allProperties,
    communities,
    priceRanges,
    blogs: allBlogs, // <-- add blogs here
    selectedProperty,
    selectPropertyById,
    selectedCommunities,
    setSelectedCommunities,
    selectedPriceRanges,
    setSelectedPriceRanges,
    priceRangeOpen,
    setPriceRangeOpen,
    communitiesOpen,
    setCommunitiesOpen,
    filteredProjects,
    resetFilters,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export default AppProvider;