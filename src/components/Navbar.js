import React from 'react';

function Navbar({ onSearch }) {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <nav className="bg-blue-600 p-4 flex items-center justify-between">
      <h1 className="text-white text-2xl font-bold">EventSpot Lite</h1>
      <input
        type="text"
        placeholder="Search events by name or location..."
        onChange={handleSearch}
        className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400"
      />
    </nav>
  );
}

export default Navbar;
