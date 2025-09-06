import React from "react";
import { useNavigate } from "react-router-dom";
import { TbCashRegister } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCalendarTimes } from "react-icons/fa";
import "./EventDetails.css";

const EventDetails = ({ title,bio, date, time, userId,eventId }) => {
const navigate = useNavigate();

  return (
    <div className="ed-container">
      <h2 className="ed-title">Details:</h2>
      <p className="ed">{title}</p>
     <p className="ed-description">{bio}</p>

       <div className="event-date-container">
        <FaCalendarAlt className="event-date-icon" />
        <p className="event-date">{date}</p>
      </div>

      <div className="event-date-container">
        <FaCalendarAlt className="event-date-icon" />
        <p className="event-date">{time}</p>
      </div>

      <button className="--btn" onClick={() => navigate("/event-registration", { state: { userId, eventId } })}>
        Register Now
      </button>
    </div>
  );
};

export default EventDetails;
