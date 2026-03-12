import React, { useState, useEffect } from 'react';
import TourCard from '../../components/TourCard/TourCard';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../../components/AnimatedSection/AnimatedSection';
import ContactBanner from '../../components/ContactBanner/ContactBanner';
import mockApi from '../../services/api';
import type { Tour } from '../../data/tours';
import './Tours.css';

const Tours: React.FC = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTours = async () => {
      try {
        const data = await mockApi.getTours();
        setTours(data);
      } catch (error) {
        console.error('Error loading tours:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTours();
  }, []);

  const filteredTours = filter === 'all' 
    ? tours 
    : tours.filter(tour => tour.country.toLowerCase() === filter.toLowerCase());

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner" />
        <p>Loading tours...</p>
      </div>
    );
  }

  return (
    <div className="tours-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Our Safari Packages</h1>
          <p>Choose from our curated selection of East African adventures</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section section-padding">
        <div className="container">
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Tours
            </button>
            <button 
              className={`filter-btn ${filter === 'rwanda' ? 'active' : ''}`}
              onClick={() => setFilter('rwanda')}
            >
              Rwanda
            </button>
            <button 
              className={`filter-btn ${filter === 'kenya' ? 'active' : ''}`}
              onClick={() => setFilter('kenya')}
            >
              Kenya
            </button>
            <button 
              className={`filter-btn ${filter === 'tanzania' ? 'active' : ''}`}
              onClick={() => setFilter('tanzania')}
            >
              Tanzania
            </button>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <AnimatedSection className="section-padding">
        <div className="container">
          <StaggerContainer className="tours-grid-full">
            {filteredTours.map((tour) => (
              <StaggerItem key={tour.id}>
                <TourCard tour={tour} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* Contact Banner */}
      <ContactBanner />
    </div>
  );
};

export default Tours;
