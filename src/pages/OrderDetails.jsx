import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const steps = [
  'Order Placed',
  'Packaging',
  'Shipping Done',
  'Reached LV Warehouse',
  'With Local Delivery Partner',
  'Out for Delivery',
  'Delivered'
];

function OrderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const allOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const found = allOrders.find(o => o.id === Number(id)); // ✅ convert id to number
    if (!found) {
      navigate('/profile');
    } else {
      setOrder(found);
      setActiveStep(Math.floor(Math.random() * steps.length)); // Simulated status
    }
  }, [id, navigate]);

  if (!order) return null;

  return (
    <Container sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Order Details
        </Typography>

        <Typography variant="subtitle1"><strong>Order ID:</strong> {order.id}</Typography>
        <Typography variant="subtitle1"><strong>User:</strong> {order.username}</Typography>
        <Typography variant="subtitle1"><strong>Email:</strong> {order.userEmail}</Typography>
        <Typography variant="subtitle1"><strong>Total Paid:</strong> ${order.total.toFixed(2)}</Typography>
        <Typography variant="subtitle1" gutterBottom>
          <strong>Expected Delivery:</strong> {order.deliveryDate || 'In 5–7 business days'}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6">Items:</Typography>
        <List>
          {order.items.map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${item.name} × ${item.quantity}`}
                secondary={`$${item.price.toFixed(2)} each | $${(item.price * item.quantity).toFixed(2)} total`}
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>Order Status:</Typography>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box textAlign="center" mt={4}>
          <Button variant="contained" onClick={() => navigate('/profile')}>
            Back to Profile
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default OrderDetails;
