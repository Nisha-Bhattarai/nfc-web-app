import React from 'react'
import "./About.css"

const About = ({bio}) => {
  return (
    <div className='about-section'>
        <h3>ABOUT</h3>
        <p>
        {bio}
        </p>
    </div>
  )
}

export default About