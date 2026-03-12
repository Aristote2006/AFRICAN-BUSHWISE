import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiClock, FiDollarSign, FiStar, FiMail, FiPhone } from 'react-icons/fi';
import type { Tour } from '../../data/tours';
import './TourCard.css';

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const bookingEmail = 'africanbushwise@gmail.com';
  const bookingPhone = '+250 782 558 395';
  const contactEmail = 'ndatimanafabrice8@gmail.com';

  return (
    <motion.div 
      className="tour-card"
      whileHover={{ y: -10, scale: 1.02 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* Image Section */}
      <div className="tour-image-wrapper">
        <img 
          src={tour.image} 
          alt={tour.title}
          className="tour-image"
          loading="lazy"
        />
        <div className="tour-overlay" />
        
        {/* Price Badge */}
        <div className="tour-price-badge">
          <FiDollarSign size={16} />
          <span>{tour.price.toLocaleString()}</span>
        </div>

        {/* Duration Badge */}
        <div className="tour-duration-badge">
          <FiClock size={14} />
          <span>{tour.duration}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="tour-content">
        {/* Location */}
        <div className="tour-location">
          <FiMapPin size={16} />
          <span>{tour.location}</span>
        </div>

        {/* Title */}
        <h3 className="tour-title">{tour.title}</h3>

        {/* Rating */}
        <div className="tour-rating">
          <FiStar size={18} fill="#FFD700" color="#FFD700" />
          <span className="rating-value">{tour.rating}</span>
          <span className="rating-count">({tour.reviews} reviews)</span>
        </div>

        {/* Description */}
        <p className="tour-description">{tour.description}</p>

        {/* Difficulty & Group Size */}
        <div className="tour-meta">
          <div className="tour-difficulty">
            <span className="meta-label">Difficulty:</span>
            <span className={`difficulty-badge difficulty-${tour.difficulty.toLowerCase()}`}>
              {tour.difficulty}
            </span>
          </div>
          <div className="tour-group-size">
            <span className="meta-label">Max Group:</span>
            <span className="group-size-value">{tour.groupSize} people</span>
          </div>
        </div>

        {/* Contact for Booking */}
        <div className="tour-booking-info">
          <p className="booking-label">Interested in this tour?</p>
          <p className="booking-subtitle">Contact us to book:</p>
          <div className="booking-contact">
            <div className="contact-item">
              <FiMail size={16} />
              <a href={`mailto:${bookingEmail}`}>{bookingEmail}</a>
            </div>
            <div className="contact-item">
              <FiPhone size={16} />
              <a href={`tel:${bookingPhone}`}>{bookingPhone}</a>
            </div>
          </div>
          <p className="booking-note" style={{ marginTop: '10px', fontSize: '0.85rem', color: '#666' }}>
            For inquiries: <a href={`mailto:${contactEmail}`} style={{ color: 'var(--safari-green)', fontWeight: 500 }}>{contactEmail}</a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TourCard;
