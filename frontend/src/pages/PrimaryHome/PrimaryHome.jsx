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

const PrimaryHome = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className='profile-container'>
      <ContactPermissionModal />
      <Header />
      <div className="button-group">
        <Button icon={FaDownload} label="Save Contact" onClick={() => alert("Saved!")} />
        <Button icon={FaExchangeAlt} label="Exchange Contact" onClick={() => setOpen(true)} />
          <Modal isOpen={open} onClose={() => setOpen(false)}>
            <ExchangeContact />
          </Modal>
      </div>
      <About />
      <SocialSection />
      <WebsiteSection />
      <LightboxGallerySection title="GALLERY" />
    </div>
  )
}

export default PrimaryHome