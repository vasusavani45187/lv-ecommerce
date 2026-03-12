import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Avatar,
  Paper
} from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    image: null,
    imagePreview: null,
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    toast.dismiss();
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, description } = formData;

    if (!name.trim()) return toast.error('Name is required');
    if (!emailRegex.test(email)) return toast.error('Enter a valid email');
    if (!description.trim()) return toast.error('Description is required');

    toast.success('Thank you for contacting us!');
    setFormData({
      name: '',
      email: '',
      description: '',
      image: null,
      imagePreview: null,
    });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Paper
        elevation={6}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          minHeight: '500px',
          borderRadius: 4,
          overflow: 'hidden',
        }}
      >
        {/* Left Side Image */}
        <Box
          sx={{
            flex: 1,
            backgroundImage: 'url(https://assets.vogue.in/photos/629994f27c94c933ea0c62fb/2:3/w_2560%2Cc_limit/277416023_429623775635067_3047192132953835307_n.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: { xs: 'none', md: 'block' },
          }}
        />

        {/* Right Side Form */}
        <Box
          sx={{
            flex: 1.2,
            p: 5,
            background: 'linear-gradient(135deg, #faf8f4, #ffffff)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              textAlign="center"
              color="#2e2e2e"
            >
              Get in Touch
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              mb={3}
            >
              We'd love to hear from you. Please fill out the form below.
            </Typography>

            <form onSubmit={handleSubmit}>
              <Box display="flex" flexDirection="column" gap={3}>
                <TextField
                  label="Full Name"
                  name="name"
                  fullWidth
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <TextField
                  label="Email"
                  name="email"
                  fullWidth
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  label="Message"
                  name="description"
                  fullWidth
                  required
                  multiline
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                />
                <Button variant="contained" component="label">
                  Upload Image
                  <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
                </Button>

                {formData.imagePreview && (
                  <Box sx={{ mt: 1 }}>
                    <Avatar src={formData.imagePreview} sx={{ width: 100, height: 100 }} />
                  </Box>
                )}

                <Button type="submit" variant="contained" fullWidth color="primary">
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Contact;
