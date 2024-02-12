import React from 'react';
import './PlaneCard.css'; // Import the CSS file for styling

const PlaneCard = ({ name, description }) => {
  return (
    <div className="plane-card">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default PlaneCard;
