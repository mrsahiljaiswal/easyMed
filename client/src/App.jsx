import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Layout from './layouts/MainLayout';
import Auth from './components/Auth';
import { auth } from './firebase';
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import KYS from './pages/KYS';
import MedicineDelivery from './pages/MedicineDelivery';
import Aboutus from './pages/Aboutus';
import ThemeToggle from './components/ThemeToggle';
import MedicineBuy from './pages/MedicineBuy';

const App = () => {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false); // State to manage theme mode
  const [loading, setLoading] = useState(true); // Loading state to prevent flash of theme

  // Function to get the theme from localStorage or default to false (light mode)
  const getSavedTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark'; // Return true for dark mode, false for light mode
  };

  // Check the theme in localStorage and set the initial darkMode state
  useEffect(() => {
    const savedTheme = getSavedTheme();
    setDarkMode(savedTheme);
    setLoading(false); // After setting the theme, stop loading
  }, []);

  // Create a theme based on darkMode state
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',  // Change theme mode based on state
    },
    typography: {
      fontFamily: '"Roboto", sans-serif',
    },
  });

  // Handle theme change and save the value to localStorage
  const handleThemeChange = (newTheme) => {
    setDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light'); // Save theme in localStorage
  };

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or other placeholder
  }

  return (
    <ThemeProvider theme={theme}> 
      <CssBaseline />  {/* Applies global styles based on the theme */}
      <Router>
        <Routes>
          {/* If no user is logged in, render the Auth page */}
          <Route path="/" element={!user ? <Auth setUser={setUser} /> : <Layout setUser={setUser} />}/>

          {/* Define protected routes that require a logged-in user */}
          <Route element={<Layout setUser={setUser} />}>
            <Route path="/home" element={<Home />} />
            <Route path="/kys" element={<KYS />} />
            <Route path="/medicinedelivery" element={<MedicineDelivery />} />
            <Route path="/buy/:id" element={<MedicineBuy />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/aboutus" element={<Aboutus />} />
          </Route>
        </Routes>

        {/* Include the ThemeToggle component and pass the handleThemeChange function */}
        <ThemeToggle onThemeChange={handleThemeChange} currentTheme={darkMode} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
