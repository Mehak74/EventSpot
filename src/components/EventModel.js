
import React from "react";

const EventModel = ({ event, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{event.name}</h2>
        <img src={event.image} alt={event.name} />
        <p>{event.description}</p>
      </div>
    </div>
  );
};

export default EventModel;
