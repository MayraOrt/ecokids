import './Navbar.component.css';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
    const isLoggedIn = false
    return (
      <nav className="menu-container">
        <div className="navbar-logo">
          <img src="/src/assets/logoimg.png" alt="Logo" />
          <p>ÖkoHelden</p>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="/">Startseite</a>
          </li>
          <li>
            <a href="/Dashboard">Fächer</a>
          </li>
        </ul>
        {isLoggedIn && 
          <div className="navbar-user">
            <span>Welcome, User</span>
          <Buttonout as={Link} to="/Logout">
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