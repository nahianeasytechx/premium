// src/data/data.js

// ✅ Import all property images
import card1 from "../assets/Property/PropertyOne.webp";
import card2 from "../assets/Property/propertyTwo.webp";
import card3 from "../assets/Property/propertyThree.webp";
import card4 from "../assets/Property/propertyFour.webp";
import card5 from "../assets/Property/propertyFive.webp";
import card6 from "../assets/Property/propertySix.webp";
import card7 from "../assets/Property/propertySeven.webp";
import card8 from "../assets/Property/propertyEight.webp";
import blogone from "../assets/blogs/blog1.webp"
import blogtwo from "../assets/blogs/blog2.webp"
// ✅ Communities
export const communities = [
  "The Premium City",
  "Ashulia Model Town",
  "The Ati Society",
];

// ✅ Price Ranges
export const priceRanges = [
  "Under 50 Lac BDT",
  "50 Lac - 1 Crore BDT",
  "1 Crore - 2 Crore BDT",
  "2 Crore - 5 Crore BDT",
  "Above 5 Crore BDT",
];

// ✅ All Properties with Complete Details
export const allProperties = [
  {
    id: 1,
    name: "The Premium Studio Suite 3.0",
    location: "Ashulia Model Town",
    types: "STUDIO, 1, 2 BEDROOMS & PENTHOUSE",
    image: card1,
    tag: "NEW RELEASE",
    community: "Ashulia Model Town",
    priceRange: "50 Lac - 1 Crore BDT",
    hoverText: "The Premium Smart City.",
    
    // Detailed property information
    description: "The Premium Studio Suite 3.0 represents the pinnacle of modern luxury living in Ashulia Model Town. Inspired by timeless elegance and contemporary design, this residential masterpiece combines architectural brilliance with natural harmony, offering residents an unparalleled lifestyle experience.",
    apartmentCount: "156",
    fullLocation: "D Block, Amin Mohammad Model Town, Ashulia",
    
    specifications: [
      { label: "Orientation", value: "South" },
      { label: "Front Road width", value: "60' (South)" },
      { label: "Land Size", value: "120 Katha" },
      { label: "Apartment Size", value: "1400 – 2800 sqft (Simplex)\n3200 – 4800 sqft (Duplex)" },
      { label: "Towers", value: "6" },
      { label: "Number of Apartments", value: "156" },
      { label: "Number of Parkings", value: "180 (including 6 guest parking)" },
      { label: "Number of Floors", value: "B2+B1+G+12" },
    ],
    
    amenities: [
      { name: "Swimming Pool", img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400" },
      { name: "Community Space", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400" },
      { name: "Double Height Reception", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400" },
      { name: "Coworking Space", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400" },
      { name: "Jogging Track", img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400" },
      { name: "Joggers' Hub", img: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400" },
      { name: "Courtyard", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" },
      { name: "Cafeteria", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400" },
      { name: "Clubhouse", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400" },
      { name: "Gym", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400" },
      { name: "Prayer Space", img: "https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?w=400" },
      { name: "Play Area", img: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=400" },
    ],
    
    blueprintFeatures: [
      "Grand Double Height Reception",
      "Tranquil Zen Garden",
      "ATM Booth",
      "Central Garden Entry",
      "Guard Station",
      "Jogging Track",
      "Clubhouse",
      "Play Ground",
      "Prayer Space",
      "Indoor Games",
      "Outdoor Games",
      "GYM",
      "Kids Play Zone",
      "Swimming Pool"
    ],
    
    towers: [
      { name: "Tower 1", floors: "B2+B1+G+12", types: ["A: 2400-2500 SQFT", "B: 2600-2800 SQFT", "C: 2000-2200 SQFT"] },
      { name: "Tower 2", floors: "B2+B1+G+12", types: ["A: 2200-2300 SQFT", "B: 2500-2700 SQFT", "C: 1900 SQFT"] },
      { name: "Tower 3", floors: "B2+B1+G+12", types: ["A: 2700-2800 SQFT", "B: 1800-1900 SQFT", "C: 2100 SQFT"] },
      { name: "Tower 4", floors: "B2+B1+G+12", types: ["A: 2300-2400 SQFT", "B: 2400-2600 SQFT", "C: 1900-2000 SQFT"] },
      { name: "Tower 5", floors: "B2+B1+G+12", types: ["A: 2000-2100 SQFT", "B: 1800-1900 SQFT", "C: 2300-2500 SQFT"] },
      { name: "Tower 6", floors: "B2+B1+G+12", types: ["A: 1800-1900 SQFT", "B: 1900-2000 SQFT", "C: 1950-2050 SQFT"] },
    ],
  },
  {
    id: 2,
    name: "The Legacy Residence",
    location: "The Premium Smart City",
    types: "STUDIO, 1 & 2 BEDROOMS",
    image: card2,
    tag: "NEW RELEASE",
    community: "The Premium City",
    priceRange: "Under 50 Lac BDT",
    hoverText: "Ashulia Model Town",
    
    description: "The Legacy Residence offers modern studio and apartment living in the heart of The Premium Smart City. Designed for young professionals and small families, it combines affordability with premium amenities and contemporary design.",
    apartmentCount: "84",
    fullLocation: "The Premium Smart City, Ashulia",
    
    specifications: [
      { label: "Orientation", value: "East-West" },
      { label: "Front Road width", value: "40' (East)" },
      { label: "Land Size", value: "60 Katha" },
      { label: "Apartment Size", value: "650 – 1500 sqft" },
      { label: "Towers", value: "2" },
      { label: "Number of Apartments", value: "84" },
      { label: "Number of Parkings", value: "96" },
      { label: "Number of Floors", value: "B1+G+10" },
    ],
    
    amenities: [
      { name: "Rooftop Lounge", img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400" },
      { name: "Gym", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400" },
      { name: "Coworking Space", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400" },
      { name: "Community Hall", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400" },
      { name: "Security", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" },
    ],
    
    blueprintFeatures: [
      "Modern Reception Area",
      "24/7 Security System",
      "Backup Generator",
      "Fire Safety System",
      "CCTV Monitoring",
      "Rooftop Garden",
      "Community Lounge",
      "Gym Facility"
    ],
    
    towers: [
      { name: "Tower A", floors: "B1+G+10", types: ["Studio: 650-800 SQFT", "1 Bed: 900-1100 SQFT", "2 Bed: 1200-1500 SQFT"] },
      { name: "Tower B", floors: "B1+G+10", types: ["Studio: 700-850 SQFT", "1 Bed: 950-1150 SQFT", "2 Bed: 1300-1500 SQFT"] },
    ],
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
    hoverText: "D Block, Amin Mohammad Model Town, Ashulia.",
    
    description: "Nobel Court brings prestigious living to The Premium Smart City. Named to honor excellence and achievement, this development offers spacious apartments with world-class amenities and sophisticated design for discerning residents.",
    apartmentCount: "120",
    fullLocation: "The Premium Smart City, Block D, Ashulia",
    
    specifications: [
      { label: "Orientation", value: "South" },
      { label: "Front Road width", value: "50' (South)" },
      { label: "Land Size", value: "95 Katha" },
      { label: "Apartment Size", value: "1600 – 2400 sqft" },
      { label: "Towers", value: "4" },
      { label: "Number of Apartments", value: "120" },
      { label: "Number of Parkings", value: "145" },
      { label: "Number of Floors", value: "B2+G+11" },
    ],
    
    amenities: [
      { name: "Pool", img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400" },
      { name: "Gym & Spa", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400" },
      { name: "Library", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400" },
      { name: "Banquet Hall", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400" },
      { name: "Tennis Court", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400" },
      { name: "Children's Play Area", img: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=400" },
    ],
    
    blueprintFeatures: [
      "Grand Lobby",
      "Infinity Pool",
      "State-of-the-art Gym",
      "Spa & Wellness Center",
      "Business Center",
      "Kids Play Zone",
      "Landscaped Gardens",
      "BBQ Area",
      "Meditation Space",
      "Multi-purpose Hall"
    ],
    
    towers: [
      { name: "Tower 1", floors: "B2+G+11", types: ["A: 1600-1800 SQFT", "B: 2000-2200 SQFT"] },
      { name: "Tower 2", floors: "B2+G+11", types: ["A: 1700-1900 SQFT", "B: 2100-2400 SQFT"] },
      { name: "Tower 3", floors: "B2+G+11", types: ["A: 1650-1850 SQFT", "B: 2050-2300 SQFT"] },
      { name: "Tower 4", floors: "B2+G+11", types: ["A: 1800-2000 SQFT", "B: 2200-2400 SQFT"] },
    ],
  },
  {
    id: 4,
    name: "The  Maple Heights",
    location: "The Premium Smart City",
    types: "STUDIO, 1 & 2 BEDROOMS",
    image: card4,
    tag: "",
    community: "The Premium City",
    priceRange: "50 Lac - 1 Crore BDT",
    hoverText: "Ashulia Model Town",
    
    description: "Legacy Residence stands as a testament to timeless design and quality construction. Each apartment is crafted to create lasting memories for families, combining classic architecture with modern conveniences.",
    apartmentCount: "96",
    fullLocation: "The Premium Smart City, Ashulia",
    
    specifications: [
      { label: "Orientation", value: "North-South" },
      { label: "Front Road width", value: "45' (North)" },
      { label: "Land Size", value: "75 Katha" },
      { label: "Apartment Size", value: "1200 – 2000 sqft" },
      { label: "Towers", value: "3" },
      { label: "Number of Apartments", value: "96" },
      { label: "Number of Parkings", value: "110" },
      { label: "Number of Floors", value: "B1+G+10" },
    ],
    
    amenities: [
      { name: "Swimming Pool", img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400" },
      { name: "Fitness Center", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400" },
      { name: "Garden", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" },
      { name: "Parking", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400" },
    ],
    
    blueprintFeatures: [
      "Elegant Reception",
      "Landscaped Gardens",
      "Children's Play Area",
      "Walking Paths",
      "Security Gate",
      "Community Center",
      "Fitness Facility",
      "Rooftop Terrace"
    ],
    
    towers: [
      { name: "Tower A", floors: "B1+G+10", types: ["1 Bed: 1200-1400 SQFT", "2 Bed: 1600-1800 SQFT"] },
      { name: "Tower B", floors: "B1+G+10", types: ["1 Bed: 1250-1450 SQFT", "2 Bed: 1650-1900 SQFT"] },
      { name: "Tower C", floors: "B1+G+10", types: ["1 Bed: 1300-1500 SQFT", "2 Bed: 1700-2000 SQFT"] },
    ],
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
    hoverText: "Amin Mohammad Model Town, Ashulia.",
    
    description: "Southpoint Villa represents the ultimate in luxury villa-style living. With spacious layouts, private gardens, and exclusive amenities, this development caters to families seeking privacy and prestige in a gated community setting.",
    apartmentCount: "48",
    fullLocation: "Amin Mohammad Model Town, Ashulia",
    
    specifications: [
      { label: "Orientation", value: "South" },
      { label: "Front Road width", value: "80' (South)" },
      { label: "Land Size", value: "180 Katha" },
      { label: "Apartment Size", value: "2500 – 4500 sqft (Simplex)\n5000 – 7000 sqft (Duplex)" },
      { label: "Towers", value: "2" },
      { label: "Number of Apartments", value: "48" },
      { label: "Number of Parkings", value: "96 (including private garages)" },
      { label: "Number of Floors", value: "G+6" },
    ],
    
    amenities: [
      { name: "Private Pool", img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400" },
      { name: "Luxury Spa", img: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400" },
      { name: "Private Gardens", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" },
      { name: "Concierge Service", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400" },
      { name: "Wine Cellar", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400" },
      { name: "Home Theater", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400" },
    ],
    
    blueprintFeatures: [
      "Private Entrance Gates",
      "Concierge Services",
      "Landscaped Private Gardens",
      "Premium Clubhouse",
      "Infinity Pool Complex",
      "Tennis & Squash Courts",
      "Spa & Wellness Center",
      "Fine Dining Restaurant",
      "Business Lounge",
      "VIP Event Space"
    ],
    
    towers: [
      { name: "Villa Block A", floors: "G+6", types: ["2 Bed: 2500-3000 SQFT", "3 Bed: 3500-4000 SQFT", "Penthouse: 5000-7000 SQFT"] },
      { name: "Villa Block B", floors: "G+6", types: ["2 Bed: 2600-3200 SQFT", "3 Bed: 3600-4500 SQFT", "Penthouse: 5500-7000 SQFT"] },
    ],
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
    hoverText: "Ashulia Model Town",
    
    description: "Studio Suite 4.0 is the latest iteration of our successful studio concept, offering smart living spaces perfect for modern urban lifestyles. With flexible layouts and cutting-edge technology integration.",
    apartmentCount: "200",
    fullLocation: "Ashulia Model Town, Main Avenue",
    
    specifications: [
      { label: "Orientation", value: "East" },
      { label: "Front Road width", value: "50' (East)" },
      { label: "Land Size", value: "110 Katha" },
      { label: "Apartment Size", value: "800 – 1800 sqft" },
      { label: "Towers", value: "5" },
      { label: "Number of Apartments", value: "200" },
      { label: "Number of Parkings", value: "220" },
      { label: "Number of Floors", value: "B1+G+13" },
    ],
    
    amenities: [
      { name: "Smart Home System", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" },
      { name: "Coworking Spaces", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400" },
      { name: "Rooftop Bar", img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400" },
      { name: "Gym", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400" },
      { name: "Yoga Studio", img: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400" },
    ],
    
    blueprintFeatures: [
      "Smart Building Technology",
      "Modern Lobby",
      "Co-working Hub",
      "Rooftop Bar & Lounge",
      "Yoga & Meditation Studio",
      "Podcast Studio",
      "Gaming Zone",
      "Pet Park"
    ],
    
    towers: [
      { name: "Tower 1", floors: "B1+G+13", types: ["Studio: 800-900 SQFT", "1 Bed: 1000-1200 SQFT"] },
      { name: "Tower 2", floors: "B1+G+13", types: ["Studio: 850-950 SQFT", "1 Bed: 1100-1300 SQFT"] },
      { name: "Tower 3", floors: "B1+G+13", types: ["1 Bed: 1150-1350 SQFT", "2 Bed: 1500-1700 SQFT"] },
      { name: "Tower 4", floors: "B1+G+13", types: ["2 Bed: 1550-1750 SQFT", "3 Bed: 1700-1800 SQFT"] },
    ],
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
    hoverText: "D Block, Amin Mohammad Model Town, Ashulia.",
    
    description: "Lakeview Terrace offers breathtaking views of the adjacent lake, providing residents with a serene environment. Every apartment features private balconies overlooking the water, creating a resort-like atmosphere.",
    apartmentCount: "108",
    fullLocation: "D Block, Amin Mohammad Model Town, Ashulia",
    
    specifications: [
      { label: "Orientation", value: "Lake-facing (West)" },
      { label: "Front Road width", value: "60' (West)" },
      { label: "Land Size", value: "135 Katha" },
      { label: "Apartment Size", value: "1500 – 2800 sqft" },
      { label: "Towers", value: "3" },
      { label: "Number of Apartments", value: "108" },
      { label: "Number of Parkings", value: "130" },
      { label: "Number of Floors", value: "B2+G+11" },
    ],
    
    amenities: [
      { name: "Lakefront Promenade", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" },
      { name: "Water Sports", img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400" },
      { name: "Infinity Pool", img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400" },
      { name: "Sunset Deck", img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400" },
      { name: "Boat House", img: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400" },
    ],
    
    blueprintFeatures: [
      "Lakefront Access",
      "Private Marina",
      "Waterfront Restaurant",
      "Sunset View Deck",
      "Kayaking Dock",
      "Fishing Pier",
      "Lake View Gym",
      "Meditation Pavilion",
      "BBQ Area",
      "Event Lawn"
    ],
    
    towers: [
      { name: "Lakeview 1", floors: "B2+G+11", types: ["1 Bed: 1500-1700 SQFT", "2 Bed: 2000-2300 SQFT", "3 Bed: 2500-2800 SQFT"] },
      { name: "Lakeview 2", floors: "B2+G+11", types: ["1 Bed: 1550-1750 SQFT", "2 Bed: 2100-2400 SQFT", "3 Bed: 2600-2800 SQFT"] },
      { name: "Lakeview 3", floors: "B2+G+11", types: ["1 Bed: 1600-1800 SQFT", "2 Bed: 2200-2500 SQFT", "3 Bed: 2650-2800 SQFT"] },
    ],
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
    hoverText: "Amin Mohammad Model Town, Ashulia.",
    
    description: "Glory Garden celebrates nature and sustainable living. With extensive green spaces, rooftop gardens, and eco-friendly features, this development offers a harmonious blend of urban convenience and natural beauty.",
    apartmentCount: "144",
    fullLocation: "The Ati Society, Ashulia",
    
    specifications: [
      { label: "Orientation", value: "South-East" },
      { label: "Front Road width", value: "55' (South)" },
      { label: "Land Size", value: "145 Katha" },
      { label: "Apartment Size", value: "1400 – 2600 sqft" },
      { label: "Towers", value: "4" },
      { label: "Number of Apartments", value: "144" },
      { label: "Number of Parkings", value: "165" },
      { label: "Number of Floors", value: "B2+G+11" },
    ],
    
    amenities: [
      { name: "Vertical Gardens", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" },
      { name: "Organic Farm", img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400" },
      { name: "Butterfly Garden", img: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400" },
      { name: "Solar Panels", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400" },
      { name: "Rainwater Harvesting", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400" },
      { name: "Green Gym", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400" },
    ],
    
    blueprintFeatures: [
      "Rooftop Gardens",
      "Organic Farming Area",
      "Composting Facility",
      "Solar Power System",
      "Rainwater Collection",
      "Natural Swimming Pool",
      "Herb Garden",
      "Butterfly Sanctuary",
      "Eco-friendly Gym",
      "Nature Trail"
    ],
    
    towers: [
      { name: "Garden Tower 1", floors: "B2+G+11", types: ["1 Bed: 1400-1600 SQFT", "2 Bed: 1900-2200 SQFT"] },
      { name: "Garden Tower 2", floors: "B2+G+11", types: ["1 Bed: 1450-1650 SQFT", "2 Bed: 2000-2300 SQFT"] },
      { name: "Garden Tower 3", floors: "B2+G+11", types: ["2 Bed: 2100-2400 SQFT", "3 Bed: 2400-2600 SQFT"] },
      { name: "Garden Tower 4", floors: "B2+G+11", types: ["2 Bed: 2150-2450 SQFT", "3 Bed: 2500-2600 SQFT"] },
    ],
  },
  {
    id: 9,
    name: "The Premium Green Heaven",
    location: "Ashulia Model Town",
    types: "STUDIO, 1, 2 & 3 BEDROOMS",
    image: card5,
    tag: "",
    community: "Ashulia Model Town",
    priceRange: "1 Crore - 2 Crore BDT",
    hoverText: "D Block, Amin Mohammad Model Town, Ashulia.",
    
    description: "Green Heaven is designed as an urban oasis, where lush greenery meets contemporary architecture. With over 60% green coverage and sustainable design principles, it offers residents a peaceful retreat from city life.",
    apartmentCount: "132",
    fullLocation: "D Block, Amin Mohammad Model Town, Ashulia",
    
    specifications: [
      { label: "Orientation", value: "North" },
      { label: "Front Road width", value: "50' (North)" },
      { label: "Land Size", value: "125 Katha" },
      { label: "Apartment Size", value: "1350 – 2500 sqft" },
      { label: "Towers", value: "4" },
      { label: "Number of Apartments", value: "132" },
      { label: "Number of Parkings", value: "155" },
      { label: "Number of Floors", value: "B1+G+10" },
    ],
    
    amenities: [
      { name: "Botanical Garden", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" },
      { name: "Jogging Track", img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400" },
      { name: "Yoga Lawn", img: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400" },
      { name: "Swimming Pool", img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400" },
      { name: "Kids Garden", img: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=400" },
      { name: "Community Garden", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400" },
    ],
    
    blueprintFeatures: [
      "Central Green Park",
      "Tree-lined Pathways",
      "Community Vegetable Garden",
      "Meditation Garden",
      "Children's Nature Play Area",
      "Bird Watching Deck",
      "Outdoor Yoga Space",
      "Picnic Areas",
      "Walking & Cycling Paths",
      "Natural Pond"
    ],
    
    towers: [
      { name: "Tower A", floors: "B1+G+10", types: ["1 Bed: 1350-1500 SQFT", "2 Bed: 1800-2100 SQFT"] },
      { name: "Tower B", floors: "B1+G+10", types: ["1 Bed: 1400-1550 SQFT", "2 Bed: 1900-2200 SQFT"] },
      { name: "Tower C", floors: "B1+G+10", types: ["2 Bed: 2000-2300 SQFT", "3 Bed: 2300-2500 SQFT"] },
      { name: "Tower D", floors: "B1+G+10", types: ["2 Bed: 2100-2400 SQFT", "3 Bed: 2400-2500 SQFT"] },
    ],
  },
];

export const allBlogs = [ /* your blog data stays exactly as is */ 
    {
      id: 1,
      title: "We are proud to share that The Premium Homes Ltd. was the Title Partner of TEDxDaffodilU 202",
      excerpt: "Discover the essential factors you need to evaluate before making one of life's biggest investments.",
      image: blogone,
      author: "Sarah Johnson",
      date: "Oct 15, 2024",
      comments: 24,
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Collaborative Discussion with the Honorable Vice Chancellor of City University about The Premium Smart City of The Premium Homes Ltd.",
      excerpt: "Explore the latest interior design trends that are shaping homes and commercial spaces this year.",
      image: blogtwo,
      author: "Michael Chen",
      date: "Oct 12, 2024",
      comments: 18,
      readTime: "7 min read",
    },
    // ...rest stays unchanged
  ];