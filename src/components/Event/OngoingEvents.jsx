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

  return (
    <div className='upcoming-events'>
      <h3>ONGOING EVENTS</h3>
      <EventCard
        key={event._id}
        eventStartDate={event.startDate}
        eventEndDate={event.endDate}
        title={event.eventName}
        location={event.location}
        bio={event.aboutEvent}
        showArrow={false}
      />
    </div>
  );
};

export default OngoingEvents;
