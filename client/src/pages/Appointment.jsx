import React, { useState } from "react";
import { TextField, MenuItem, Button, Box, Typography, Stack, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import donateImage from '../assets/hero3.jpg';

const Appointment = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    specialty: "",
    date: "",
    timeRange: "",
  });
  const [success, setSuccess] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3000/api/appointments/book', formData);
      setAppointmentDetails(response.data);
      setSuccess(true);
    } catch (error) {
      console.error('Error booking appointment:', error);
      setAppointmentDetails({ jitsiLink: `https://meet.jit.si/${Math.random().toString(36).substr(2, 9)}` });
      setSuccess(true);
    }
  };

  return (
    <>
      <Box sx={{
        margin: '40px',
        padding: '40px',
        textAlign: 'center',
        py: 5,
        backgroundColor: '#f5f5f5',
        mb: 4,
        backgroundImage: `url(${donateImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        height: '40vh'
      }}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          Schedule Your Appointment
        </Typography>
        <Typography variant="h6" gutterBottom>
          Book a consultation with our specialists easily and quickly.
        </Typography>
      </Box>
      <Container maxWidth="md">
        <Box sx={{ marginBottom: 4, mt: 4, p: 3, boxShadow: 3, borderRadius: 2 }}>
          <Typography variant="h4" textAlign="center" mb={3}>
            Book an Appointment
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                required
              />
              <TextField
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                required
              />
              <TextField
                name="gender"
                label="Gender"
                select
                variant="outlined"
                fullWidth
                onChange={handleChange}
                required
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
              <TextField
                name="specialty"
                label="Specialty"
                select
                variant="outlined"
                fullWidth
                onChange={handleChange}
                required
              >
                <MenuItem value="Dentist">Dentist</MenuItem>
                <MenuItem value="Cardiologist">Cardiologist</MenuItem>
                <MenuItem value="General Practitioner">General Practitioner</MenuItem>
              </TextField>
              <TextField
                name="date"
                label="Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                fullWidth
                onChange={handleChange}
                required
              />
              <TextField
                name="timeRange"
                label="Time Range"
                placeholder="e.g., 10:00 AM - 11:00 AM"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                required
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Book Appointment
              </Button>
            </Stack>
          </form>

          {success && (
            <Box sx={{ mt: 4, textAlign: "center", color: "green" }}>
              <Typography variant="h6" mb={2}>
                Appointment Booked Successfully!
              </Typography>
              <Typography variant="body1" mb={2}>
                Your video call is scheduled. Click the link below to join:
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                href={appointmentDetails.jitsiLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Video Call
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
};

export default Appointment;
