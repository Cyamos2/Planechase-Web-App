import React from 'react';
import PlaneCard from './components/PlaneCards/PlaneCard'; // Import PlaneCard component
import './App.css'; // Import App.css for styling

const App = () => {
  return (
    <div className="app">
      <h1>Planechase</h1>
      <div className="plane-card-container">
        <PlaneCard />
      </div>
    </div>
  );
};

export default App;
