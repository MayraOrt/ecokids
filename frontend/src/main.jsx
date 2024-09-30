import React from 'react';
import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './index.css';

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

import About from './components/About';
import SpielPage from './pages/Spiel.page.jsx';
import MainLayout from './Layouts/MainLayout.jsx';
import DashboardPage from './pages/Dashboard.page.jsx';
import NachhaltigkeitPage from './pages/Nachhaltigkeit.page.jsx';

import Profil from './pages/Profil.jsx';
import MeinProfil from './pages/MeinProfil.jsx';
import Schülerverwaltung from './pages/Schülerverwaltung.jsx';
import Help from './pages/Help.jsx';

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
      <MainLayout>
        <Deutsch/>
      </MainLayout>
    )
  },

  {
    path: "/deutscherste",
    element: (
      <MainLayout>
        <Deutscherste/>
      </MainLayout>
    )
  },

  {
    path: "/buchstabenspiel",
    element: (
      <MainLayout>
        <BuchstabenSpiel/>
      </MainLayout>
    )
  },


  {
    path: "/woertermatching",
    element: (
      <MainLayout>
        <WoerterMatching/>
      </MainLayout>
    )
  },

  {
    path: "/leseecke",
    element: (
      <MainLayout>
        <Leseecke/>
      </MainLayout>
    )
  },
  {
    path: "/arbeitsmaterialien",
    element: (
      <MainLayout>
        <Arbeitsmaterialien/>
      </MainLayout>
    )
  },


  {
    path: "/deutschzweite",
    element: (
      <MainLayout>
        <Deutschzweite/>
      </MainLayout>
    )
  },

  {
    path: "/deutschdritte",
    element: (
      <MainLayout>
        <Deutschdritte/>
      </MainLayout>
    )
  },

  {
    path: "/deutschvierte",
    element: (
      <MainLayout>
        <Deutschvierte/>
      </MainLayout>
    )
  },

  {
    path: "/mathe",
    element: (
      <MainLayout>
        <Mathe/>
      </MainLayout>      
    )
  },

  {
    path: "/mathedritte",
    element: (
      <MainLayout>
        <Mathedritte/>
      </MainLayout>      
    )
  },


  {
    path: "/mathevierte",
    element: (
      <MainLayout>
        <Mathevierte/>
      </MainLayout>      
    )
  },

  {
    path: "/profil",
    element: (
      <MainLayout>
        <Profil/>
      </MainLayout>      
    )
  },
  {
    path: "/meinprofil",
    element: (
      <MainLayout>
        <MeinProfil/>
      </MainLayout>      
    )
  },

  {
    path: "/schülerverwaltung",
    element: (
      <MainLayout>
        <Schülerverwaltung/>
      </MainLayout>      
    )
  },

  {
    path: "/help",
    element: (
      <MainLayout>
        <Help/>
      </MainLayout>      
    )
  },


]);

// React-Rendering
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
