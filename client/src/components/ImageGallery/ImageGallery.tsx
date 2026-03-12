import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiX, FiZoomIn } from 'react-icons/fi';
import './ImageGallery.css';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="image-gallery">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`gallery-item ${index === 0 ? 'gallery-item-large' : ''}`}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onClick={() => handleImageClick(index)}
          >
            <img src={image} alt={`Gallery image ${index + 1}`} loading="lazy" />
            <div className="gallery-overlay">
              <FiZoomIn size={24} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="lightbox-modal" onClick={handleCloseModal}>
          <button className="lightbox-close" onClick={handleCloseModal}>
            <FiX size={32} />
          </button>
          <img
            src={images[selectedImage]}
            alt={`Lightbox image ${selectedImage + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default ImageGallery;
