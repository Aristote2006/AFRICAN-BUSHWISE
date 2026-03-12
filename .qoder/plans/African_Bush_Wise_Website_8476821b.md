# African Bush Wise Tourism Website Implementation Plan

## Phase 1: Project Setup & Configuration

### 1.1 Initialize Vite + React + TypeScript Project
- Create `client` folder structure
- Initialize Vite project with React template
- Install all required dependencies:
  - `react-router-dom` (routing)
  - `@mui/material`, `@emotion/react`, `@emotion/styled` (Material UI)
  - `tailwindcss`, `postcss`, `autoprefixer` (Tailwind CSS)
  - `framer-motion` (animations)
  - `react-icons` (icons)
  - `axios` (API calls)
  - `swiper` (image sliders)

### 1.2 Configure Build Tools
- **vite.config.ts**: Set up Vite configuration with path aliases
- **tailwind.config.js**: Configure custom color palette (Safari Green #2E7D32, Safari Sunset #F4A261)
- **tsconfig.json**: Set up TypeScript paths and strict mode
- **.env.example**: Environment variables template

### 1.3 Project Structure Setup
Create complete folder structure:
```
client/
├── public/images, icons, videos
├── src/assets/images, videos, icons
├── src/components/ (10+ reusable components)
├── src/pages/ (6 pages)
├── src/layouts/MainLayout
├── src/routes/AppRoutes.tsx
├── src/data/tours.ts
├── src/services/api.ts
├── src/hooks/
├── src/utils/
├── src/styles/global.css
├── src/App.tsx
└── src/main.tsx
```

## Phase 2: Core Components Implementation

### 2.1 Navbar Component (`src/components/Navbar/Navbar.tsx`)
- Responsive navigation with logo "African Bush Wise"
- Desktop menu: Home, Destinations, Tours, Booking, About, Contact
- Mobile hamburger menu with slide animation
- Transparent to solid on scroll
- Sticky header with smooth transition

### 2.2 Footer Component (`src/components/Footer/Footer.tsx`)
- Company description
- Quick links navigation
- Contact information
- Social media icons (Facebook, Instagram, Twitter)
- Newsletter signup
- Copyright section

### 2.3 HeroSection Component (`src/components/HeroSection/HeroSection.tsx`)
- Full-screen cinematic hero (100vh)
- Background video/sliding images of African wildlife
- Dark overlay gradient (#000000 with 50% opacity)
- Animated title: "Explore East Africa With African Bush Wise"
- Subtitle about Rwanda, Kenya, Tanzania
- Two CTA buttons: "Explore Tours" & "Plan Your Trip"
- Scroll-down animated indicator
- Parallax scrolling effect
- Framer Motion text animations

### 2.4 DestinationCard Component (`src/components/DestinationCard/DestinationCard.tsx`)
- Large landscape image with hover zoom
- Destination name (Rwanda, Kenya, Tanzania)
- Short description
- "View Tours" button
- Smooth hover animations
- Glassmorphism card effect

### 2.5 TourCard Component (`src/components/TourCard/TourCard.tsx`)
- High-quality tour image
- Tour title and location
- Duration badge (e.g., "3 Days")
- Price display ($1500)
- Rating stars (4.9/5)
- Description preview
- "Book Now" CTA button
- Hover lift effect with shadow

### 2.6 ImageGallery Component (`src/components/ImageGallery/ImageGallery.tsx`)
- Masonry grid layout
- Wildlife images (lions, elephants, gorillas)
- Safari scenes and landscapes
- Lightbox view on click
- Zoom effect on hover
- Infinite scroll capability
- Lazy loading for performance

### 2.7 Testimonials Component (`src/components/Testimonials/Testimonials.tsx`)
- SwiperJS carousel slider
- Tourist photos and names
- Country flags
- Review text
- Star ratings
- Navigation arrows and dots
- Auto-play with pause on hover

### 2.8 BookingForm Component (`src/components/BookingForm/BookingForm.tsx`)
- Material UI form components
- Fields: Full Name, Email, Country, Select Tour, Travelers, Travel Date, Message
- Form validation
- Submit button with loading state
- Success/error messages
- Responsive layout

### 2.9 SearchBar Component (`src/components/SearchBar/SearchBar.tsx`)
- Destination search
- Date pickers
- Guest counter
- Search button
- Filter dropdowns
- Floating label design

### 2.10 AnimatedSection Component (`src/components/AnimatedSection/AnimatedSection.tsx`)
- Wrapper component using Framer Motion
- Fade-in on scroll
- Slide-up animations
- Stagger children animations
- Intersection Observer for trigger

## Phase 3: Page Implementation

### 3.1 Home Page (`src/pages/Home/Home.tsx`)
**Sections:**
1. **HeroSection**: Full-screen cinematic intro
2. **Featured Tours**: Grid of 4-6 premium tour cards
   - Gorilla Trekking Rwanda
   - Serengeti Safari Tanzania
   - Maasai Mara Safari Kenya
   - Zanzibar Beach Holiday
3. **Popular Destinations**: Grid cards for Rwanda, Kenya, Tanzania with sub-destinations
4. **Image Gallery**: Masonry wildlife photo gallery
5. **Why Travel With Us**: Icon-based features
   - Professional Guides
   - Safe Travel
   - Affordable Packages
   - Custom Safari Planning
   - Local Expertise
6. **Testimonials**: Customer reviews slider
7. **CTA Section**: Final booking encouragement

### 3.2 Destinations Page (`src/pages/Destinations/Destinations.tsx`)
**Rwanda Section:**
- Volcanoes National Park (gorillas)
- Nyungwe Forest (chimpanzees)
- Akagera National Park (savanna wildlife)
- Lake Kivu (relaxation)

**Kenya Section:**
- Maasai Mara (great migration)
- Amboseli National Park (elephants + Kilimanjaro views)
- Lake Nakuru (flamingos)
- Diani Beach (coastal beauty)

**Tanzania Section:**
- Serengeti (wildlife migration)
- Mount Kilimanjaro (trekking)
- Ngorongoro Crater (crater wildlife)
- Zanzibar (beaches & culture)

Each destination includes:
- Large hero image
- Description
- Best time to visit
- Featured tours link
- Photo gallery

### 3.3 Tours Page (`src/pages/Tours/Tours.tsx`)
**Tour Package Cards:**
1. **3 Day Gorilla Trekking – Rwanda** - $1500
   - Includes permits, accommodation, meals
   - Difficulty: Moderate
   - Group size: Max 8

2. **5 Day Serengeti Safari – Tanzania** - $2200
   - Game drives, camping/lodge options
   - Migration viewing
   - Professional guide

3. **4 Day Maasai Mara Adventure – Kenya** - $1800
   - Cultural visits included
   - Hot air balloon option
   - All park fees included

4. **7 Day Complete East Africa Safari** - $3500
   - Rwanda + Kenya + Tanzania
   - Best value package
   - Premium accommodation

**Filter Options:**
- By country
- By duration
- By price range
- By difficulty level

### 3.4 Booking Page (`src/pages/Booking/Booking.tsx`)
- Multi-step booking form
- Step 1: Personal Information
- Step 2: Tour Selection & Dates
- Step 3: Additional Services (airport pickup, extra nights)
- Step 4: Payment Information (placeholder)
- Step 5: Confirmation
- Progress indicator
- Form validation with error messages
- Success confirmation page

### 3.5 About Page (`src/pages/About/About.tsx`)
**Sections:**
- Company story and mission
- "Why African Bush Wise" values
- Team introduction (founder, guides)
- Certifications and partnerships
- Sustainability commitment
- Statistics (years experience, happy travelers, tours completed)
- Timeline of company growth
- Call-to-action section

### 3.6 Contact Page (`src/pages/Contact/Contact.tsx`)
- Contact form (name, email, subject, message)
- Contact information:
  - Email: info@africanbushwise.com
  - Phone: +250 XXX XXX XXX
  - Address: Kigali, Rwanda (or multiple offices)
- Google Maps embed (Kigali office location)
- Office hours
- FAQ accordion section
- Social media links

## Phase 4: Layout & Routing

### 4.1 MainLayout (`src/layouts/MainLayout/MainLayout.tsx`)
- Navbar at top
- Footer at bottom
- Children content in between
- Consistent padding and max-width
- Smooth page transitions

### 4.2 App Routes (`src/routes/AppRoutes.tsx`)
```typescript
Routes configuration:
/ → Home
/destinations → Destinations
/tours → Tours
/booking → Booking
/about → About
/contact → Contact
* → 404 Page
```

### 4.3 App.tsx
- BrowserRouter setup
- Route definitions
- Global providers (ThemeProvider if needed)

### 4.4 main.tsx
- React DOM rendering
- Global styles import
- Strict mode

## Phase 5: Data & Services

### 5.1 Mock Data (`src/data/tours.ts`)
```typescript
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
  itinerary: Day[];
  includes: string[];
  excludes: string[];
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  groupSize: number;
}

export const tours: Tour[] = [
  // 10+ tour packages with complete data
];

export const destinations = [
  Rwanda destinations
  Kenya destinations
  Tanzania destinations
];

export const testimonials = [...];
```

### 5.2 API Service (`src/services/api.ts`)
- Axios instance configuration
- Mock API functions:
  - `getTours()`
  - `getTourById(id)`
  - `getDestinations()`
  - `submitBooking(data)`
  - `contactForm(data)`
- Simulated delays for realistic behavior
- Error handling

## Phase 6: Styling & Design System

### 6.1 Global Styles (`src/styles/global.css`)
- Tailwind directives
- Custom CSS variables for colors
- Typography settings
- Scroll behavior
- Utility classes
- Reset styles

### 6.2 Color Palette Implementation
```javascript
// tailwind.config.js theme.extend.colors
safariGreen: '#2E7D32',
safariSunset: '#F4A261',
safariSand: '#F8F9FA',
safariDark: '#1A1A1A',
safariGold: '#D4AF37'
```

### 6.3 Typography
- Headings: Bold, modern sans-serif
- Body: Clean, readable
- Quotes: Italic accent

### 6.4 Design Effects
- **Glassmorphism**: Backdrop blur with transparency
- **Gradients**: Subtle overlays on images
- **Shadows**: Soft, layered shadows
- **Borders**: Thin, elegant borders
- **Animations**: Smooth ease-in-out transitions

## Phase 7: Animations with Framer Motion

### 7.1 Animation Variants
```typescript
// fadeInUp
// fadeInLeft
// fadeInRight
// staggerContainer
// scaleUp
// rotateIn
```

### 7.2 Page Transitions
- Fade in on route change
- Slide up for new pages
- Smooth scroll restoration

### 7.3 Component Animations
- Hero text stagger animation
- Card hover scale effects
- Button ripple effects
- Image parallax on scroll
- Icon bounce on hover

## Phase 8: Responsive Design

### 8.1 Breakpoints
```javascript
// tailwind.config.js
screens: {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}
```

### 8.2 Mobile Optimizations
- Hamburger menu
- Stacked layouts
- Touch-friendly buttons
- Swipeable image galleries
- Bottom navigation option

### 8.3 Tablet Optimizations
- 2-column grids
- Adjusted spacing
- Sidebar filters

## Phase 9: Performance Optimization

### 9.1 Image Optimization
- Lazy loading with Intersection Observer
- WebP format where supported
- Responsive image sizes (srcset)
- Blur placeholder during load
- CDN-ready structure

### 9.2 Code Splitting
- Lazy load pages with React.lazy
- Dynamic imports for heavy components
- Preload critical resources

### 9.3 Bundle Optimization
- Tree shaking
- Minification
- Gzip compression ready

## Phase 10: Testing & Polish

### 10.1 Component Testing
- Render tests for all components
- Interaction tests for forms
- Snapshot tests for complex components

### 10.2 Cross-Browser Testing
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

### 10.3 Final Polish
- Fix all console warnings
- Optimize animation performance
- Ensure consistent spacing
- Perfect alignment
- Accessibility improvements (ARIA labels)

## Deliverables

✅ Complete React + TypeScript project in `client` folder
✅ 10+ reusable components with professional code
✅ 6 fully functional pages
✅ Responsive design (mobile, tablet, desktop)
✅ Smooth animations with Framer Motion
✅ Material UI integration
✅ Tailwind CSS custom styling
✅ Mock data for tours and destinations
✅ Image-focused luxury safari design
✅ Cinematic hero section
✅ Modern booking form
✅ Professional documentation in comments

## Estimated File Count
- Components: 10+ files
- Pages: 6 files
- Layouts: 1 file
- Routes: 1 file
- Data: 1 file
- Services: 1 file
- Utils: 2-3 files
- Config files: 5-6 files
- Styles: 2-3 files
**Total: ~35-40 TypeScript/TSX files**

This plan will deliver a production-ready, visually stunning tourism website frontend that matches the luxury safari aesthetic of wildernessdestinations.com while maintaining modern React best practices.