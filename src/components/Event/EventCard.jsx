import React from 'react';
import './EventCard.css';
import { FaClock, FaLocationArrow, FaChevronRight } from "react-icons/fa";
import EventDetails from '../EventDetails/EventDetails';
import Modal from '../Modal/Modal';

const EventCard = ({ eventStartDate, eventEndDate, title, location, bio, showArrow, userId, eventId }) => {
  const [open, setOpen] = React.useState(false);

  const startDate = new Date(eventStartDate);
  const month = startDate.toLocaleString('default', { month: 'short' }).toUpperCase();
  const date = startDate.getDate();
  const day = startDate.toLocaleString('default', { weekday: 'short' }).toUpperCase();

  const endDate = new Date(eventEndDate)
  const startTime = startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const endTime = endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const time = `${startTime} – ${endTime}`;

   const endMonth = startDate.toLocaleString('default', { month: 'short' }).toUpperCase();
  const endDateDate = startDate.getDate();
  const endDay = startDate.toLocaleString('default', { weekday: 'short' }).toUpperCase();

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
              title={title}
              bio={bio}
              time={time}
              userId={userId}
              eventId={eventId}
              date={day + ' ' + month + ', ' + date + ' - ' + endDay + ' ' + endMonth + ', ' + endDateDate }
            />
          </Modal>
        </div>
      )}
    </div>
  );
};

export default EventCard;
