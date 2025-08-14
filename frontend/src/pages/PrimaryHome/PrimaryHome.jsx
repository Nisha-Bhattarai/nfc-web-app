import React from 'react'
import Header from '../../components/Header/Header'
import "./PrimaryHome.css"
import About from '../../components/About/About'
import Button from '../../components/Button/Button'
import { FaDownload, FaExchangeAlt } from "react-icons/fa";
import SocialSection from '../../components/Social/SocialSection'

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
    </div>
  )
}

export default PrimaryHome