import React from 'react';
import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import globalStyles from './globalStyles.jsx'; // Stelle sicher, dass der Importpfad korrekt ist

// Importiere die Seiten und Komponenten
import LoginPage from './pages/Login.page.jsx';
import RegisterPage from './pages/Register.page.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About';

// Router-Konfiguration
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <globalStyles /> {/* Füge GlobalStyle hier hinzu */}
        <Navbar />
        <About />
      </>
    )
  },
  {
    path: "/login",
    element: (
      <>
        <globalStyles /> {/* Füge GlobalStyle hier hinzu */}
        <Navbar />
        <LoginPage />
      </>
    )
  },
  {
    path: "/register",
    element: (
      <>
        <globalStyles /> {/* Füge GlobalStyle hier hinzu */}
        <Navbar />
        <RegisterPage />
      </>
    )
  },
  {
    path: "/about",
    element: (
      <>
        <globalStyles /> {/* Füge GlobalStyle hier hinzu */}
        <Navbar />
        <About />
      </>
    )
  },
]);

// React-Rendering
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
