import LightboxGallery from './LightboxGallery';
import "./LightboxGallery.css"

const images = [
   "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
];

const LightboxGallerySection = ({title}) => {
  return (
    <div>
      <LightboxGallery images={images} title={title} />
    </div>
  );
};

export default LightboxGallerySection;