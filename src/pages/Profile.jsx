import React, { useEffect, useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const usr = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!usr) {
      navigate('/login');
      return;
    }

    setUser(usr);

    const allOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const userOrders = allOrders
      .filter((o) => o.userEmail === usr.email)
      .sort((a, b) => b.id - a.id); // latest first
    setOrders(userOrders);
  }, [navigate]);

  const handleDeleteOrders = () => {
    if (!window.confirm('Are you sure you want to delete all your previous orders?')) return;

    // Remove current user's orders from localStorage
    const allOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const remaining = allOrders.filter((o) => o.userEmail !== user.email);
    localStorage.setItem('orders', JSON.stringify(remaining));

    setOrders([]); // Clear UI
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Profile
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="subtitle1"><strong>Username:</strong> {user.username}</Typography>
        <Typography variant="subtitle1"><strong>Email:</strong> {user.email}</Typography>
      </Paper>

      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="h6">Previous Orders</Typography>
        {orders.length > 0 && (
          <Button variant="outlined" color="error" onClick={handleDeleteOrders}>
            Delete All Orders
          </Button>
        )}
      </Box>

      {orders.length === 0 ? (
        <Typography>No orders yet.</Typography>
      ) : (
        <List>
          {orders.map((order, index) => (
            <Box key={order.id}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate(`/order/${order.id}`)}>
                  <ListItemText
                    primary={`Order #${orders.length - index}`}
                    secondary={`Total: $${order.total.toFixed(2)} | Items: ${order.items.length}`}
                  />
                </ListItemButton>
              </ListItem>
            </Box>
          ))}
        </List>
      )}
    </Container>
  );
}

export default Profile;
