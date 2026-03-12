import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './DestinationCard.css';

interface DestinationCardProps {
  name: string;
  country: string;
  description: string;
  image: string;
  highlights: string[];
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  name,
  country,
  description,
  image,
  highlights
}) => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="destination-card"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="destination-image-wrapper">
        <img 
          src={image} 
          alt={name}
          className="destination-image"
          loading="lazy"
        />
        <div className="destination-overlay" />
        
        <div className="destination-badge">
          {country}
        </div>
      </div>

      <div className="destination-content">
        <h3 className="destination-title">{name}</h3>
        <p className="destination-description">{description}</p>

        {highlights && highlights.length > 0 && (
          <ul className="destination-highlights">
            {highlights.slice(0, 3).map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        )}

        <button 
          className="btn-view-tours"
          onClick={() => navigate('/destinations')}
        >
          View Tours
          <FiArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
