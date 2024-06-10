import React from 'react';
import './Experience.css'; // Import the CSS file

function Experience({ company, location, dates, achievements }) {
  return (
    <div className="experience">
      <div className="experience-header">
        <p className="experience-title"> <strong>{company}</strong> {location}</p>
        <p className="experience-dates">{dates}</p>
      </div>
    </div>
  );
}

export default Experience;