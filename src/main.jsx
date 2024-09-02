import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import globalStyles from './GlobalStyle.jsx'; // Stelle sicher, dass der Importpfad korrekt ist

// Importiere die Seiten und Komponenten
import LoginPage from './pages/Login.page.jsx';
import RegisterPage from './pages/Register.page.jsx';
import About from './components/About';
import SpielPage from './pages/Spiel.page.jsx';
import Navbar from './components/navbar.component.jsx';
import MainLayout from './Layouts/MainLayout.jsx';

// Router-Konfiguration
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <About />
      </MainLayout>
    )
  },
  {
    path: "/login",
    element: 
    <MainLayout>
      <LoginPage />
    </MainLayout>
     
      
  },
  {
    path: "/register",
    element:
    <MainLayout>
      <RegisterPage /> 
      </MainLayout>
  },
  {
    path: "/about",
    element: 
    <MainLayout>
      <About />
      </MainLayout>
  },
  {
    path: "/Spiel",
    element: 
    <MainLayout>
      <SpielPage />
      </MainLayout>
  },
]);

// React-Rendering
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
