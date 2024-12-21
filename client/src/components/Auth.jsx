import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box, Alert, Paper } from '@mui/material';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, handleGoogleSignIn } from '../firebase';

const Auth = () => {
  // State hooks for email, password, error handling, and toggle between login and register
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false); // Toggle between Register and Login

  // Register handler
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('User registered successfully!');
      setEmail(''); // Clear email and password after successful registration
      setPassword('');
    } catch (error) {
      setError(error.message);
    }
  };

  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('User logged in successfully!');
      setEmail(''); // Clear email and password after successful login
      setPassword('');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h4" gutterBottom>
            {isRegistering ? 'Register' : 'Login'}
          </Typography>

          {/* Form handling based on the state (isRegistering) */}
          <form onSubmit={isRegistering ? handleRegister : handleLogin} style={{ width: '100%' }}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button variant="contained" color="primary" type="submit" fullWidth sx={{ marginTop: 2 }}>
              {isRegistering ? 'Register' : 'Login'}
            </Button>
          </form>

          {/* Display error message */}
          {error && <Alert severity="error" sx={{ marginTop: 2 }}>{error}</Alert>}

          {/* Google Sign-In button */}
          <Box sx={{ marginTop: 2 }}>
            <Button variant="outlined" color="secondary" onClick={handleGoogleSignIn} fullWidth>
              Sign in with Google
            </Button>
          </Box>

          {/* Toggle between Register and Login view */}
          <Box sx={{ marginTop: 2 }}>
            <Button variant="text" onClick={() => setIsRegistering(!isRegistering)} fullWidth>
              {isRegistering ? 'Already have an account? Login' : 'Don’t have an account? Register'}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Auth;
