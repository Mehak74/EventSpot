
import React from "react";
import "./NoEventsModel.css"; 

const NoEventsModel = ({ onClose,onResetSearch }) => {
    const handleClose = () => {
        onResetSearch(); 
        onClose(); 
      };
  return (
    <div className="modal">
      <div className="modal-content fade-in">
        <h2>No Events Found</h2>
        <p>Sorry, there are no events matching your search criteria.</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default NoEventsModel;
