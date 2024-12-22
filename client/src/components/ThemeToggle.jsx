import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

// Theme toggle component
const ThemeToggle = ({ onThemeChange }) => {
  const [darkMode, setDarkMode] = useState(false); // Initial mode is light

  // Toggle theme function
  const handleThemeChange = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    onThemeChange(newMode); // Pass the mode change to parent component
  };

  return (
    <div style={{ padding: '20px', display: 'flex', alignItems: 'center' }}>
      <IconButton 
        onClick={handleThemeChange} 
        color="inherit" 
        style={{ 
          transition: 'transform 0.3s ease', 
          transform: darkMode ? 'rotate(180deg)' : 'rotate(0deg)', 
          fontSize: '2rem' 
        }}
      >
        {darkMode ? <Brightness7 fontSize="inherit" /> : <Brightness4 fontSize="inherit" />}
      </IconButton>
    </div>
  );
};

export default ThemeToggle;
