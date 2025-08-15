import React from 'react';
import './RelevantCertifications.css';
import { TbCertificate } from "react-icons/tb";

const RelevantCertifications = ({ title, certifications = [] }) => {
  return (
    <div className='rc-container'>
      <h3 className='rc-title'>{title}</h3>
      {certifications.map((cert, index) => (
        <div key={index} className='rc-box'>
          <TbCertificate className='rc-icon' />
          <p className='rc-text'>{cert}</p>
        </div>
      ))}
    </div>
  );
};

export default RelevantCertifications;
