import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero about-hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>About African Bushwise</h1>
          <p>Your trusted partner for East African safari adventures</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container">
          <div className="about-story">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                African Bushwise is a premier tourism company dedicated to helping travelers explore 
                the beauty of East Africa. We provide guided safari tours, cultural experiences, and 
                customized travel packages across Rwanda, Kenya, and Tanzania.
              </p>
              <p>
                Founded by passionate safari experts with decades of combined experience, we understand 
                what makes an African adventure truly unforgettable. Our team combines local expertise 
                with international service standards to deliver exceptional experiences.
              </p>
            </div>
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop&q=80"
                alt="African Safari" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-light">
        <div className="container">
          <h2 className="section-title centered">Our Mission & Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To create life-changing safari experiences while supporting conservation and local communities.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>Sustainability</h3>
              <p>We practice responsible tourism that protects wildlife habitats and benefits local people.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Excellence</h3>
              <p>We maintain the highest standards in safety, service, and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Happy Travelers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Tours Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Expert Guides</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title centered">Why Choose Us</h2>
          <div className="why-choose-us">
            <div className="reason">
              <h3>✓ Local Expertise</h3>
              <p>Our guides are born and raised in East Africa with intimate knowledge of wildlife behavior and hidden gems.</p>
            </div>
            <div className="reason">
              <h3>✓ Personalized Service</h3>
              <p>Every safari is tailored to your interests, pace, and preferences for a truly personalized experience.</p>
            </div>
            <div className="reason">
              <h3>✓ Conservation Focus</h3>
              <p>A portion of every booking supports wildlife conservation and community development projects.</p>
            </div>
            <div className="reason">
              <h3>✓ Safety First</h3>
              <p>We maintain modern vehicles, comprehensive insurance, and 24/7 emergency support for all guests.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
