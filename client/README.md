# African Bush Wise - Tourism Website

A modern, luxury safari tourism website built with React + TypeScript + Tailwind CSS + Material UI.

## 🦁 Project Overview

This is a complete tourism website frontend for "African Bush Wise", a platform helping travelers explore Rwanda, Kenya, and Tanzania with guided tours and safari packages.

## ✨ Features

- **Cinematic Hero Section** - Full-screen background images with smooth transitions
- **Responsive Design** - Mobile-first, works on all devices
- **Modern UI/UX** - Luxury safari style with glassmorphism effects
- **Smooth Animations** - Powered by Framer Motion
- **Image-Focused** - Masonry gallery, lightbox, zoom effects
- **Interactive Components** - Tour cards, destination cards, testimonials slider
- **Multi-Page** - 6 fully functional pages

## 🚀 Technologies Used

- **React 18** with Vite
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Material UI (MUI)** for form components
- **Framer Motion** for animations
- **React Router** for navigation
- **SwiperJS** for image sliders
- **React Icons** for iconography

## 📁 Project Structure

```
client/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, videos, icons
│   ├── components/        # Reusable UI components
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── HeroSection/
│   │   ├── DestinationCard/
│   │   ├── TourCard/
│   │   ├── ImageGallery/
│   │   ├── Testimonials/
│   │   ├── BookingForm/
│   │   ├── SearchBar/
│   │   └── AnimatedSection/
│   ├── pages/             # Page components
│   │   ├── Home/
│   │   ├── Destinations/
│   │   ├── Tours/
│   │   ├── About/
│   │   └── Contact/
│   ├── layouts/           # Layout components
│   │   └── MainLayout/
│   ├── routes/            # Route configuration
│   ├── data/              # Mock data
│   ├── services/          # API services
│   ├── styles/            # Global styles
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
└── package.json
```

## 🎨 Color Palette

- **Safari Green**: `#2E7D32` - Primary color
- **Safari Sunset**: `#F4A261` - Secondary/accent color
- **Safari Sand**: `#F8F9FA` - Background color
- **Safari Dark**: `#1A1A1A` - Text color
- **Safari Gold**: `#D4AF37` - Accent highlights

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the client folder:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📄 Pages Included

1. **Home** - Hero section, featured tours, destinations, gallery, testimonials, CTA
2. **Destinations** - All destinations with filtering by country
3. **Tours** - Tour packages with country filters
4. **About** - Company story, mission, values, statistics
5. **Contact** - Contact form, office location, map

## 🎯 Key Features

### Components
- ✅ Responsive Navbar with mobile menu
- ✅ Cinematic Hero Section with auto-sliding images
- ✅ Tour Cards with hover effects
- ✅ Destination Cards
- ✅ Image Gallery with lightbox
- ✅ Testimonials Slider (SwiperJS)
- ✅ Search Bar
- ✅ Animated Sections (Framer Motion)

### Design Elements
- ✅ Glassmorphism effects
- ✅ Smooth parallax scrolling
- ✅ Hover animations and transitions
- ✅ Gradient overlays
- ✅ Professional typography
- ✅ Custom scrollbars
- ✅ Loading states

## 🌐 Mock Data

The website includes comprehensive mock data for:
- 6 Safari tour packages (Rwanda, Kenya, Tanzania)
- 12 Destinations across East Africa
- 6 Customer testimonials
- Company features and statistics

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: 768px - 1024px
- Large Desktop: > 1024px

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration with path aliases
- `tailwind.config.js` - Tailwind CSS custom theme
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - PostCSS plugins
- `.env` - Environment variables

## 🎨 Design Inspiration

This website takes design inspiration from high-end safari tourism websites like:
- wildernessdestinations.com
- Luxury safari lodge websites
- Modern travel booking platforms

## 📝 Notes

- All images are loaded from Unsplash (free stock photos)
- Form validations are implemented
- Google Maps integration included on Contact page

## 🚀 Next Steps

To make this production-ready:

1. Replace placeholder images with actual photography
2. Integrate with a real backend API
3. Implement user authentication
5. Add SEO optimization
6. Set up analytics tracking
7. Configure CDN for images
8. Add multi-language support

## 📞 Support

For questions or issues, please contact the development team.

---

**Built by Aristote**

*Discover Rwanda, Kenya, and Tanzania through unforgettable safari adventures!*
