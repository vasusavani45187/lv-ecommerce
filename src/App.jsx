import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Profile from './pages/Profile';
import OrderDetails from './pages/OrderDetails';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // ✅ Ensure styles are loaded

function App() {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  const hideHeaderPaths = ['/signup', '/login'];

  return (
    <>
      {!hideHeaderPaths.includes(location.pathname) && <Header />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route
          path="/signup"
          element={user ? <Navigate to="/home" /> : <SignUp />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/home" /> : <Login />}
        />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order/:id"
          element={
            <ProtectedRoute>
              <OrderDetails />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* ✅ Toast container at the end, with global config */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
