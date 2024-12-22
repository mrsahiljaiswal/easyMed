import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';

const Aboutus = () => {
  return (
    <Container style={{ marginTop: '20px', maxWidth: '1200px' }}>
      <Typography variant="h3" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
        About Us
      </Typography>

      {/* Vision Section */}
      <Box sx={{ marginBottom: '40px' }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#333' }}>
          Our Vision
        </Typography>
        <Typography variant="body1" sx={{ color: '#555' }}>
          At EasyMed, our vision is to revolutionize healthcare by providing fast, reliable, and accessible services to everyone. We aim to bridge the gap between patients and healthcare providers through innovative solutions and compassionate care.
        </Typography>
      </Box>

      {/* Services Section */}
      <Box sx={{ marginBottom: '40px' }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#333' }}>
          Our Services
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ color: '#1976d2' }}>
                  Consultation
                </Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>
                  Get expert consultations from doctors at your convenience.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ color: '#1976d2' }}>
                  Medicine Delivery
                </Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>
                  Fast and reliable delivery of your prescribed medicines.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ color: '#1976d2' }}>
                  Health Monitoring
                </Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>
                  Monitor your health with our advanced tools and support.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ color: '#1976d2' }}>
                  Emergency Support
                </Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>
                  Get immediate support during emergencies anytime, anywhere.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Location Section */}
      <Box sx={{ marginBottom: '40px' }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#333' }}>
          Our Location
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.759850775866!2d77.5649!3d13.0285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670a4b4b4b4%3A0x4b4b4b4b4b4b4b!2sMSRIT%20College!5e0!3m2!1sen!2sin!4v1633072800000!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </Box>
      </Box>

      {/* Contact Section */}
      <Box sx={{ marginBottom: '40px' }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#333' }}>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ color: '#555' }}>
          If you have any questions or need assistance, feel free to reach out to us at:
        </Typography>
        <Typography variant="body1" sx={{ color: '#555', marginTop: '10px' }}>
          <strong>Email:</strong> support@easymed.com
        </Typography>
        <Typography variant="body1" sx={{ color: '#555', marginTop: '10px' }}>
          <strong>Phone:</strong> +1 800 123 4567
        </Typography>
      </Box>
    </Container>
  );
};

export default Aboutus;