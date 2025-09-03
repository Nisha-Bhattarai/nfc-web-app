import { useState } from 'react';

const LightboxGallery = ({ images = [], title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openLightbox = (i) => {
    setIndex(i);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const prev = () => setIndex((index + images.length - 1) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className='gallery-container'>
      {/* Gallery Section */}
      <div className="gallery-section">
        <h3>{title}</h3>
        <div className="gallery-grid">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i}`}
              className="gallery-img"
              onClick={() => openLightbox(i)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {isOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
          <img
            src={images[index]}
            alt={`Lightbox ${index}`}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            &#10094;
          </button>
          <button
            className="lightbox-next"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default LightboxGallery;
