import React, { useEffect, useState } from 'react';
import { Fab } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const FloatingEmergencyButton = () => {
  const [emergencyNumber, setEmergencyNumber] = useState('911'); // Default to 911

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const response = await fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`);
            const data = await response.json();
            const countryCode = data.prov;

            switch (countryCode) {
              case 'india':
                setEmergencyNumber('112'); // India
                break;
              case 'US':
                setEmergencyNumber('911'); // United States
                break;
              // Add more countries as needed
              default:
                setEmergencyNumber('112'); 
            }
          }, (error) => {
            console.error('Error getting location:', error);
          });
        } else {
          console.error('Geolocation is not supported by this browser.');
        }
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };

    fetchLocation();
  }, []);

  const handleEmergencyCall = () => {
    window.location.href = `tel:${emergencyNumber}`;
  };

  return (
    <Fab
      color="secondary"
      aria-label="emergency"
      onClick={handleEmergencyCall}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
      }}
    >
      <LocalHospitalIcon />
    </Fab>
  );
};

export default FloatingEmergencyButton;
