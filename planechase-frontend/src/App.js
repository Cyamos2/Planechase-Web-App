import React, { useState, useEffect } from 'react';
import PlaneCard from './components/PlaneCard';

const App = () => {
  const [planeCards, setPlaneCards] = useState([]);

  useEffect(() => {
    fetchPlaneCards();
  }, []);

  const fetchPlaneCards = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/plane-cards');
      if (!response.ok) {
        throw new Error('Failed to fetch plane cards');
      }
      const data = await response.json();
      setPlaneCards(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      <h1>Planechase</h1>
      <div className="plane-cards">
        {planeCards.map((card, index) => (
          <PlaneCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default App;
