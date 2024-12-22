import React, { useState } from 'react';
import { Container, Typography, Box, Button, TextField, Grid, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem } from '@mui/material';
import products from '../data/products'; // Import products data
import donateImage from '../assets/donate.jpg'; // Import background image
import axios from 'axios'; // Import axios for HTTP requests

const Donate = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    surgery: { name: '', email: '', amount: '', phone: '' },
    medicine: { name: '', email: '', details: '', phone: '' },
    blood: { name: '', email: '', bloodType: '', phone: '' },
    disaster: { name: '', email: '', help: '', phone: '' }
  });

  const handleDonateNow = async (event, type) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/donations', formData[type]);
      setOpenDialog(true);
    } catch (error) {
      console.error('Error sending donation data:', error);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleChange = (event, type) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [type]: {
        ...prevData[type],
        [name]: value,
      },
    }));
  };

  // Extract medicine names from products data
  const medicineNames = products.flatMap(category => category.items.map(item => item.name));

  return (
    <Container style={{ marginTop: '20px', maxWidth: '1200px' }}>
      {/* Hero Section */}
      <Box
        sx={{
            height: '40vh',
          textAlign: 'center',
          py: 5,
          backgroundColor: '#f5f5f5',
          mb: 4,
          backgroundImage: `url(${donateImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding:'40px',
          fontFamily: 'Arial, sans-serif'
          
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
        Donate for Care
        </Typography>
        <Typography variant="h6" gutterBottom sx={{}}>
        Your generous donations help us provide better healthcare services to those in need. Thank you for your support!
        </Typography>
       
      </Box>

     

      {/* Donation Sections */}
      <Grid container spacing={4} sx={{ mt: 3 }}>
        {/* Donate Money for Surgery */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Donate Money for Surgery
              </Typography>
              <Typography variant="body2" gutterBottom>
                Help fund surgeries for those who cannot afford them.
              </Typography>
              <Box component="form" sx={{ mt: 2 }} onSubmit={(e) => handleDonateNow(e, 'surgery')}>
                <TextField
                  required
                  fullWidth
                  id="surgery-name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  margin="normal"
                  value={formData.surgery.name}
                  onChange={(e) => handleChange(e, 'surgery')}
                />
                <TextField
                  required
                  fullWidth
                  id="surgery-email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  value={formData.surgery.email}
                  onChange={(e) => handleChange(e, 'surgery')}
                />
                <TextField
                  required
                  fullWidth
                  id="surgery-amount"
                  label="Donation Amount"
                  name="amount"
                  type="number"
                  autoComplete="amount"
                  margin="normal"
                  value={formData.surgery.amount}
                  onChange={(e) => handleChange(e, 'surgery')}
                />
                <TextField
                  required
                  fullWidth
                  id="surgery-phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone"
                  margin="normal"
                  value={formData.surgery.phone}
                  onChange={(e) => handleChange(e, 'surgery')}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Donate Now
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Donate Medicine */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Donate Medicine
              </Typography>
              <Typography variant="body2" gutterBottom>
                Provide essential medicines to those in need.
              </Typography>
              <Box component="form" sx={{ mt: 2 }} onSubmit={(e) => handleDonateNow(e, 'medicine')}>
                <TextField
                  required
                  fullWidth
                  id="medicine-name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  margin="normal"
                  value={formData.medicine.name}
                  onChange={(e) => handleChange(e, 'medicine')}
                />
                <TextField
                  required
                  fullWidth
                  id="medicine-email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  value={formData.medicine.email}
                  onChange={(e) => handleChange(e, 'medicine')}
                />
                <TextField
                  required
                  fullWidth
                  select
                  id="medicine-details"
                  label="Medicine Details"
                  name="details"
                  autoComplete="details"
                  margin="normal"
                  value={formData.medicine.details}
                  onChange={(e) => handleChange(e, 'medicine')}
                >
                  {medicineNames.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  required
                  fullWidth
                  id="medicine-phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone"
                  margin="normal"
                  value={formData.medicine.phone}
                  onChange={(e) => handleChange(e, 'medicine')}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Donate Now
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Donate Blood */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Donate Blood
              </Typography>
              <Typography variant="body2" gutterBottom>
                Save lives by donating blood.
              </Typography>
              <Box component="form" sx={{ mt: 2 }} onSubmit={(e) => handleDonateNow(e, 'blood')}>
                <TextField
                  required
                  fullWidth
                  id="blood-name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  margin="normal"
                  value={formData.blood.name}
                  onChange={(e) => handleChange(e, 'blood')}
                />
                <TextField
                  required
                  fullWidth
                  id="blood-email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  value={formData.blood.email}
                  onChange={(e) => handleChange(e, 'blood')}
                />
                <TextField
                  required
                  fullWidth
                  select
                  id="blood-type"
                  label="Blood Type"
                  name="bloodType"
                  autoComplete="blood-type"
                  margin="normal"
                  value={formData.blood.bloodType}
                  onChange={(e) => handleChange(e, 'blood')}
                >
                  {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  required
                  fullWidth
                  id="blood-phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone"
                  margin="normal"
                  value={formData.blood.phone}
                  onChange={(e) => handleChange(e, 'blood')}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Donate Now
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Disaster Relief */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Disaster Relief
              </Typography>
              <Typography variant="body2" gutterBottom>
                Provide help and support during disasters.
              </Typography>
              <Box component="form" sx={{ mt: 2 }} onSubmit={(e) => handleDonateNow(e, 'disaster')}>
                <TextField
                  required
                  fullWidth
                  id="disaster-name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  margin="normal"
                  value={formData.disaster.name}
                  onChange={(e) => handleChange(e, 'disaster')}
                />
                <TextField
                  required
                  fullWidth
                  id="disaster-email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  value={formData.disaster.email}
                  onChange={(e) => handleChange(e, 'disaster')}
                />
                <TextField
                  required
                  fullWidth
                  select
                  id="disaster-help"
                  label="Type of Help"
                  name="help"
                  autoComplete="help"
                  margin="normal"
                  value={formData.disaster.help}
                  onChange={(e) => handleChange(e, 'disaster')}
                >
                  {['Food', 'Shelter', 'Medical Supplies', 'Volunteering'].map((help) => (
                    <MenuItem key={help} value={help}>
                      {help}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  required
                  fullWidth
                  id="disaster-phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone"
                  margin="normal"
                  value={formData.disaster.phone}
                  onChange={(e) => handleChange(e, 'disaster')}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Donate Now
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Thank You Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Thank You!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thank you for taking a step to save a life. Your generosity is greatly appreciated!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Donate;