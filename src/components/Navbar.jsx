import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Header>
      <LogoContainer>
        <LogoImage
          loading="lazy"
          srcSet="
            https://cdn.builder.io/api/v1/image/assets/TEMP/5bb4b790d5b66eebff12b543947265db2336101a6c8daeecc99a35c9f9429fd3?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=100 100w,
            https://cdn.builder.io/api/v1/image/assets/TEMP/5bb4b790d5b66eebff12b543947265db2336101a6c8daeecc99a35c9f9429fd3?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=200 200w,
            https://cdn.builder.io/api/v1/image/assets/TEMP/5bb4b790d5b66eebff12b543947265db2336101a6c8daeecc99a35c9f9429fd3?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=400 400w,
            https://cdn.builder.io/api/v1/image/assets/TEMP/5bb4b790d5b66eebff12b543947265db2336101a6c8daeecc99a35c9f9429fd3?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=800 800w,
            https://cdn.builder.io/api/v1/image/assets/TEMP/5bb4b790d5b66eebff12b543947265db2336101a6c8daeecc99a35c9f9429fd3?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=1200 1200w,
            https://cdn.builder.io/api/v1/image/assets/TEMP/5bb4b790d5b66eebff12b543947265db2336101a6c8daeecc99a35c9f9429fd3?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=1600 1600w,
            https://cdn.builder.io/api/v1/image/assets/TEMP/5bb4b790d5b66eebff12b543947265db2336101a6c8daeecc99a35c9f9429fd3?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=2000 2000w
          "
          sizes="(max-width: 600px) 100vw, 80px" /* Größe des Logos */
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bb4b790d5b66eebff12b543947265db2336101a6c8daeecc99a35c9f9429fd3"
          alt="Logo"
        />
        <CompanyName>
          EcoKids
        </CompanyName>
      </LogoContainer>
      <NavLinks>
        <NavLink href="/">
          Startseite
        </NavLink>
      </NavLinks>
      <ButtonContainer>
       
        <Buttonout as={Link} to="/Logout">
          Logout
        </Buttonout>
        <Button as={Link} to="/Login">
          Login
        </Button>
      </ButtonContainer>
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 1rem;
  background-color: white;
  box-shadow: none;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem 4rem;
  gap: 0.5rem;
`;

const LogoImage = styled.img`
  width: 80px; /* Logo größer machen */
  height: auto;
  object-fit: contain;
  aspect-ratio: 1 / 1; /* Behält das Seitenverhältnis bei */
`;

const CompanyName = styled.div`
  font-size: 32px; /* Schriftgröße auf 32px setzen */
  font-weight: bold; /* Fett darstellen */
  color: black;
  font-family: 'Nunito', sans-serif; /* Schriftart auf Nunito setzen */
`;

const NavLinks = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

const NavLink = styled.a`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.030em;
  text-align: center;
  color: black;
  text-decoration: none;
  font-family: Ubuntu, sans-serif;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem; /* Abstand zwischen Buttons */
`;

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

export default Navbar;
