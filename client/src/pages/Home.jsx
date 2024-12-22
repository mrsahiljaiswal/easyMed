import React from 'react';
import { Container, Grid, Typography, Button, Box, Link, Card, CardContent, CardMedia } from '@mui/material';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Box sx={{
        backgroundImage: 'url("/hero-image.jpg")',
        backgroundSize: 'cover',
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        flexDirection: 'column',
        padding: '0 20px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a dark overlay
        backgroundBlendMode: 'darken'
      }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Welcome to EasyMed
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: 3 }}>
          Your health, our priority. Fast and reliable healthcare services.
        </Typography>
        <Button variant="contained" color="primary" component={Link} href="/appointment" sx={{ padding: '10px 20px' }}>
          Book an Appointment
        </Button>
      </Box>

      {/* Our Services Section */}
      <Container sx={{ marginTop: '50px' }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: '30px', color: '#333' }}>
          Our Services
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {/* Service Boxes */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 3 }}>
              <CardMedia
                component="img"
                image="/service1.jpg"
                alt="Service 1"
                sx={{ height: 140, width: '100%' }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: '#1976d2' }}>Consultation</Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>Get expert consultations from doctors at your convenience.</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 3 }}>
              <CardMedia
                component="img"
                image="/service2.jpg"
                alt="Service 2"
                sx={{ height: 140, width: '100%' }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: '#1976d2' }}>Medicine Delivery</Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>Fast and reliable delivery of your prescribed medicines.</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 3 }}>
              <CardMedia
                component="img"
                image="/service3.jpg"
                alt="Service 3"
                sx={{ height: 140, width: '100%' }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: '#1976d2' }}>Health Monitoring</Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>Monitor your health with our advanced tools and support.</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 3 }}>
              <CardMedia
                component="img"
                image="/service4.jpg"
                alt="Service 4"
                sx={{ height: 140, width: '100%' }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: '#1976d2' }}>Emergency Support</Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>Get immediate support during emergencies anytime, anywhere.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Medicinal Products Section with Auto-Scroll */}
      <Box sx={{ backgroundColor: '#f4f4f4', padding: '50px 0' }}>
        <Container>
          <Typography variant="h4" align="center" sx={{ marginBottom: '30px', color: '#333' }}>
            Our Medicinal Products
          </Typography>
          <Box sx={{ overflowX: 'auto', display: 'flex', gap: 2 }}>
            {/* Sample Product Cards */}
            <Card sx={{ minWidth: 250, maxWidth: 250, boxShadow: 3 }}>
              <CardMedia
                component="img"
                image="/product1.jpg"
                alt="Product 1"
                sx={{ height: 140 }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: '#1976d2' }}>Pain Reliever</Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>$25.99</Typography>
              </CardContent>
            </Card>

            <Card sx={{ minWidth: 250, maxWidth: 250, boxShadow: 3 }}>
              <CardMedia
                component="img"
                image="/product2.jpg"
                alt="Product 2"
                sx={{ height: 140 }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: '#1976d2' }}>Cough Syrup</Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>$15.99</Typography>
              </CardContent>
            </Card>

            <Card sx={{ minWidth: 250, maxWidth: 250, boxShadow: 3 }}>
              <CardMedia
                component="img"
                image="/product3.jpg"
                alt="Product 3"
                sx={{ height: 140 }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: '#1976d2' }}>Antibiotics</Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>$30.99</Typography>
              </CardContent>
            </Card>

            <Card sx={{ minWidth: 250, maxWidth: 250, boxShadow: 3 }}>
              <CardMedia
                component="img"
                image="/product4.jpg"
                alt="Product 4"
                sx={{ height: 140 }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: '#1976d2' }}>Vitamins</Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>$10.99</Typography>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>

      {/* Book an Appointment Poster */}
      <Box sx={{
        backgroundImage: 'url("/appointment-banner.jpg")',
        backgroundSize: 'cover',
        height: '60vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        marginTop: '50px',
        flexDirection: 'column',
        padding: '0 20px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a dark overlay
        backgroundBlendMode: 'darken'
      }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Book Your Appointment Now
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 3 }}>
          Our doctors are ready to help you. Schedule your appointment today!
        </Typography>
        <Button variant="contained" color="secondary" component={Link} href="/appointment" sx={{ padding: '10px 20px' }}>
          Book Now
        </Button>
      </Box>

    </div>
  );
};

export default Home;
