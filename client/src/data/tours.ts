export interface Tour {
  id: number;
  title: string;
  location: string;
  country: 'Rwanda' | 'Kenya' | 'Tanzania';
  price: number;
  duration: string;
  rating: number;
  reviews: number;
  image: string;
  gallery: string[];
  description: string;
  itinerary: DayItinerary[];
  includes: string[];
  excludes: string[];
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  groupSize: number;
}

export interface DayItinerary {
  day: number;
  title: string;
  description: string;
}

export interface Destination {
  id: number;
  name: string;
  country: string;
  description: string;
  image: string;
  bestTime: string;
  highlights: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  country: string;
  image: string;
  rating: number;
  review: string;
  tour: string;
}

export const tours: Tour[] = [
  {
    id: 1,
    title: "3 Day Gorilla Trekking",
    location: "Volcanoes National Park, Rwanda",
    country: 'Rwanda',
    price: 1500,
    duration: "3 Days",
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=1200&h=800&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1589133461849-13c68788e97f?w=1200&h=800&fit=crop&q=80"
    ],
    description: "Experience the adventure of a lifetime trekking through the misty mountains of Rwanda to encounter endangered mountain gorillas in their natural habitat.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kigali & Transfer to Volcanoes National Park",
        description: "Meet your guide, visit the Genocide Memorial, then drive to the foothills of the Virunga Mountains."
      },
      {
        day: 2,
        title: "Gorilla Trekking Experience",
        description: "Early morning briefing, trek through bamboo forest, spend one hour with a gorilla family."
      },
      {
        day: 3,
        title: "Golden Monkey Trekking & Departure",
        description: "Optional golden monkey trekking in the afternoon before returning to Kigali."
      }
    ],
    includes: [
      "Gorilla trekking permit",
      "Professional English-speaking guide",
      "All park fees",
      "Accommodation (2 nights)",
      "All meals during the safari",
      "Airport transfers"
    ],
    excludes: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal expenses",
      "Tips and gratuities"
    ],
    difficulty: 'Moderate',
    groupSize: 8
  },
  {
    id: 2,
    title: "5 Day Serengeti Safari",
    location: "Serengeti National Park, Tanzania",
    country: 'Tanzania',
    price: 2200,
    duration: "5 Days",
    rating: 4.8,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=800&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&h=800&fit=crop&q=80"
    ],
    description: "Witness the incredible wildlife migration and diverse ecosystems of the world-famous Serengeti on this unforgettable 5-day camping safari.",
    itinerary: [
      {
        day: 1,
        title: "Arusha to Serengeti",
        description: "Drive from Arusha through Ngorongoro Conservation Area to Serengeti National Park."
      },
      {
        day: 2,
        title: "Full Day Game Drive in Central Serengeti",
        description: "Explore the Seronera Valley, known for its high concentration of wildlife year-round."
      },
      {
        day: 3,
        title: "Western Corridor Exploration",
        description: "Discover the Grumeti River region and its resident crocodiles and hippos."
      },
      {
        day: 4,
        title: "Northern Serengeti Adventure",
        description: "Venture into the remote northern region, famous for big cats and river crossings."
      },
      {
        day: 5,
        title: "Return to Arusha via Ngorongoro",
        description: "Game drive en route back to Arusha with lunch at Ngorongoro Crater rim."
      }
    ],
    includes: [
      "Professional safari guide",
      "4x4 Land Cruiser with pop-up roof",
      "All park fees and taxes",
      "Camping equipment and tents",
      "All meals during safari",
      "Mineral water provided daily"
    ],
    excludes: [
      "Sleeping bag rental ($20/day)",
      "Hot air balloon safari ($550)",
      "Tips to guide and cook",
      "Personal travel insurance",
      "Alcoholic beverages"
    ],
    difficulty: 'Moderate',
    groupSize: 6
  },
  {
    id: 3,
    title: "4 Day Maasai Mara Adventure",
    location: "Maasai Mara National Reserve, Kenya",
    country: 'Kenya',
    price: 1800,
    duration: "4 Days",
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=1200&h=800&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&h=800&fit=crop&q=80"
    ],
    description: "Explore Kenya's premier wildlife destination, home to the Big Five and the spectacular annual wildebeest migration.",
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Maasai Mara",
        description: "Depart Nairobi early morning, drive through the Great Rift Valley to Maasai Mara."
      },
      {
        day: 2,
        title: "Full Day in the Mara",
        description: "Morning and afternoon game drives searching for lions, leopards, elephants, and more."
      },
      {
        day: 3,
        title: "Mara River & Hippo Pools",
        description: "Visit the famous Mara River crossing points and observe hippos and crocodiles."
      },
      {
        day: 4,
        title: "Maasai Village Visit & Return to Nairobi",
        description: "Cultural visit to a traditional Maasai boma before driving back to Nairobi."
      }
    ],
    includes: [
      "Transport in 4x4 safari vehicle",
      "Professional driver-guide",
      "All park entrance fees",
      "Accommodation in safari lodge",
      "All meals from dinner Day 1 to breakfast Day 4",
      "Game drives as per itinerary"
    ],
    excludes: [
      "Hot air balloon ride ($450)",
      "Maasai village visit fee ($20)",
      "Tips and gratuities",
      "Drinks and alcoholic beverages",
      "Personal items"
    ],
    difficulty: 'Easy',
    groupSize: 7
  },
  {
    id: 4,
    title: "7 Day Zanzibar Beach & Safari",
    location: "Zanzibar Island, Tanzania",
    country: 'Tanzania',
    price: 2800,
    duration: "7 Days",
    rating: 4.9,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1586861244302-8e8a6c508e9f?w=1200&h=800&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586861244302-8e8a6c508e9f?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c78?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfba6?w=1200&h=800&fit=crop&q=80"
    ],
    description: "Combine the thrill of a Tanzanian safari with the relaxation of pristine Zanzibar beaches in this perfect 7-day escape.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description: "Welcome reception and overnight in Arusha before your safari begins."
      },
      {
        day: 2,
        title: "Tarangire National Park",
        description: "Full day game drive in Tarangire, famous for its large elephant herds and baobab trees."
      },
      {
        day: 3,
        title: "Ngorongoro Crater",
        description: "Descend into the world's largest inactive volcanic caldera for exceptional wildlife viewing."
      },
      {
        day: 4,
        title: "Fly to Zanzibar",
        description: "Morning flight to Zanzibar, afternoon at leisure on the beach."
      },
      {
        day: 5,
        title: "Stone Town Tour",
        description: "Explore the UNESCO World Heritage Site of Stone Town with its rich history."
      },
      {
        day: 6,
        title: "Spice Farm & Beach Relaxation",
        description: "Morning spice farm tour, afternoon free to enjoy water sports or spa treatments."
      },
      {
        day: 7,
        title: "Departure",
        description: "Transfer to Zanzibar airport for your onward journey."
      }
    ],
    includes: [
      "Internal flights Arusha-Zanzibar",
      "Safari accommodation (3 nights)",
      "Beach resort accommodation (3 nights)",
      "All safari meals",
      "Bed and breakfast in Zanzibar",
      "All transfers and transport"
    ],
    excludes: [
      "International flights",
      "Lunches and dinners in Zanzibar",
      "Diving or snorkeling excursions",
      "Spa treatments",
      "Visa fees"
    ],
    difficulty: 'Easy',
    groupSize: 10
  },
  {
    id: 5,
    title: "6 Day Complete Rwanda Experience",
    location: "Multiple Locations, Rwanda",
    country: 'Rwanda',
    price: 3200,
    duration: "6 Days",
    rating: 5.0,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1589133461849-13c68788e97f?w=1200&h=800&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1589133461849-13c68788e97f?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&h=800&fit=crop&q=80"
    ],
    description: "Discover the complete Rwanda experience: gorillas, chimpanzees, wildlife safaris, and the serene beauty of Lake Kivu.",
    itinerary: [
      {
        day: 1,
        title: "Kigali City Tour & Genocide Memorial",
        description: "Comprehensive city tour including the poignant Kigali Genocide Memorial."
      },
      {
        day: 2,
        title: "Gorilla Trekking in Volcanoes National Park",
        description: "Full day gorilla trekking experience with permit included."
      },
      {
        day: 3,
        title: "Golden Monkey Trekking",
        description: "Morning trek to see the playful golden monkeys, afternoon transfer to Nyungwe."
      },
      {
        day: 4,
        title: "Nyungwe Forest Chimpanzee Tracking",
        description: "Early morning chimpanzee tracking in one of Africa's oldest rainforests."
      },
      {
        day: 5,
        title: "Canopy Walkway & Lake Kivu",
        description: "Experience the thrilling canopy walkway, then drive to the shores of Lake Kivu."
      },
      {
        day: 6,
        title: "Lake Kivu Relaxation & Departure",
        description: "Morning boat trip or kayaking on Lake Kivu before flying back to Kigali."
      }
    ],
    includes: [
      "Gorilla and chimpanzee permits",
      "All park fees",
      "Luxury accommodation (5 nights)",
      "All meals",
      "Private 4x4 vehicle and driver",
      "Domestic flight Lake Kivu-Kigali"
    ],
    excludes: [
      "International airfare",
      "Rwanda visa ($50)",
      "Travel insurance",
      "Premium wines and spirits",
      "Personal shopping"
    ],
    difficulty: 'Moderate',
    groupSize: 6
  },
  {
    id: 6,
    title: "10 Day Ultimate East Africa Safari",
    location: "Rwanda, Uganda & Tanzania",
    country: 'Tanzania',
    price: 5500,
    duration: "10 Days",
    rating: 5.0,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=800&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=1200&h=800&fit=crop&q=80"
    ],
    description: "The ultimate East African adventure combining gorilla trekking, chimpanzee tracking, and the legendary Serengeti migration.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kigali",
        description: "Welcome to Rwanda! Overnight in Kigali with welcome dinner."
      },
      {
        day: 2,
        title: "Gorilla Trekking - Volcanoes National Park",
        description: "Unforgettable day trekking to meet mountain gorillas."
      },
      {
        day: 3,
        title: "Transfer to Uganda - Queen Elizabeth NP",
        description: "Cross into Uganda, afternoon game drive in search of tree-climbing lions."
      },
      {
        day: 4,
        title: "Chimpanzee Tracking - Kibale Forest",
        description: "Full day chimpanzee tracking in Africa's primate capital."
      },
      {
        day: 5,
        title: "Fly to Serengeti",
        description: "Morning flight to Serengeti, afternoon game drive."
      },
      {
        day: 6,
        title: "Central Serengeti Exploration",
        description: "Full day exploring the endless plains and abundant wildlife."
      },
      {
        day: 7,
        title: "Ngorongoro Crater Day Trip",
        description: "Descend into the crater for exceptional Big Five viewing."
      },
      {
        day: 8,
        title: "Coffee Tour & Cultural Experience",
        description: "Visit a local coffee plantation and learn about Chagga culture."
      },
      {
        day: 9,
        title: "Zanzibar Flight & Beach Time",
        description: "Fly to Zanzibar for well-deserved beach relaxation."
      },
      {
        day: 10,
        title: "Departure from Zanzibar",
        description: "Final breakfast and transfer to airport for your onward journey."
      }
    ],
    includes: [
      "All gorilla and chimpanzee permits",
      "Internal flights (Kigali-Uganda-Tanzania-Zanzibar)",
      "Luxury lodges and tented camps (9 nights)",
      "All meals during safari portions",
      "Professional guides throughout",
      "All park fees and taxes"
    ],
    excludes: [
      "International flights",
      "Visas for Rwanda, Uganda, Tanzania",
      "Zanzibar meals except breakfast",
      "Alcoholic beverages",
      "Personal expenses and tips"
    ],
    difficulty: 'Challenging',
    groupSize: 4
  }
];

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Volcanoes National Park",
    country: "Rwanda",
    description: "Home to the endangered mountain gorillas, this volcanic landscape offers once-in-a-lifetime trekking experiences.",
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=1200&h=800&fit=crop&q=80",
    bestTime: "June-September, December-February",
    highlights: ["Gorilla trekking", "Golden monkey tracking", "Dian Fossey tomb visit", "Volcano climbing"]
  },
  {
    id: 2,
    name: "Nyungwe Forest",
    country: "Rwanda",
    description: "One of Africa's oldest rainforests, teeming with primates including chimpanzees and colobus monkeys.",
    image: "https://images.unsplash.com/photo-1589133461849-13c68788e97f?w=1200&h=800&fit=crop&q=80",
    bestTime: "Year-round",
    highlights: ["Chimpanzee tracking", "Canopy walkway", "Bird watching", "Waterfall hikes"]
  },
  {
    id: 3,
    name: "Akagera National Park",
    country: "Rwanda",
    description: "Rwanda's only savanna park, offering classic Big Five safari experiences in stunning landscapes.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=800&fit=crop&q=80",
    bestTime: "May-September",
    highlights: ["Big Five game drives", "Boat safaris on Lake Ihema", "Bird watching", "Night game drives"]
  },
  {
    id: 4,
    name: "Lake Kivu",
    country: "Rwanda",
    description: "One of Africa's Great Lakes, offering serene beaches, water sports, and charming lakeside towns.",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfba6?w=1200&h=800&fit=crop&q=80",
    bestTime: "Year-round",
    highlights: ["Kayaking", "Boat trips", "Cycling trails", "Coffee plantation tours"]
  },
  {
    id: 5,
    name: "Maasai Mara",
    country: "Kenya",
    description: "World-renowned for the Great Migration and exceptional year-round wildlife viewing.",
    image: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=1200&h=800&fit=crop&q=80",
    bestTime: "July-October (Migration), Year-round for residents",
    highlights: ["Great Migration", "Big Five", "Hot air balloon safaris", "Maasai cultural visits"]
  },
  {
    id: 6,
    name: "Amboseli National Park",
    country: "Kenya",
    description: "Famous for large elephant herds and iconic views of Mount Kilimanjaro across the border in Tanzania.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=800&fit=crop&q=80",
    bestTime: "January-March, June-October",
    highlights: ["Elephant herds", "Kilimanjaro views", "Bird watching", "Maasai villages"]
  },
  {
    id: 7,
    name: "Lake Nakuru",
    country: "Kenya",
    description: "A birdwatcher's paradise known for flamingos, rhinos, and diverse wildlife in a compact area.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&h=800&fit=crop&q=80",
    bestTime: "Year-round",
    highlights: ["Flamingo flocks", "Rhino sanctuary", "Leopard sightings", "Baboon cliffs"]
  },
  {
    id: 8,
    name: "Diani Beach",
    country: "Kenya",
    description: "Pristine white sand beaches lapped by turquoise waters, perfect for diving and relaxation.",
    image: "https://images.unsplash.com/photo-1586861244302-8e8a6c508e9f?w=1200&h=800&fit=crop",
    bestTime: "October-April",
    highlights: ["Scuba diving", "Snorkeling", "Kitesurfing", "Colobus monkey sanctuary"]
  },
  {
    id: 9,
    name: "Serengeti National Park",
    country: "Tanzania",
    description: "The stage for nature's greatest show - the annual wildebeest migration across endless plains.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=800&fit=crop&q=80",
    bestTime: "Year-round (varies by region)",
    highlights: ["Great Migration", "Big Five", "Hot air balloon safaris", "Predator sightings"]
  },
  {
    id: 10,
    name: "Mount Kilimanjaro",
    country: "Tanzania",
    description: "Africa's highest peak and the world's tallest free-standing mountain, offering challenging treks.",
    image: "https://images.unsplash.com/photo-1589133461849-13c68788e97f?w=1200&h=800&fit=crop&q=80",
    bestTime: "January-March, June-October",
    highlights: ["Summit trekking", "Diverse climate zones", "Unique flora and fauna", "Achievement of a lifetime"]
  },
  {
    id: 11,
    name: "Ngorongoro Crater",
    country: "Tanzania",
    description: "The world's largest inactive volcanic caldera, a natural enclosure for incredible wildlife densities.",
    image: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=1200&h=800&fit=crop&q=80",
    bestTime: "Year-round",
    highlights: ["Big Five viewing", "Black rhinos", "Flamingo flocks", "Olduvai Gorge"]
  },
  {
    id: 12,
    name: "Zanzibar",
    country: "Tanzania",
    description: "A tropical paradise combining pristine beaches, rich history, and exotic Spice Island culture.",
    image: "https://images.unsplash.com/photo-1586861244302-8e8a6c508e9f?w=1200&h=800&fit=crop",
    bestTime: "June-October, December-February",
    highlights: ["Stone Town exploration", "Spice farm tours", "Scuba diving", "Sunset dhow cruises"]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    country: "United Kingdom",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review: "The gorilla trekking experience was absolutely life-changing! Our guide was knowledgeable and the entire trip was perfectly organized. I can't recommend African Bushwise enough!",
    tour: "3 Day Gorilla Trekking"
  },
  {
    id: 2,
    name: "Michael Chen",
    country: "United States",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review: "We saw the Big Five in just three days! The Serengeti exceeded all expectations. The accommodations were comfortable and our guide's spotting skills were incredible.",
    tour: "5 Day Serengeti Safari"
  },
  {
    id: 3,
    name: "Emma Johansson",
    country: "Sweden",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    review: "Perfect honeymoon combination of safari and beach! Zanzibar was paradise after the excitement of the Serengeti. Every detail was handled professionally.",
    tour: "7 Day Zanzibar Beach & Safari"
  },
  {
    id: 4,
    name: "James O'Connor",
    country: "Ireland",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    rating: 5,
    review: "The Maasai Mara during migration is something everyone should experience. Witnessing thousands of wildebeest cross the river was breathtaking. Worth every penny!",
    tour: "4 Day Maasai Mara Adventure"
  },
  {
    id: 5,
    name: "Sophie Dubois",
    country: "France",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5,
    review: "Rwanda is a hidden gem! We saw gorillas, chimps, and had an amazing safari all in one week. The country is beautiful and the people so welcoming.",
    tour: "6 Day Complete Rwanda Experience"
  },
  {
    id: 6,
    name: "David Thompson",
    country: "Australia",
    image: "https://randomuser.me/api/portraits/men/57.jpg",
    rating: 5,
    review: "The Ultimate East Africa Safari lived up to its name! Three countries, incredible wildlife encounters, and flawless logistics. This was adventure travel at its finest.",
    tour: "10 Day Ultimate East Africa Safari"
  }
];

export const whyTravelWithUs = [
  {
    icon: "🦁",
    title: "Professional Guides",
    description: "Our expert guides are locally trained, certified, and passionate about sharing their knowledge of African wildlife and culture."
  },
  {
    icon: "🛡️",
    title: "Safe Travel",
    description: "Your safety is our priority. We use modern vehicles, maintain high safety standards, and provide 24/7 support throughout your journey."
  },
  {
    icon: "💰",
    title: "Affordable Packages",
    description: "We offer competitive pricing without compromising quality, ensuring you get the best value for your African adventure."
  },
  {
    icon: "🗺️",
    title: "Custom Safari Planning",
    description: "Every traveler is unique. We tailor itineraries to match your interests, budget, and travel style for a personalized experience."
  },
  {
    icon: "🌍",
    title: "Local Expertise",
    description: "As a locally-based company, we have insider knowledge of the best locations, timing, and hidden gems across East Africa."
  },
  {
    icon: "🌱",
    title: "Sustainable Tourism",
    description: "We're committed to conservation and supporting local communities. Your travels contribute to wildlife protection and community development."
  }
];
