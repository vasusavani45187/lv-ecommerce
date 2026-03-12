# Louis Vuitton E-Commerce Frontend

A luxury-themed e-commerce frontend built with React, Material UI, Redux Toolkit, and React Router. The project simulates a branded Louis Vuitton shopping experience with authentication, protected routes, product browsing, cart management, and mock order tracking.

This application is frontend-only. User accounts, session state, and orders are stored in `localStorage`, and product data is loaded from a local static dataset.

## Overview

The app is designed as a portfolio-style e-commerce experience with:

- user sign up and login flows
- protected pages for authenticated users
- a product catalog with filtering, sorting, and search
- Redux-powered cart state
- mock checkout and order history
- light/dark theme support via context
- toast notifications and animated UI elements

## Features

- Authentication with sign up and login forms
- Password strength validation during registration
- Route protection using a reusable `ProtectedRoute`
- Product listing with:
  - category filtering
  - price sorting
  - keyword search
- Product detail page for individual items
- Cart management with quantity updates and item removal
- Coupon-based discount simulation
- Mock payment flow with generated orders
- Profile page with previous orders
- Order details page with simulated delivery progress
- Responsive UI built with Material UI
- Framer Motion animations for a polished storefront feel

## Tech Stack

- React 19
- React Router DOM 7
- Redux Toolkit
- React Redux
- Material UI
- Framer Motion
- React Toastify
- Axios
- Create React App

## Project Structure

```text
src/
  components/     Reusable UI and route guard components
  context/        Theme context and theme toggling
  data/           Static product catalog
  pages/          Route-level pages
  redux/          Cart slice and Redux store
  services/       API helper placeholder
  App.jsx         Main route configuration
  index.js        Application bootstrap
```

## Main User Flow

1. A new user signs up from `/signup`.
2. User data is saved to `localStorage`, and the user is automatically logged in.
3. Protected routes become available after login.
4. Users browse products on the home page, filter and search items, and add products to the cart.
5. Checkout is simulated from the cart page.
6. Orders are stored in `localStorage` and shown on the profile page.
7. Users can open an order to view its details and mock delivery progress.

## Local Data Model

This project does not use a backend or database.

- `users`: stored in `localStorage` after sign up
- `loggedInUser`: current session state
- `orders`: saved after mock checkout
- product catalog: loaded from `src/data/products.js`

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Installation

```bash
npm install
```

### Run in Development

```bash
npm start
```

Open `http://localhost:3000` in the browser.

### Build for Production

```bash
npm run build
```

### Run Tests

```bash
npm test
```

## Available Routes

- `/signup` - user registration
- `/login` - user login
- `/home` - product catalog
- `/product/:id` - product details
- `/cart` - shopping cart and checkout simulation
- `/profile` - user profile and order history
- `/order/:id` - order detail view
- `/about` - about page
- `/contact` - contact page

## Notes and Limitations

- This is a frontend demo project, not a production-ready commerce platform.
- Authentication is client-side only and not secure for real-world deployment.
- Data persistence depends entirely on browser `localStorage`.
- Product images are loaded from external URLs.
- Checkout and order tracking are simulated.
- The app includes an `api.js` service placeholder, but no live backend integration is currently wired in.

## Possible Improvements

- Connect the app to a real authentication and product API
- Persist cart state across reloads
- Add wishlist and product reviews
- Replace mock checkout with a payment gateway integration
- Add admin product management
- Improve automated test coverage
- Add environment-based API configuration

## License

This project is for educational and portfolio use unless you define a separate license.
