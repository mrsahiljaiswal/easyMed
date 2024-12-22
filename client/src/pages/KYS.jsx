import React, { useState } from 'react';
import { Container, Typography, Box, Button, TextField, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const KYS = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    height: '',
    weight: '',
    mentalState: '',
    symptoms: '',
  });

  const [report, setReport] = useState(null);
  const [accuracy, setAccuracy] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Generate a health report based on the form data
    const healthReport = generateHealthReport(formData);
    setReport(healthReport.report);
    setAccuracy(healthReport.accuracy);
  };

  const generateHealthReport = (data) => {
    // Placeholder logic for generating a health report
    const bmi = (data.weight / ((data.height / 100) ** 2)).toFixed(2);
    let mentalState = 'Normal';
    let healthCondition = 'Healthy';
    let accuracy = 90;

    if (data.mentalState.toLowerCase().includes('depressed') || data.mentalState.toLowerCase().includes('sad')) {
      mentalState = 'Depressed';
      accuracy -= 10;
    } else if (data.mentalState.toLowerCase().includes('happy')) {
      mentalState = 'Happy';
    } else if (data.mentalState.toLowerCase().includes('lonely')) {
      mentalState = 'Lonely';
      accuracy -= 5;
    }

    if (data.symptoms.toLowerCase().includes('fever') || data.symptoms.toLowerCase().includes('cold') || data.symptoms.toLowerCase().includes('body pain')) {
      healthCondition = 'Unwell';
      accuracy -= 15;
    }

    return {
      report: `Health Report for ${data.name}:
      - Age: ${data.age}
      - Height: ${data.height} cm
      - Weight: ${data.weight} kg
      - BMI: ${bmi}
      - Mental State: ${mentalState}
      - Health Condition: ${healthCondition}
      
      Please consult with a healthcare provider for a detailed analysis.`,
      accuracy: accuracy,
    };
  };

  return (
    <Container style={{ marginTop: '20px', maxWidth: '800px' }}>
      <Typography variant="h4" gutterBottom>
        Know Your Self (KYS)
      </Typography>
      <Typography variant="body1" gutterBottom>
        Please fill out the following information to get a basic health condition report.
      </Typography>

      <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="age"
              label="Age"
              name="age"
              type="number"
              autoComplete="age"
              value={formData.age}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="height"
              label="Height (cm)"
              name="height"
              type="number"
              autoComplete="height"
              value={formData.height}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="weight"
              label="Weight (kg)"
              name="weight"
              type="number"
              autoComplete="weight"
              value={formData.weight}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="mentalState"
              label="Mental State (e.g., Happy, Sad, Depressed, Lonely)"
              name="mentalState"
              autoComplete="mentalState"
              value={formData.mentalState}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="symptoms"
              label="Health Symptoms (e.g., Fever, Cold, Body Pain)"
              name="symptoms"
              autoComplete="symptoms"
              value={formData.symptoms}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          Get Report
        </Button>
      </Box>

      {report && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Health Report
          </Typography>
          <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
            {report}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Accuracy: {accuracy}%
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 3 }}
            onClick={() => navigate('/appointment')}
          >
            Contact Doctor
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default KYS;