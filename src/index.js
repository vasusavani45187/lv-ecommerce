import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from './context/ThemeContext';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <App />
          <ToastContainer autoClose={3000} />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
