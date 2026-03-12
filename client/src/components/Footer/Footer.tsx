import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Tours', path: '/tours' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const popularTours = [
    { name: 'Gorilla Trekking Rwanda', path: '/tours/1' },
    { name: 'Serengeti Safari', path: '/tours/2' },
    { name: 'Maasai Mara Adventure', path: '/tours/3' },
    { name: 'Zanzibar Beach Holiday', path: '/tours/4' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/src/public/images/bushwise.PNG" alt="African Bushwise Logo" className="footer-logo-image" />
              <h3>African Bushwise</h3>
            </div>
            <p className="footer-description">
              Discover Rwanda, Kenya, and Tanzania through unforgettable safari adventures 
              and guided tours. Your ultimate East African experience awaits.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <FiFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/african_bushwise?igsh=bXdxcHR2NzdneWg2" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FiTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tours */}
          <div className="footer-section">
            <h4 className="footer-title">Popular Tours</h4>
            <ul className="footer-links">
              {popularTours.map((tour, index) => (
                <li key={index}>
                  <Link to={tour.path}>{tour.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <FiMail size={18} />
                <span>africanbushwise@gmail.com</span>
              </li>
              <li>
                <FiPhone size={18} />
                <span>+250 782 558 395</span>
              </li>
              <li>
                <FiMapPin size={18} />
                <span>Rwanda/ Musanze</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get exclusive offers and travel tips delivered to your inbox</p>
          </div>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} African Bushwise. <span className="developer-credit">Developed by Aristote</span>. All rights reserved.</p>
            <div className="footer-legal">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-conditions">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
