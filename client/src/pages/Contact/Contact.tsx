import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import mockApi from '../../services/api';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const result = await mockApi.submitContactForm(formData);
      setSuccess(result.message);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero contact-hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Get In Touch</h1>
          <p>We're here to help plan your perfect African safari</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container">
          <div className="contact-wrapper">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              <p>Have questions? We'd love to hear from you!</p>

              {success && <div className="alert alert-success">{success}</div>}
              {error && <div className="alert alert-error">{error}</div>}

              <form onSubmit={handleSubmit} className="contact-form">
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{ mb: 2 }}
                />

                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{ mb: 2 }}
                />

                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{ mb: 2 }}
                />

                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={5}
                  required
                  variant="outlined"
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  className="btn-submit-contact"
                  sx={{ mt: 2 }}
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <h2>Contact Information</h2>
              
              <div className="contact-details">
                <div className="contact-item">
                  <FiMail size={24} />
                  <div>
                    <h3>Email Us</h3>
                    <p>africanbushwise@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <FiPhone size={24} />
                  <div>
                    <h3>Call Us</h3>
                    <p>+250 782 558 395</p>
                  </div>
                </div>

                <div className="contact-item">
                  <FiMapPin size={24} />
                  <div>
                    <h3>Visit Us</h3>
                    <p>Rwanda/ Musanze</p>
                  </div>
                </div>

                <div className="contact-item">
                  <FiClock size={24} />
                  <div>
                    <h3>Office Hours</h3>
                    <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p>Sat: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Integration */}
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.828307308909!2d29.6333!3d-1.4833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4e8c0e0e0e1%3A0xe0e0e0e0e0e0e0e0!2sMusanze%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '15px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="African Bushwise Location - Musanze, Rwanda"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
