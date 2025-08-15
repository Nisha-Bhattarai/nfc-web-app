import React from 'react'
import Header from '../../components/Header/Header'
import "./PrimaryHome.css"
import About from '../../components/About/About'
import Button from '../../components/Button/Button'
import { FaDownload, FaExchangeAlt } from "react-icons/fa";
import SocialSection from '../../components/Social/SocialSection'
import WebsiteSection from '../../components/Website/WebsiteSection'
import LightboxGallerySection from '../../components/LightboxGallery/LightboxGallerySection'
import UpcomingEvents from '../../components/Event/UpcomingEvents'
import OngoingEvents from '../../components/Event/OngoingEvents'

const PrimaryHome = () => {
  return (
    <div className='profile-container'>
      <Header />
      <div className="button-group">
        <Button icon={FaDownload} label="Save Contact" onClick={() => alert("Saved!")} />
        <Button icon={FaExchangeAlt} label="Exchange Contact" onClick={() => alert("Exchanged!")} />
      </div>
      <About />
      <SocialSection />
      <WebsiteSection />
      <LightboxGallerySection />
      <OngoingEvents />
      <UpcomingEvents />
    </div>
  )
}

export default PrimaryHome