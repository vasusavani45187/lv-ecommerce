import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Link,
  IconButton,
  InputAdornment
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const isStrongPassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const { username, email, password } = formData;

    if (!isStrongPassword(password)) {
      toast.error(
        'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.'
      );
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const usernameExists = users.some((user) => user.username === username);
    if (usernameExists) {
      toast.error('Username already exists');
      return;
    }

    const newUser = {
      username,
      email,
      password,
      orders: []
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('loggedInUser', JSON.stringify(newUser)); // ✅ Auto-login

    toast.success('Account created successfully! Redirecting...');
    navigate('/home');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Create a Louis Vuitton Account
        </Typography>

        <form onSubmit={handleSignUp}>
          <TextField
            fullWidth
            margin="normal"
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            helperText="Minimum 8 characters, including upper, lower, number & symbol"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <Box mt={3}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Sign Up
            </Button>
          </Box>

          <Box mt={2} textAlign="center">
            <Typography variant="body2">
              Already have an account?{' '}
              <Link href="/login" underline="hover">
                Login
              </Link>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}

export default SignUp;
