import React, { useState,useEffect } from "react";
import events from "../data/events";
import EventCard from "./EventCard";
import EventModel from "./EventModel";
import NoEventsModel from "./NoEventModel";

const EventList = ({searchTerm,onResetSearch}) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showNoEventsModel, setShowNoEventsModel] = useState(false);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (searchTerm && filteredEvents.length === 0) {
      setShowNoEventsModel(true);
    } else {
      setShowNoEventsModel(false);
    }
},[searchTerm,filteredEvents]);

  return (
    <div>
      <div className="event-list">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} onClick={handleEventClick} />
        ))}
      </div>
      {selectedEvent && <EventModel event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
      {showNoEventsModel && <NoEventsModel onClose={() => setShowNoEventsModel(false)} onResetSearch={onResetSearch} />}
    </div>
  );
};

export default EventList;
