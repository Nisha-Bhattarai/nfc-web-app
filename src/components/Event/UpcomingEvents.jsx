import React from 'react';
import './EventCard.css';
import EventCard from './EventCard';

const UpcomingEvents = ({ upcomingEvents }) => {
  return (
    <div className='upcoming-events'>
      <h3>UPCOMING EVENTS</h3>
      {upcomingEvents && upcomingEvents.length > 0 ? (
        upcomingEvents.map((event) => {
          // Format date
          const startDate = new Date(event.startDate);
          const month = startDate.toLocaleString('default', { month: 'short' }).toUpperCase();
          const date = startDate.getDate();
          const day = startDate.toLocaleString('default', { weekday: 'short' }).toUpperCase();

          // Time formatting
          const startTime = startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          const endTime = new Date(event.endDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

          return (
            <EventCard
              key={event._id}
              month={month}
              date={date}
              day={day}
              title={event.eventName}
              time={`${startTime} – ${endTime}`}
              location={event.location}
              showArrow={true}
            />
          );
        })
      ) : (
        <p>No upcoming events</p>
      )}
    </div>
  );
};

export default UpcomingEvents;
