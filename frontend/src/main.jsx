import React, { useContext, useEffect } from 'react';
import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Navigate,
  useRoutes,
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
import MatheErste from './pages/MatheErste.jsx';
import Mathezweite from './pages/Mathezweite.jsx';
import Mathedritte from './pages/Mathedritte.jsx';
import Mathevierte from './pages/Mathevierte.jsx';

import BuchstabenSpiel from './pages/BuchstabenSpiel.jsx';
import WoerterMatching from './pages/WoerterMatching.jsx';
import Leseecke from './pages/Leseecke.jsx';
import Arbeitsmaterialien from './pages/Arbeitsmaterialien.jsx';

import About from './pages/About';
import SpielPage from './pages/Spiel.page.jsx';
import MainLayout from './Layouts/MainLayout.jsx';
import DashboardPage from './pages/Dashboard.page.jsx';
import NachhaltigkeitPage from './pages/Nachhaltigkeit.page.jsx';

import Profil from './pages/Profil.jsx';
import MeinProfil from './pages/MeinProfil.jsx';
import Schülerverwaltung from './pages/Schülerverwaltung.jsx';
import Help from './pages/Help.jsx';

import { SessionContext, SessionProvider } from './contexts/SessionContext.jsx';

const Routes = () => {
  const {isLoggedIn, checkSession, isLoading, session} = useContext(SessionContext);

  useEffect(() => {
    checkSession()
  }, [checkSession])

  if(isLoading) {
    return useRoutes([]);
  }

  return useRoutes([
    { path: "/", element: <MainLayout> <About /> </MainLayout> },
    { path: "/login", element: !isLoggedIn ? <MainLayout> <LoginPage /> </MainLayout> : <Navigate replace to="/" /> },
    { path: "/register", element: !isLoggedIn ? <MainLayout> <RegisterPage /> </MainLayout> : <Navigate replace to="/" /> },
    { path: "/Spiel", element: isLoggedIn ? <MainLayout> <SpielPage /> </MainLayout> : <Navigate replace to="/" /> },
    { path: "/Dashboard", element: isLoggedIn ? <MainLayout> <DashboardPage /> </MainLayout> : <Navigate replace to="/" /> },
    { path: "/Nachhaltigkeit", element: isLoggedIn ? <MainLayout> <NachhaltigkeitPage /> </MainLayout> : <Navigate replace to="/" /> },
    { path: "/deutsch", element: isLoggedIn ? <MainLayout> <Deutsch /> </MainLayout> : <Navigate replace to="/" /> },
    { path: "/deutscherste", element: isLoggedIn ? <MainLayout> <Deutscherste /> </MainLayout> : <Navigate replace to="/" /> },
    { path: "/buchstabenspiel", element: isLoggedIn ? <MainLayout> <BuchstabenSpiel /> </MainLayout> : <Navigate replace to="/" /> },
    { path: "/woertermatching", element: isLoggedIn ? <MainLayout> <WoerterMatching /> </MainLayout> : <Navigate replace to="/" /> },
    { path: "/leseecke", element: isLoggedIn ? <MainLayout> <Leseecke /> </MainLayout> : <Navigate replace to="/" /> },
    { path: "/arbeitsmaterialien", element: isLoggedIn ? <MainLayout> <Arbeitsmaterialien /> </MainLayout> : <Navigate replace to="/" /> },
    { path: "/deutschzweite", element: isLoggedIn ? <MainLayout> <Deutschzweite /> </MainLayout> : <Navigate replace to="/" /> },
    { path: "/deutschdritte", element: isLoggedIn ? <MainLayout> <Deutschdritte /> </MainLayout> : <Navigate replace to="/" /> },
    { path: "/deutschvierte", element: isLoggedIn ? <MainLayout> <Deutschvierte /> </MainLayout> : <Navigate replace to="/" /> },
    { path: "/mathe", element: isLoggedIn ? <MainLayout> <Mathe /> </MainLayout> : <Navigate replace to="/" /> },
    { path: "/matheErste", element: isLoggedIn ? <MainLayout> <MatheErste /> </MainLayout> : <Navigate replace to="/" /> },
    { path: "/mathezweite", element: isLoggedIn ? <MainLayout> <Mathezweite /> </MainLayout> : <Navigate replace to="/" /> },
    { path: "/mathedritte", element: isLoggedIn ? <MainLayout> <Mathedritte /> </MainLayout> : <Navigate replace to="/" /> },
    { path: "/mathevierte", element: isLoggedIn ? <MainLayout> <Mathevierte /> </MainLayout> : <Navigate replace to="/" /> },
    { path: "/profil", element: isLoggedIn ? <MainLayout> <Profil/> </MainLayout> : <Navigate replace to="/" /> },
    { path: "/meinprofil", element: isLoggedIn ? <MainLayout> <MeinProfil/> </MainLayout> : <Navigate replace to="/" /> },
    { path: "/schülerverwaltung", element: isLoggedIn && session.isTeacher ? <MainLayout> <Schülerverwaltung/> </MainLayout> : <Navigate replace to="/" /> },
    { path: "/help", element: isLoggedIn ? <MainLayout> <Help/> </MainLayout> : <Navigate replace to="/" /> },
  ]);
}

const App = () => {
  return (
    <SessionProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </SessionProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
