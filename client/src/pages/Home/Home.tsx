import React, { useState, useEffect } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import TourCard from '../../components/TourCard/TourCard';
import DestinationCard from '../../components/DestinationCard/DestinationCard';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import Testimonials from '../../components/Testimonials/Testimonials';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../../components/AnimatedSection/AnimatedSection';
import mockApi from '../../services/api';
import type { Tour, Destination, Testimonial as TestimonialType } from '../../data/tours';
import { FiMail, FiPhone } from 'react-icons/fi';
import './Home.css';

const Home: React.FC = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
  const [loading, setLoading] = useState(true);

  const bookingEmail = 'africanbushwise@gmail.com';
  const bookingPhone = '+250 782 558 395';

  useEffect(() => {
    const loadData = async () => {
      try {
        const [toursData, destinationsData, testimonialsData] = await Promise.all([
          mockApi.getTours(),
          mockApi.getDestinations(),
          mockApi.getTestimonials()
        ]);
        setTours(toursData);
        setDestinations(destinationsData);
        setTestimonials(testimonialsData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const galleryImages = [
    'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1586861244302-8e8a6c508e9f?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1589133461849-13c68788e97f?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1544644181-1484b3fdfba6?w=800&h=600&fit=crop&q=80'
  ];

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner" />
        <p>Loading your African adventure...</p>
      </div>
    );
  }

  return (
    <div className="home-page">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Tours */}
      <AnimatedSection className="tours-section section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Safari Packages</h2>
            <p className="section-subtitle">
              Choose from our handpicked tours designed to give you the ultimate East African experience
            </p>
          </div>

          <StaggerContainer className="tours-grid">
            {tours.slice(0, 6).map((tour) => (
              <StaggerItem key={tour.id}>
                <TourCard tour={tour} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* Popular Destinations */}
      <AnimatedSection className="destinations-section section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Popular Destinations</h2>
            <p className="section-subtitle">
              Explore the incredible diversity of Rwanda, Kenya, and Tanzania
            </p>
          </div>

          <StaggerContainer className="destinations-grid">
            {destinations.slice(0, 8).map((destination) => (
              <StaggerItem key={destination.id}>
                <DestinationCard {...destination} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* Image Gallery */}
      <AnimatedSection className="gallery-section section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Wildlife Gallery</h2>
            <p className="section-subtitle">
              Glimpses of the magnificent wildlife awaiting you on safari
            </p>
          </div>
          <ImageGallery images={galleryImages} />
        </div>
      </AnimatedSection>

      {/* Why Travel With Us */}
      <AnimatedSection className="why-us-section section-padding bg-gradient">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Travel With African Bushwise</h2>
            <p className="section-subtitle">
              We're committed to making your East African adventure unforgettable
            </p>
          </div>

          <StaggerContainer className="features-grid">
            {[
              { icon: '🦁', title: 'Professional Guides', description: 'Expert local guides with deep knowledge of wildlife and culture' },
              { icon: '🛡️', title: 'Safe Travel', description: 'Modern vehicles and 24/7 support for your peace of mind' },
              { icon: '💰', title: 'Affordable Packages', description: 'Competitive pricing without compromising on quality' },
              { icon: '🗺️', title: 'Custom Planning', description: 'Tailored itineraries matching your interests and budget' },
              { icon: '🌍', title: 'Local Expertise', description: 'Insider knowledge of the best locations and hidden gems' },
              { icon: '🌱', title: 'Sustainable Tourism', description: 'Supporting conservation and local communities' }
            ].map((feature, index) => (
              <StaggerItem key={index}>
                <div className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="testimonials-wrapper">
        <Testimonials testimonials={testimonials} />
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="cta-section section-padding">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready for Your African Adventure?</h2>
            <p className="cta-subtitle">
              Let us help you plan the trip of a lifetime. Contact us today for a free consultation.
            </p>
            <div className="cta-contact-box">
              <div className="contact-method">
                <FiMail size={24} />
                <div>
                  <h4>Email Us</h4>
                  <a href={`mailto:${bookingEmail}`}>{bookingEmail}</a>
                </div>
              </div>
              <div className="contact-divider">OR</div>
              <div className="contact-method">
                <FiPhone size={24} />
                <div>
                  <h4>Call Us</h4>
                  <a href={`tel:${bookingPhone}`}>{bookingPhone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;
