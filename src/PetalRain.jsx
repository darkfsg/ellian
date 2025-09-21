import React from 'react';
import './PetalRain.css';
import petalImage from '../particulas.png';

const PetalRain = () => {
  const numPetals = 20; // More petals for the final scene

  return (
    <div className="petal-rain-container">
      {Array.from({ length: numPetals }).map((_, index) => {
        const style = {
          left: `${Math.random() * 100}vw`,
          width: `${20 + Math.random() * 20}px`,
          animationDuration: `${8 + Math.random() * 8}s`,
          animationDelay: `${Math.random() * 10}s`,
        };

        return (
          <img
            key={index}
            src={petalImage}
            className="raining-petal"
            style={style}
            alt=""
          />
        );
      })}
    </div>
  );
};

export default PetalRain;
