// PlanarCards.js

// Sample array of planar card texts
const planarCards = [
    "Card 1 Text",
    "Card 2 Text",
    "Card 3 Text",
    // Add more card texts as needed
  ];
  
  // Function to get a random planar card
  function getRandomPlanarCard() {
    const randomIndex = Math.floor(Math.random() * planarCards.length);
    return planarCards[randomIndex];
  }
  
  // Export the function to make it accessible from other files
  export { getRandomPlanarCard };
  