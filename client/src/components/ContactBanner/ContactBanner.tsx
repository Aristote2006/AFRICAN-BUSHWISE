import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';
import './ContactBanner.css';

const ContactBanner: React.FC = () => {
  const bookingEmail = 'ndatimanafabrice@gmail.com';
  const bookingPhone = '+250 788 123 456'; // You can edit this later

  return (
    <div className="contact-banner">
      <div className="banner-content">
        <div className="banner-text">
          <h3>Ready to Book Your Safari?</h3>
          <p>Contact us now for a free consultation and custom itinerary</p>
        </div>
        <div className="banner-contact">
          <a href={`mailto:${bookingEmail}`} className="contact-btn email">
            <FiMail size={20} />
            <span>{bookingEmail}</span>
          </a>
          <a href={`tel:${bookingPhone}`} className="contact-btn phone">
            <FiPhone size={20} />
            <span>{bookingPhone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
