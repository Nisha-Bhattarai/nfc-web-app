import React from 'react';
import './EventCard.css';
import EventCard from './EventCard';

const UpcomingEvents = ({ upcomingEvents, userId }) => {
  return (
    <div className='upcoming-events'>
      <h3>UPCOMING EVENTS</h3>
      {upcomingEvents && upcomingEvents.length > 0 ? (
        upcomingEvents.map((event) => {
          // Format date
          return (
            <EventCard
              key={event._id}
              eventStartDate={event.startDate}
              eventEndDate={event.endDate}
              title={event.eventName}
              location={event.location}
              bio={event.aboutEvent}
              userId={userId}
              eventId={event._id}
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
