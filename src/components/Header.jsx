import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

  const handleLogoutConfirm = () => {
    localStorage.removeItem('loggedInUser');
    setOpenLogoutDialog(false);
    navigate('/login');
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: '#000' }}>
        <Toolbar>
          <Typography
            component={Link}
            to="/home"
            sx={{ flexGrow: 1, color: '#fff', textDecoration: 'none' }}
            variant="h6"
          >
            Louis Vuitton
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Button color="inherit" component={Link} to="/home">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
            <IconButton color="inherit" component={Link} to="/cart">
              <Badge badgeContent={count} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <Button color="inherit" component={Link} to="/profile">
              Profile
            </Button>
            <Button
              color="error"
              variant="outlined"
              onClick={() => setOpenLogoutDialog(true)}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Centered Logout Confirmation Dialog */}
      <Dialog
        open={openLogoutDialog}
        onClose={() => setOpenLogoutDialog(false)}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to log out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenLogoutDialog(false)}>Cancel</Button>
          <Button onClick={handleLogoutConfirm} variant="contained" color="error">
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Header;
