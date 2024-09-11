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
import Deutschzweite from './pages/Deutschzweite.jsx';
import Deutschdritte from './pages/Deutschdritte.jsx';
import Deutschvierte from './pages/Deutschvierte.jsx';

import Mathe from './pages/Mathe.jsx';
import Mathedritte from './pages/Mathedritte.jsx';
import Mathevierte from './pages/Mathevierte.jsx';

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


  {
    path: "/deutschzweite",
    element: (
      <>
        <globalStyles /> {/* Füge GlobalStyle hier hinzu */}
        <Navbar />
        <Deutschzweite/>
      </>
    )
  },

  {
    path: "/deutschdritte",
    element: (
      <>
        <globalStyles /> {/* Füge GlobalStyle hier hinzu */}
        <Navbar />
        <Deutschdritte/>
      </>
    )
  },

  {
    path: "/deutschvierte",
    element: (
      <>
        <globalStyles /> {/* Füge GlobalStyle hier hinzu */}
        <Navbar />
        <Deutschvierte/>
      </>
    )
  },

  {
    path: "/mathe",
    element: (
      <>
        <globalStyles /> {/* Füge GlobalStyle hier hinzu */}
        <Navbar />
        <Mathe/>
      </>
    )
  },

  {
    path: "/mathedritte",
    element: (
      <>
        <globalStyles /> {/* Füge GlobalStyle hier hinzu */}
        <Navbar />
        <Mathedritte/>
      </>
    )
  },


  {
    path: "/mathevierte",
    element: (
      <>
        <globalStyles /> {/* Füge GlobalStyle hier hinzu */}
        <Navbar />
        <Mathevierte/>
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
