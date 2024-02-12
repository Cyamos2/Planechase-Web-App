import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import PlaneCard from './components/PlaneCards/PlaneCard'; // Import the PlaneCard component
import planeCardsData from './data/planeCards.json'; // Import the plane cards data

const App = () => {
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
        <PlaneCard {...planeCardsData[currentCardIndex]} />
        {/* Next button */}
        {currentCardIndex < planeCardsData.length - 1 && (
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
