import React, { useState, useEffect } from 'react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../../components/AnimatedSection/AnimatedSection';
import DestinationCard from '../../components/DestinationCard/DestinationCard';
import ContactBanner from '../../components/ContactBanner/ContactBanner';
import mockApi from '../../services/api';
import type { Destination } from '../../data/tours';
import './Destinations.css';

const Destinations: React.FC = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDestinations = async () => {
      try {
        const data = await mockApi.getDestinations();
        setDestinations(data);
      } catch (error) {
        console.error('Error loading destinations:', error);
      } finally {
        setLoading(false);
      }
    };

    loadDestinations();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner" />
        <p>Loading destinations...</p>
      </div>
    );
  }

  return (
    <div className="destinations-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Explore Our Destinations</h1>
          <p>Discover the incredible diversity of East Africa's landscapes and wildlife</p>
        </div>
      </section>

      {/* Destinations Grid */}
      <AnimatedSection className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">All Destinations</h2>
            <p className="section-subtitle">
              From volcanic mountains to pristine beaches, explore the diverse landscapes
            </p>
          </div>

          <StaggerContainer className="destinations-grid-full">
            {destinations.map((destination) => (
              <StaggerItem key={destination.id}>
                <DestinationCard {...destination} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* Country Sections */}
      {['Rwanda', 'Kenya', 'Tanzania'].map((country) => (
        <AnimatedSection key={country} className="country-section section-padding bg-light">
          <div className="container">
            <h2 className="country-title">{country}</h2>
            <div className="country-destinations">
              {destinations
                .filter(d => d.country === country)
                .map(destination => (
                  <DestinationCard key={destination.id} {...destination} />
                ))}
            </div>
          </div>
        </AnimatedSection>
      ))}

      {/* Contact Banner */}
      <ContactBanner />
    </div>
  );
};

export default Destinations;
