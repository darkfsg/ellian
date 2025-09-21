import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';
import IntroText from './IntroText';
import PetalParticles from './PetalParticles';
import Letter from './Letter';
import PetalRain from './PetalRain';
import './App.css';

function App() {
  // Using a step-based state for clarity
  // 0: Intro, 1: Card visible, 2: Petals scatter + Card fades, 3: Letter visible
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step === 0) {
      const introTimer = setTimeout(() => setStep(1), 2500);
      return () => clearTimeout(introTimer);
    }
  }, [step]);

  const handleCardClick = () => {
    if (step === 1) {
      setStep(2); // Trigger scatter and card fade
      // After the card fade animation is mostly done, show the letter
      setTimeout(() => setStep(3), 1000);
    }
  };

  return (
    <div className="page-background">
      {step === 3 && <PetalRain />}

      <div className="content-wrapper">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="intro" exit={{ opacity: 0 }}>
              <IntroText />
            </motion.div>
          )}

          {(step === 1 || step === 2) && (
            <motion.div
              key="card-scene"
              className="card-scene-container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <PetalParticles isScattered={step === 2} />
              <Card onCardClick={handleCardClick} isFading={step === 2} />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="letter">
              <Letter />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
