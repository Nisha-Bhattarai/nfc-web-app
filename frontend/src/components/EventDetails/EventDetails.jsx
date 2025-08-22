import React from "react";
import { TbCashRegister } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import "./EventDetails.css";

const EventDetails = ({ description, fee, date, onRegister }) => {
  return (
    <div className="ed-container">
      <h2 className="ed-title">Details:</h2>
      <p className="ed">{description}</p>

      <div className="rf-container">
        <TbCashRegister className="rf-icon" />
        <p className="rf">{fee}</p>
      </div>

      <div className="event-date-container">
        <FaCalendarAlt className="event-date-icon" />
        <p className="event-date">{date}</p>
      </div>

      <button className="--btn" onClick={onRegister}>
        Register Now
      </button>
    </div>
  );
};

export default EventDetails;
