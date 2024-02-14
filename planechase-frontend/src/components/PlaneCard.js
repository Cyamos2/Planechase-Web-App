import React, { useState } from 'react';

const PlaneCard = ({ cardText }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        const randomIndex = Math.floor(Math.random() * cardText.length);
        setCurrentIndex(randomIndex);
    };

    return (
        <div>
            <div>{cardText[currentIndex]}</div>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default PlaneCard;
