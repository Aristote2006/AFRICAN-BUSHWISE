import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Testimonials.css';

interface Testimonial {
  id: number;
  name: string;
  country: string;
  image: string;
  rating: number;
  review: string;
  tour: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Travelers Say</h2>
          <p className="section-subtitle">
            Real experiences from adventurers who explored East Africa with us
          </p>
        </div>

        <div className="testimonials-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.testimonial-prev',
              nextEl: '.testimonial-next',
            }}
            pagination={{
              clickable: true,
              el: '.testimonial-pagination',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  className="testimonial-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="testimonial-header">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonial-avatar"
                    />
                    <div className="testimonial-info">
                      <h4 className="testimonial-name">{testimonial.name}</h4>
                      <p className="testimonial-country">{testimonial.country}</p>
                    </div>
                  </div>

                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        size={18}
                        fill={i < testimonial.rating ? "#FFD700" : "#ddd"}
                        color={i < testimonial.rating ? "#FFD700" : "#ddd"}
                      />
                    ))}
                  </div>

                  <p className="testimonial-text">"{testimonial.review}"</p>

                  <div className="testimonial-tour">
                    <span className="tour-label">Tour:</span>
                    <span className="tour-name">{testimonial.tour}</span>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <button className="testimonial-nav testimonial-prev">
            <FiChevronLeft size={24} />
          </button>
          <button className="testimonial-nav testimonial-next">
            <FiChevronRight size={24} />
          </button>

          {/* Pagination */}
          <div className="testimonial-pagination" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
