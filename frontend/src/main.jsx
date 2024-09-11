import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
<<<<<<< HEAD:src/main.jsx

import globalStyles from './globalStyles.jsx'; // Stelle sicher, dass der Importpfad korrekt ist
=======
import './index.css';
>>>>>>> master:frontend/src/main.jsx

// Importiere die Seiten und Komponenten
import LoginPage from './pages/Login.page.jsx';
import Deutsch from './pages/Deutsch.jsx';
import RegisterPage from './pages/Register.page.jsx';
<<<<<<< HEAD:src/main.jsx

import Deutscherste from './pages/Deutscherste.jsx';
import Deutschzweite from './pages/Deutschzweite.jsx';
import Deutschdritte from './pages/Deutschdritte.jsx';
import Deutschvierte from './pages/Deutschvierte.jsx';

import Mathe from './pages/Mathe.jsx';

import BuchstabenSpiel from './pages/BuchstabenSpiel.jsx';
import WoerterMatching from './pages/WoerterMatching.jsx';
import Leseecke from './pages/Leseecke.jsx';
import Arbeitsmaterialien from './pages/Arbeitsmaterialien.jsx';



import Navbar from './components/Navbar.jsx';
import About from './components/About';
=======
import About from './components/About.jsx';
import SpielPage from './pages/Spiel.page.jsx';
import MainLayout from './Layouts/MainLayout.jsx';
import DashboardPage from './pages/Dashboard.page.jsx';
import NachhaltigkeitPage from './pages/Nachhaltigkeit.page.jsx';

>>>>>>> master:frontend/src/main.jsx




// Router-Konfiguration
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <About />
      </MainLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <MainLayout>
        <LoginPage />
      </MainLayout>
    ),
  },
  {
    path: "/register",
    element: (
      <MainLayout>
        <RegisterPage />
      </MainLayout>
    ),
  },
  {
    path: "/about",
    element: (
      <MainLayout>
        <About />
      </MainLayout>
    ),
  },
  {
    path: "/Spiel",
    element: (
      <MainLayout>
        <SpielPage />
      </MainLayout>
    ),
  },
  {
    path: "/Dashboard",
    element: (
      <MainLayout>
        <DashboardPage />
      </MainLayout>
    ),
  },
  {
    path: "/Nachhaltigkeit",
    element: (
      <MainLayout>
        <NachhaltigkeitPage />
      </MainLayout>
    ),
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

]);

// React-Rendering
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
