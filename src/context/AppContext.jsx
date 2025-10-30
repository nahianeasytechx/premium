// src/context/AppContext.jsx

import React, { createContext, useState, useMemo } from "react";
import { allProperties, communities, priceRanges } from "../data/data";

// Create Context
export const AppContext = createContext();

// Provider Component
export const AppProvider = ({ children }) => {
  // ======= STATES =======
  const [selectedProperty, setSelectedProperty] = useState(null);
  
  // Filter states for ProjectGrid
  const [selectedCommunities, setSelectedCommunities] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [priceRangeOpen, setPriceRangeOpen] = useState(true);
  const [communitiesOpen, setCommunitiesOpen] = useState(true);

  // ======= FILTERED PROJECTS =======
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

  // ======= SELECT PROPERTY BY ID =======
  const selectPropertyById = (id) => {
    const found = allProperties.find((p) => p.id === parseInt(id));
    setSelectedProperty(found || null);
  };

  // ======= RESET FILTERS =======
  const resetFilters = () => {
    setSelectedCommunities([]);
    setSelectedPriceRanges([]);
  };

  // ======= CONTEXT VALUE =======
  const value = {
    // Data
    allProperties,
    communities,
    priceRanges,
    
    // Selected property
    selectedProperty,
    selectPropertyById,
    
    // Filter states
    selectedCommunities,
    setSelectedCommunities,
    selectedPriceRanges,
    setSelectedPriceRanges,
    
    // UI states
    priceRangeOpen,
    setPriceRangeOpen,
    communitiesOpen,
    setCommunitiesOpen,
    
    // Filtered results
    filteredProjects,
    
    // Actions
    resetFilters,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};