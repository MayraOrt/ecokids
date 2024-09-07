import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import Deutsch from './pages/Deutsch.jsx';
import RegisterPage from './pages/Register.page.jsx';

import Deutscherste from './pages/Deutscherste.jsx';

import BuchstabenSpiel from './pages/BuchstabenSpiel.jsx';
import WoerterMatching from './pages/WoerterMatching.jsx';
import Leseecke from './pages/Leseecke.jsx';
import Arbeitsmaterialien from './pages/Arbeitsmaterialien.jsx';



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

  {
    path: "/deutsch",
    element: (
      <>
        <globalStyles /> {/* Füge GlobalStyle hier hinzu */}
        <Navbar />
        <Deutsch/>
      </>
    )
  },

  {
    path: "/deutscherste",
    element: (
      <>
        <globalStyles /> {/* Füge GlobalStyle hier hinzu */}
        <Navbar />
        <Deutscherste/>
      </>
    )
  },

  {
    path: "/buchstabenspiel",
    element: (
      <>
        <globalStyles /> {/* Füge GlobalStyle hier hinzu */}
        <Navbar />
        <BuchstabenSpiel/>
      </>
    )
  },


  {
    path: "/woertermatching",
    element: (
      <>
        <globalStyles /> {/* Füge GlobalStyle hier hinzu */}
        <Navbar />
        <WoerterMatching/>
      </>
    )
  },

  {
    path: "/leseecke",
    element: (
      <>
        <globalStyles /> {/* Füge GlobalStyle hier hinzu */}
        <Navbar />
        <Leseecke/>
      </>
    )
  },
  {
    path: "/arbeitsmaterialien",
    element: (
      <>
        <globalStyles /> {/* Füge GlobalStyle hier hinzu */}
        <Navbar />
        <Arbeitsmaterialien/>
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
