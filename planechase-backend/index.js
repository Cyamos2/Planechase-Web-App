const fs = require('fs');
const path = require('path');

// Define the path to the planeCards.json file
const planeCardsPath = path.join(__dirname, 'data', 'planeCards.json');

// Function to read plane cards from the JSON file
function readPlaneCards() {
    try {
        // Read the contents of the planeCards.json file
        const planeCardsData = fs.readFileSync(planeCardsPath, 'utf8');
        // Parse the JSON data
        const planeCards = JSON.parse(planeCardsData);
        return planeCards;
    } catch (error) {
        console.error('Error reading plane cards:', error);
        return [];
    }
}

// Example usage:
const planeCards = readPlaneCards();
console.log(planeCards);
