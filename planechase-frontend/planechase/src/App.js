import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file
import PlaneCard from './components/PlaneCards/PlaneCard'; // Import the PlaneCard component

const App = () => {
  const [planeCards, setPlaneCards] = useState([]);

  useEffect(() => {
    // Fetch plane card data from the JSON file
    fetch('/data/planeCards.json')
      .then(response => response.json())
      .then(data => setPlaneCards(data))
      .catch(error => console.error('Error fetching plane card data:', error));
  }, []);

  const [currentCardIndex, setCurrentCardIndex] = useState(0); // State to manage current card index

  const handleNextCard = () => {
    // Increment current card index
    setCurrentCardIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Planechase Web App</h1>
      </header>
      <main className="app-main">
        {/* Render the current plane card */}
        {planeCards.length > 0 && (
          <PlaneCard {...planeCards[currentCardIndex]} />
        )}
        {/* Next button */}
        {currentCardIndex < planeCards.length - 1 && (
          <button onClick={handleNextCard}>Next</button>
        )}
      </main>
      <footer className="app-footer">
        <p>Developed by Your Name</p>
      </footer>
    </div>
  );
};

export default App;
