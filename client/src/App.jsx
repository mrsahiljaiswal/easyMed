import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './layouts/MainLayout';
import Auth from './components/Auth';
import { auth } from './firebase';
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import KYS from './pages/KYS';
import MedicineDelivery from './pages/MedicineDelivery';
import Aboutus from './pages/Aboutus';

const App = () => {
  const [user, setUser] = useState(null);

  // Authentication check using AuthHandler
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((loggedInUser) => {
      setUser(loggedInUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        {/* If no user is logged in, render the Auth page */}
        <Route path="/" element={!user ? <Auth setUser={setUser} /> : <Layout setUser={setUser} />}/>

        {/* Define protected routes that require a logged-in user */}
        <Route element={<Layout setUser={setUser} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/kys" element={<KYS />} />
          <Route path="/medicinedelivery" element={<MedicineDelivery />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
