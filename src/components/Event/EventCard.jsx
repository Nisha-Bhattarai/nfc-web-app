import React from 'react';
import './EventCard.css';
import { FaClock, FaLocationArrow, FaChevronRight } from "react-icons/fa";
import EventDetails from '../EventDetails/EventDetails';
import Modal from '../Modal/Modal';

const EventCard = ({ month, date, day, title, time, location, showArrow }) => {
  const [open, setOpen] = React.useState(false);

  const handleRegister = () => {
    console.log("Register button clicked!");
  };

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
      {showArrow && (
        <div className='arrow'>
          <FaChevronRight className='arrow-icon' onClick={() => setOpen(true)} />
          <Modal isOpen={open} onClose={() => setOpen(false)}>
            <EventDetails 
              description="A lunch-and-learn session with practical insights on retirement planning, 401(k) options, and tax-efficient saving. Complimentary lunch included."
              fee="$20 – space limited to 25 participants"
              date="June 5, 2025 - June 10, 2025"
            />
          </Modal>
        </div>
      )}
    </div>
  );
};

export default EventCard;
