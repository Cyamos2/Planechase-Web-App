import React from 'react';
import './App.css';
import PlaneCard from './components/PlaneCard';

function App() {
  // Sample array of planar card text
  const planarCards = [
    "Card 1 Text",
    "Card 2 Text",
    "Card 3 Text",
    // Add more card texts as needed
  ];

  // Randomly select one planar card
  const randomIndex = Math.floor(Math.random() * planarCards.length);
  const randomPlanarCard = planarCards[randomIndex];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Planechase</h1>
      </header>
      <main>
        <PlaneCard cardText={randomPlanarCard} />
      </main>
    </div>
  );
}

export default App;
