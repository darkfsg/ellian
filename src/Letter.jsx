import React from 'react';
import { motion } from 'framer-motion';
import './Letter.css';

// A component for a single line of typing text
const TypingText = ({ text, className, delay = 0 }) => {
  const letters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: delay },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: '10px' },
    visible: { opacity: 1, y: '0px' },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Letter = () => {
  return (
    <motion.div
      className="letter-paper"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', damping: 15, stiffness: 100, delay: 0.5 }}
    >
      <div className="letter-content">
        <TypingText text="Aunque la distancia no nos deje" className="letter-line" delay={0} />
        <TypingText text="compartir en persona," className="letter-line" delay={1.5} />
        <TypingText text="nuestra amistad siempre" className="letter-line" delay={3} />
        <TypingText text="florece de amarillo." className="letter-line" delay={4.5} />
        <TypingText text="Flores amarillas," className="letter-line" delay={6} />
        <TypingText text="símbolo de la amistad" className="letter-line" delay={7.5} />
        <TypingText text="que nunca se marchita 🌼💛" className="letter-line" delay={9} />
        <TypingText text="- Elian" className="letter-line signature" delay={11} />
      </div>
    </motion.div>
  );
};

export default Letter;
