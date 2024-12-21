import React from 'react';
import { Outlet } from 'react-router-dom'; // For rendering nested routes
import Navbar from '../components/Navbar'; // Navbar component
import Footer from '../components/Footer'; // Footer component
import { Container } from '@mui/material'; // Material UI for spacing

const MainLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />

      <Container component="main" sx={{ flexGrow: 1 }}>
        <Outlet /> 
      </Container>

      <Footer />
    </div>
  );
};

export default MainLayout;
