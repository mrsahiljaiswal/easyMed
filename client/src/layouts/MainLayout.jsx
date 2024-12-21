import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, useTheme } from '@mui/material';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  const theme = useTheme(); // Get the current theme

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: theme.palette.background.default, color: theme.palette.text.primary }}>
      {/* Navigation Bar */}
      <NavBar />
      
      {/* Main Content Area */}
      <main>
        <Outlet /> {/* Render the nested route content here */}
      </main>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default MainLayout;
