import React, { useState } from 'react';
import { Switch } from '@mui/material';

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
      <Switch checked={darkMode} onChange={handleThemeChange} />
      <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
    </div>
  );
};

export default ThemeToggle;
