import React from 'react'
import './Skills.css'

const Skills = ({ skills }) => {
  return (
    <div className="skills-container">
      <h3 className="skills-title">SKILLS</h3>
      <div className="skills-grid">
        {skills && skills.length > 0 ? (
          skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))
        ) : (
          <div className="skills-grid">-</div>
        )}
      </div>
    </div>
  )
}

export default Skills