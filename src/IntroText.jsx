import React from 'react';
import { motion } from 'framer-motion';
import './IntroText.css';

const IntroText = () => {
  const text = "Para Sadrayh";
  const letters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18, // Increased for a slower, more deliberate effect
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: -50, // Start from above
    },
    visible: {
      opacity: 1,
      y: 0,     // Animate to final position
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="intro-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ perspective: '600px' }}
    >
      {letters.map((letter, index) => {
        // "Para" is white (index < 4), "Sadrayh" is gold (index > 4)
        const color = index < 4 ? '#FFFFFF' : '#FFD700';
        
        return (
          <motion.span
            key={index}
            variants={letterVariants}
            className="intro-letter"
            style={{ color: letter === ' ' ? 'transparent' : color }} // Apply color per word
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default IntroText;