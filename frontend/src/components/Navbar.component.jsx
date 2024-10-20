import './Navbar.component.css';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { SessionContext } from '../contexts/SessionContext';

const Navbar = () => {
  const {isLoggedIn, setSession, session} = useContext(SessionContext); 
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('ecotoken');
    setSession({
      active: false,
      firstName: null,
      lastName: null
    })
    navigate('/');
  }

  return (
    <nav className="menu-container">
      <div className="navbar-logo">
        <img src="/src/assets/logoimg.png" alt="Logo" />
        <p>ÖkoHelden</p>
      </div>
      <ul className="navbar-links">
        {
          !isLoggedIn &&
            <li>
              <a href="/">Startseite</a>
            </li>
        }
        {
          isLoggedIn &&
            <li>
              <a href="/Dashboard">Home</a>
            </li>
        }
      </ul>
      {isLoggedIn && 
        <div className="navbar-user">
          <a href='/profil' className='hover:text-emerald-600'><span>Welcome, {session.firstName}</span></a>
          <Buttonout onClick={() => handleLogout()}>
            Logout
          </Buttonout>
        </div>
      }

      {!isLoggedIn && 
        <Button as={Link} to="/Login">
          Login
        </Button>
      }

    </nav>
  );
}

export default Navbar



const Button = styled(Link)`
  padding: 0.5rem 1rem;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  color: white;
  background-color: rgba(132, 219, 210, 1);
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  
 
`;

const Buttonout = styled(Link)`
  padding: 0.5rem 1rem;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  color: black;
  
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  `;
