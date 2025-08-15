import React from 'react';
import './EventCard.css';
import EventCard from './EventCard';

const UpcomingEvents = () => {
  return (
    <div className='upcoming-events'>
        <h3>UPCOMING EVENTS</h3>
        <EventCard 
        month="APR"
        date="25"
        day="FRI"
        title="Smart Money Moves: Strategies for Building Wealth in Any Economy"
        time="6:00 PM – 7:30 PM (EST)"
        location="Virtual (Zoom link sent upon registration)"/>
    </div>
  );
};

export default UpcomingEvents;
