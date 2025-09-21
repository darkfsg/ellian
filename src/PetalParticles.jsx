import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import petalImage from '../particulas.png';
import './PetalParticles.css';

const numPetals = 25;

const PetalParticles = ({ isScattered }) => {
  // Pre-calculate random scatter positions for each petal
  const scatterConfigs = useMemo(() => {
    return Array.from({ length: numPetals }).map(() => ({
      x: (Math.random() - 0.5) * 500,
      y: (Math.random() - 0.5) * 500,
      rotate: (Math.random() - 0.5) * 360,
    }));
  }, []);

  return (
    <div className="petal-pile-container">
      {scatterConfigs.map((config, index) => {
        const variants = {
          // Start completely invisible and with zero size
          piled: { 
            opacity: 0, 
            scale: 0, 
          },
          // On scatter, appear from nothing, move, and then fade out
          scattered: {
            opacity: [0, 1, 1, 0], // Keyframes: Invisible -> Appear -> Hold -> Fade
            scale: [0, 1, 1],   // Keyframes: Grow -> Hold
            x: config.x,
            y: config.y,
            rotate: config.rotate,
          },
        };

        return (
          <motion.img
            key={index}
            src={petalImage}
            className="interactive-petal"
            variants={variants}
            initial="piled" // Explicitly set the initial state
            animate={isScattered ? "scattered" : "piled"}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        );
      })}
    </div>
  );
};

export default PetalParticles;