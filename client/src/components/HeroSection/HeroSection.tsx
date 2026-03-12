import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Cinematic background images
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&h=1080&fit=crop&q=80',
      title: 'Explore East Africa',
      subtitle: 'With African Bushwise'
    },
    {
      image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=1920&h=1080&fit=crop&q=80',
      title: 'Gorilla Trekking',
      subtitle: 'Encounter Mountain Gorillas in Rwanda'
    },
    {
      image: 'https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=1920&h=1080&fit=crop&q=80',
      title: 'Serengeti Safari',
      subtitle: 'Witness the Great Migration'
    },
    {
      image: 'https://images.unsplash.com/photo-1586861244302-8e8a6c508e9f?w=1920&h=1080&fit=crop&q=80',
      title: 'Zanzibar Paradise',
      subtitle: 'Pristine Beaches & Crystal Waters'
    }
  ];

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero">
      {/* Background Slides */}
      <div className="hero-slides">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1.1 : 1
            }}
            transition={{ 
              opacity: { duration: 1.5 },
              scale: { duration: 3 }
            }}
            style={{
              backgroundImage: `url(${slide.image})`
            }}
          />
        ))}
        
        {/* Overlay Gradient */}
        <div className="hero-overlay" />
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <motion.div
          className="hero-text-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Explore East Africa With{' '}
            <span className="highlight">African Bushwise</span>
          </motion.h1>

          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Discover Rwanda, Kenya, and Tanzania through unforgettable safari adventures 
            and guided tours.
          </motion.p>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <button 
              className="btn-primary btn-large"
              onClick={() => navigate('/tours')}
            >
              Explore Tours
            </button>
            <button 
              className="btn-outline btn-large"
              onClick={() => navigate('/booking')}
            >
              Plan Your Trip
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 2, duration: 1 },
          y: { repeat: Infinity, duration: 2 }
        }}
        onClick={handleScrollDown}
      >
        <FiChevronDown size={32} />
        <span>Scroll to explore</span>
      </motion.div>

      {/* Slide Indicators */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
