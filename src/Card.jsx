import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';
import cardImage from '../carta.png';

const Card = ({ onCardClick, isFading }) => {
  const cardVariants = {
    visible: {
      opacity: 1,
      scale: 1,
    },
    fading: {
      opacity: 0,
      scale: 1.1,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="card"
      onClick={onCardClick}
      variants={cardVariants}
      initial="visible" // It starts as visible within its scene
      animate={isFading ? 'fading' : 'visible'}
    >
      <img src={cardImage} alt="Carta para Sandrayh" className="card-image" />
    </motion.div>
  );
};

export default Card;
