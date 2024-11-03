import './Navbar.component.css';
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SessionContext } from '../contexts/SessionContext';

const Navbar = () => {
  const {isLoggedIn, setSession, session} = useContext(SessionContext); 
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('ecotoken');
    setSession({
      active: false,
      firstName: null,
      lastName: null,
      isTeacher: false
    })
    navigate('/');
  }

  return (
    <nav className="menu-container">
      <div className="navbar-logo">
        <img src="/src/assets/logoimg.png" alt="Logo" />
        <p>ÖkoHelden</p>
      </div>
      <ul className="navbar-links ml-2">
        {
          !isLoggedIn &&
            <li>
              <a href="/">Startseite</a>
            </li>
        }
        {
          isLoggedIn &&
            <li>
              <a href={session.isTeacher ? '/lehrerdash':'/dashboard'}>Dashboard</a>
            </li>
        }
      </ul>

      <div className='ml-auto'>
        {isLoggedIn && 
          <div className="flex items-center gap-2">
            <a href='/profil' className='hover:text-emerald-600'>
              <div className='flex items-center gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <div>
                  {session.firstName + ' ' + session.lastName}
                  <div className='text-xs'>
                    {session.isTeacher ? 'Lehrer' : 'Schuler'}
                  </div>
                  </div>
              </div>
            </a>
            <button onClick={() => handleLogout()} className='btn-secondary'>
              Logout
            </button>
          </div>
        }

        {!isLoggedIn && location.pathname !== '/login' &&
          <a href="/login">
            <button className='btn-primary'>
              Login
            </button>
          </a>
        }

        {!isLoggedIn && location.pathname === '/login' &&
          <a href="/register">
            <button className='btn-secondary'>
              Register
            </button>
          </a>
        }
      </div>

    </nav>
  );
}

export default Navbar

