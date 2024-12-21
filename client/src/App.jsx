import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { ThemeProvider } from "@mui/material";
import MainLayout from './layouts/MainLayout'; // Import Main Layout
import Aboutus from './pages/Aboutus'; // Page imports
import Appointment from './pages/Appointment';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import MedicineDelivery from './pages/MedicineDelivery';
import theme from './pages/theme';
import SuccessPopup from './pages/SuccessPopup';
import Auth from './components/Auth'; // Import Auth component
import { auth } from './firebase'; // Import Firebase authentication

const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((loggedInUser) => {
      if (loggedInUser) {
        setUser(loggedInUser); // Set user state if logged in
        navigate('/home'); // Redirect to home page after login
      } else {
        setUser(null); // No user, reset state
        navigate('/'); // Redirect to login if no user
      }
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, [navigate]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          {/* Route for unauthenticated users (Login page) */}
          <Route path="/" element={<Auth setUser={setUser} />} />

          {/* Protected routes for authenticated users */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="medicineDelivery" element={<MedicineDelivery />} />
            <Route path="appointment" element={<Appointment />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="/succcess" element={<SuccessPopup />} />
          </Route>

          {/* Error page for undefined routes */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
