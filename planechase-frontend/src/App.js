import React, { useState } from 'react';
import './App.css';
import PlaneCard from './components/PlaneCard';
import PlanarCards from './data/PlanarCards'; // Importing the PlanarCards data

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    const nextIndex = (currentCardIndex + 1) % PlanarCards.length;
    setCurrentCardIndex(nextIndex);
  };

  const handlePreviousCard = () => {
    const previousIndex = (currentCardIndex - 1 + PlanarCards.length) % PlanarCards.length;
    setCurrentCardIndex(previousIndex);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Planechase</h1>
      </header>
      <main>
        <PlaneCard cardText={PlanarCards[currentCardIndex]} />
        <div className="ButtonContainer">
          <button className="Button" onClick={handlePreviousCard}>Previous</button>
          <button className="Button" onClick={handleNextCard}>Next</button>
        </div>
      </main>
    </div>
  );
}

export default App;
