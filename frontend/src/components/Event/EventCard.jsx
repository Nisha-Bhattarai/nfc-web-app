import React from 'react';
import './EventCard.css';
import { FaClock, FaLocationArrow, FaChevronRight } from "react-icons/fa";

const EventCard = ({ month, date, day, title, time, location }) => {
  return (
    <div className='event-card-container'>
      <div className='event-calendar'>
        <div className='calendar'>
          <p className='month'>{month}</p>
          <p className='date'>{date}</p>
          <p className='day'>{day}</p>
        </div>
      </div>
      <div className='event-details'>
        <h2>{title}</h2>
        <div className='time'>
          <FaClock className='time-icon' />
          <p>{time}</p>
        </div>
        <div className='location'>
          <FaLocationArrow className='location-icon' />
          <p>{location}</p>
        </div>
      </div>
      <div className='arrow'>
        <FaChevronRight className='arrow-icon' />
      </div>
    </div>
  );
};

export default EventCard;
