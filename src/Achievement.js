import React from "react";
import './Achievement.css'; // Import the CSS file

function Achievement({ text }) {
  return (
    <p className="achievement">{text}</p>
  );
}

export default Achievement;