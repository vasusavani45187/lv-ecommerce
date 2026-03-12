import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../redux/cartSlice';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems || []); // ✅ Corrected key

  const [openPayment, setOpenPayment] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [discountPct, setDiscountPct] = useState(0);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = (subtotal * discountPct) / 100;
  const gst = (subtotal - discount) * 0.28;
  const finalTotal = subtotal - discount + gst;

  const handleFakePayment = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setOpenPayment(false);

      const loggedUser = JSON.parse(localStorage.getItem('loggedInUser'));
      const users = JSON.parse(localStorage.getItem('users')) || [];

      const newOrder = {
        id: Date.now(),
        items: cartItems,
        subtotal,
        discountPct,
        discountAmount: discount,
        total: finalTotal,
        date: new Date().toISOString(),
        userEmail: loggedUser.email,
        username: loggedUser.username,
        deliveryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toDateString(),
        status: 'Order Placed',
      };

      const updatedUsers = users.map(user => {
        if (user.username === loggedUser.username) {
          user.orders = [...(user.orders || []), newOrder];
          localStorage.setItem('loggedInUser', JSON.stringify(user));
          return user;
        }
        return user;
      });
      localStorage.setItem('users', JSON.stringify(updatedUsers));

      const allOrders = JSON.parse(localStorage.getItem('orders')) || [];
      allOrders.push(newOrder);
      localStorage.setItem('orders', JSON.stringify(allOrders));

      alert("✅ Payment successful! Order placed.");
      dispatch(clearCart());
    }, 2500);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom align="center">Your Cart</Typography>

      {cartItems.length === 0 ? (
        <Typography align="center" variant="h6" sx={{ mt: 4 }}>
          Your cart is empty.
        </Typography>
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Product</strong></TableCell>
                  <TableCell><strong>Price</strong></TableCell>
                  <TableCell><strong>Quantity</strong></TableCell>
                  <TableCell><strong>Total</strong></TableCell>
                  <TableCell><strong>Action</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>${item.price}</TableCell>
                    <TableCell>
                      <Button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>-</Button>
                      {item.quantity}
                      <Button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</Button>
                    </TableCell>
                    <TableCell>${(item.price * item.quantity).toLocaleString()}</TableCell>
                    <TableCell>
                      <Button color="error" onClick={() => dispatch(removeFromCart(item.id))}>
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Coupon Section */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="subtitle1" gutterBottom>
              Available Coupons:
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap">
              {[
                { code: 'SAVE5', pct: 5, min: 500 },
                { code: 'SAVE10', pct: 10, min: 1000 },
                { code: 'LV15', pct: 15, min: 2000 },
                { code: 'LV20', pct: 20, min: 3000 },
                { code: 'LUXE25', pct: 25, min: 5000 },
              ]
                .filter(c => subtotal >= c.min)
                .map(coupon => (
                  <Button
                    key={coupon.code}
                    variant={discountPct === coupon.pct ? 'contained' : 'outlined'}
                    color="success"
                    onClick={() => setDiscountPct(coupon.pct)}
                  >
                    {coupon.code} - {coupon.pct}% OFF
                  </Button>
                ))}
            </Stack>
            {subtotal < 500 && (
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                Spend at least $500 to unlock coupon codes.
              </Typography>
            )}
          </Box>

          {/* Price Summary */}
          <Box sx={{ mt: 4, textAlign: 'right' }}>
            <Typography variant="h6">Subtotal: ${subtotal.toLocaleString()}</Typography>
            {discountPct > 0 && (
              <Typography variant="h6" color="green">
                Discount ({discountPct}%): -${discount.toFixed(2)}
              </Typography>
            )}
            <Typography variant="h6">Tax (28%): ${gst.toFixed(2)}</Typography>
            <Typography variant="h5" sx={{ mt: 1 }}>
              Final Total: ${finalTotal.toFixed(2)}
            </Typography>

            <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 3 }}>
              <Button variant="outlined" color="error" onClick={() => dispatch(clearCart())}>
                Clear Cart
              </Button>
              <Button variant="contained" color="primary" onClick={() => setOpenPayment(true)}>
                Pay Now
              </Button>
            </Stack>
          </Box>
        </>
      )}

      {/* Simulated Payment Dialog */}
      <Dialog open={openPayment} onClose={() => setOpenPayment(false)}>
        <DialogTitle>Processing Payment</DialogTitle>
        <DialogContent>
          {processing ? (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100px">
              <CircularProgress />
            </Box>
          ) : (
            <DialogContentText>
              Click below to simulate payment of <strong>${finalTotal.toFixed(2)}</strong>.
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPayment(false)} disabled={processing}>Cancel</Button>
          <Button onClick={handleFakePayment} disabled={processing} variant="contained">
            Confirm Payment
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Cart;
