import React, {useRef, useEffect} from 'react'
import Header from '../../components/Header/Header'
import "./PrimaryHome.css"
import About from '../../components/About/About'
import Button from '../../components/Button/Button'
import { FaDownload, FaExchangeAlt } from "react-icons/fa";
import SocialSection from '../../components/Social/SocialSection'
import WebsiteSection from '../../components/Website/WebsiteSection'
import LightboxGallerySection from '../../components/LightboxGallery/LightboxGallerySection'
import ContactPermissionModal from '../../components/ContactPermissionModal/ContactPermissionModal'
import Modal from '../../components/Modal/Modal'
import ExchangeContact from '../../components/ExchangeContact/ExchangeContact'
import "../../components/Header/Header"
import { FaLocationDot } from "react-icons/fa6";
import { captureScanData } from "../../components/CaptureScanData/captureScanData";

const PrimaryHome = ({ user, profile }) => {
  const [open, setOpen] = React.useState(false);

const handleSaveContact = () => {
    // Pick personal or work phone
    const phoneNumber = profile.personalPhone || profile.workPhone;

    if (!phoneNumber) {
      alert("No phone number available to save!");
      return;
    }

    const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:${profile.firstName || "My Contact"}
TEL;TYPE=CELL:${phoneNumber}
EMAIL:${profile.personalEmail || profile.workEmail || ""}
END:VCARD
`;

    // Create a Blob and download link
    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${profile.profileName || "contact"}.vcf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const hasPosted = useRef(false);
  
    // post scan data
    useEffect(() => {
      if (user?.id && !hasPosted.current) {
        captureScanData(user.id, "PRIMARY");
        hasPosted.current = true;
      }
    }, [user?.id]);
  
  return (
    <div className='profile-container'>
      {/* <ContactPermissionModal /> */}
      {/* <Header /> */}
      <div className='profile-header'>
        <img
          src={
            (profile?.profilePicture && profile.profilePicture.trim() !== "")
              ? profile.profilePicture
              : `${process.env.PUBLIC_URL}/images/avatar.png`
          }
          alt={user.firstName}
          className='profile-image'
        />
        <h2>{user.firstName} {user.lastName}</h2>
        <p className='subtitle'>{profile.profileName}</p>
        <div className='location'>
          <FaLocationDot className='location-icon' /> {profile.location}
        </div>
      </div>

      <div className="button-group">
        <Button icon={FaDownload} label="Save Contact" onClick={handleSaveContact} />
        <Button icon={FaExchangeAlt} label="Exchange Contact" onClick={() => setOpen(true)} />
        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <ExchangeContact  exchangeToUserId={user.id} />
        </Modal>
      </div>
      <About bio={profile.bio} />
      <SocialSection socialMedia={profile.socialMedia} />
      <WebsiteSection sites={profile.relevantLinks} />
      <LightboxGallerySection title="GALLERY" images={profile.photoGallery} />
    </div>
  )
}

export default PrimaryHome