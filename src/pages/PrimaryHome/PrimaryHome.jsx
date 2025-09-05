import React from 'react'
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
import SiteFooter from '../../components/SiteFooter/SiteFooter'

const PrimaryHome = ({ user, profile }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className='profile-container'>
      {/* <ContactPermissionModal /> */}
      {/* <Header /> */}
      <div className='profile-header'>
        <img
          src={`${process.env.PUBLIC_URL}/images/avatar.png`}
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
        <Button icon={FaDownload} label="Save Contact" onClick={() => alert("Saved!")} />
        <Button icon={FaExchangeAlt} label="Exchange Contact" onClick={() => setOpen(true)} />
        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <ExchangeContact />
        </Modal>
      </div>
      <About bio={profile.bio}/>
      <SocialSection socialMedia = {profile.socialMedia} />
      <WebsiteSection sites={profile.relevantLinks} />
      <LightboxGallerySection title="GALLERY" images={profile.photoGallery} />
      <SiteFooter companyName="Captain Printworks" startYear={1986} privacyHref="/privacy-policy" />
    </div>
  )
}

export default PrimaryHome