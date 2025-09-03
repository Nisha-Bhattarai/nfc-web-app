import LightboxGallery from './LightboxGallery';
import "./LightboxGallery.css"


const LightboxGallerySection = ({title, images}) => {
  return (
    <div>
      <LightboxGallery images={images} title={title} />
    </div>
  );
};

export default LightboxGallerySection;