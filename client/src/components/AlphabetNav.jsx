import React from 'react';
import './AlphabetNav.css';

const AlphabetNav = ({ scrollToSection }) => {
  const alphabets = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  return (
    <div className="alphabet-nav">
      {alphabets.map((letter) => (
        <button key={letter} onClick={() => scrollToSection(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default AlphabetNav;
