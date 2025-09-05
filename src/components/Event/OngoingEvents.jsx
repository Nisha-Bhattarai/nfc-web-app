import React from 'react';
import './EventCard.css';
import EventCard from './EventCard';

const OngoingEvents = ({ event }) => {
  if (!event) {
    return (
      <div className='upcoming-events'>
        <h3>ONGOING EVENTS</h3>
        <p>No ongoing event available.</p>
      </div>
    );
  }

  // Convert date to readable format
  const startDateObj = new Date(event.startDate);
  const endDateObj = new Date(event.endDate);

  const month = startDateObj.toLocaleString('default', { month: 'short' }).toUpperCase(); // APR
  const date = startDateObj.getDate(); // 25
  const day = startDateObj.toLocaleString('default', { weekday: 'short' }).toUpperCase(); // FRI

  // Format time range
  const time = `${startDateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} – ${endDateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

  return (
    <div className='upcoming-events'>
      <h3>ONGOING EVENTS</h3>
      <EventCard
        month={month}
        date={date}
        day={day}
        title={event.eventName}
        time={time}
        location={event.location}
        showArrow={false}
      />
    </div>
  );
};

export default OngoingEvents;
