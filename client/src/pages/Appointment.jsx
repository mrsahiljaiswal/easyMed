import React, { useState } from "react";
import { TextField, MenuItem, Button, Box, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SuccessPopup from "./SuccessPopup";
// import { handleSubmit } from "../utils/handleSubmit"; // Import handleSubmit function from utils

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

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4, p: 3, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h4" textAlign="center" mb={3}>
        Book an Appointment
      </Typography>
      <form onSubmit={(e) => handleSubmit(e, formData, setAppointmentDetails, setSuccess, navigate)}>
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
      {success && <SuccessPopup appointment={appointmentDetails} />}
    </Box>
  );
};

export default Appointment;
