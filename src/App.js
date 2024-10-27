
import React, { useState } from 'react';
import EventList from './components/EventList';
import './styles.css'; 

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const resetSearchTerm = () => {
    setSearchTerm(""); 
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>EventSpot Lite</h1>
        <p>Discover local events happening around you!</p>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </header>
      <main>
        <EventList searchTerm={searchTerm} onResetSearch={resetSearchTerm} />
      </main>
    </div>
  );
};

export default App;
