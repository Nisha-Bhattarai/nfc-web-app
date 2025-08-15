import React from 'react'
import './Skills.css'

const skills = [
  "Financial Planning",
  "Investment Strategy",
  "Risk Assessment",
  "Client Relationship Management",
  "Tax Planning",
  "Communication Skills",
  "Market Research",
  "Problem-Solving",
  "Retirement Planning",
  "Ethical Judgment",
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h3 className="skills-title">SKILLS</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills