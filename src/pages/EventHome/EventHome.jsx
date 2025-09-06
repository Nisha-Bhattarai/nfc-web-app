import React from 'react'
import Header from '../../components/Header/Header'
import "./EventHome.css"
import About from '../../components/About/About'
import Button from '../../components/Button/Button'
import { FaDownload, FaExchangeAlt } from "react-icons/fa";
import SocialSection from '../../components/Social/SocialSection'
import WebsiteSection from '../../components/Website/WebsiteSection'
import LightboxGallerySection from '../../components/LightboxGallery/LightboxGallerySection'
import UpcomingEvents from '../../components/Event/UpcomingEvents'
import OngoingEvents from '../../components/Event/OngoingEvents'
import Skills from '../../components/Skills/Skills'
import RelevantCertifications from '../../components/RelevantCertifications/RelevantCertifications'
import ContactPermissionModal from '../../components/ContactPermissionModal/ContactPermissionModal'
import ExchangeContact from '../../components/ExchangeContact/ExchangeContact'
import Modal from '../../components/Modal/Modal'
import "../../components/Header/Header"
import { FaLocationDot } from "react-icons/fa6";

const EventHome = ({ user, profile }) => {
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
FN:${profile.eventProfileName || "My Contact"}
TEL;TYPE=CELL:${phoneNumber}
EMAIL:${profile.personalEmail || profile.workEmail || ""}
END:VCARD
`;

    // Create a Blob and download link
    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${profile.eventProfileName || "contact"}.vcf`;
    a.click();
    URL.revokeObjectURL(url);
  };
  return (
    <div className='profile-container'>
      {/* <ContactPermissionModal />
      <Header /> */}

      <div className='profile-header'>
        <img
          src={
            (profile?.photoGallery?.length > 0)
              ? profile.photoGallery[0]
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
        <Button icon={FaDownload} label="Save Contact" onClick={ handleSaveContact} />
        <Button icon={FaExchangeAlt} label="Exchange Contact" onClick={() => setOpen(true)} />
        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <ExchangeContact  exchangeToUserId={user.id}/>
        </Modal>
      </div>
      <About bio={profile.aboutEvent} />
      <SocialSection socialMedia={profile.socialMedia} />
      <WebsiteSection sites={profile.relevantLinks} />
      <OngoingEvents event={profile} />
      <UpcomingEvents upcomingEvents={profile.upcomingEvents} userId={user.id} />
      <Skills skills={profile.skills} />
      <RelevantCertifications
        title="RELEVANT CERTIFICATIONS"
        certifications={profile.certifications}
      />
      <LightboxGallerySection title="EVENT GALLERY" images={profile.photoGallery} />
    </div>
  )
}

export default EventHome