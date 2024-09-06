import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';

// Importiere die Seiten und Komponenten
import LoginPage from './pages/Login.page.jsx';
import RegisterPage from './pages/Register.page.jsx';
import About from './components/About.jsx';
import SpielPage from './pages/Spiel.page.jsx';
import MainLayout from './Layouts/MainLayout.jsx';
import DashboardPage from './pages/Dashboard.page.jsx';
import NachhaltigkeitPage from './pages/Nachhaltigkeit.page.jsx';


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
]);

// React-Rendering
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
