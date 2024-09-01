import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import LoginPage from './pages/Login.page.jsx';
import RegisterPage from './pages/Register.page.jsx';
import SpielPage from './pages/Spiel.page.jsx';
import Navbar from './components/navbar.component.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path: "/Register",
    element: <RegisterPage />
  },
  {
    path: "/Spiel",
    element: <SpielPage />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <RouterProvider router={router} />
  </StrictMode>,
)
