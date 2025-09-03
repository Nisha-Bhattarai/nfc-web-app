import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import "./Header.css"

const Header = ({user}) => {
  return (
    <div className='profile-header'>
        <img 
        src={`${process.env.PUBLIC_URL}/images/avatar.png`}
        alt='Mary Wilson'
        className='profile-image'
        />
        <h2>Mary Wilson</h2>
        <p className='subtitle'>Financial Advisor</p>
        <div className='location'>
            <FaLocationDot className='location-icon' /> Lunexa Capital - Toronto, Ontario
        </div>
    </div>
  )
}

export default Header