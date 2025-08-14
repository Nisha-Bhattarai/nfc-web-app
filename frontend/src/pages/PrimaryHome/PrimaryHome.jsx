import React from 'react'
import Header from '../../components/Header/Header'
import "./PrimaryHome.css"
import About from '../../components/About/About'

const PrimaryHome = () => {
  return (
    <div className='profile-container'>
      <Header />
      <About />
    </div>
  )
}

export default PrimaryHome