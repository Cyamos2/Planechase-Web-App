import React from 'react';

const PlaneCard = ({ card }) => {
  return (
    <div className="plane-card">
      <h2>{card.name}</h2>
      <p><strong>Type:</strong> {card.type}</p>
      <p><strong>Effect:</strong> {card.effect}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default PlaneCard;
