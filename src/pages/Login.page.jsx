import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Hier kannst du deine Login-Logik einfügen
    // Zum Beispiel: API-Aufruf zur Authentifizierung

    try {
      // Dummy-Login-Überprüfung
      if (email === 'user@example.com' && password === 'password') {
        // Erfolgreiches Login
        navigate('/about'); // Weiterleitung nach dem Login
      } else {
        // Fehlerhafte Anmeldeinformationen
        setError('Invalid email or password.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <Container>
      <FormContainer>
        <FormTitle>Login</FormTitle>
        <form onSubmit={handleSubmit}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <FormGroup>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>
          <SubmitButton type="submit">Login</SubmitButton>
         
        </form>
      </FormContainer>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 75px);
  background-color: rgba(245, 232, 232, 1);
`;

const FormContainer = styled.div`
  padding: 40px;
  background-color: #fff;
  width: 400px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #555;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: rgba(132, 219, 210, 1);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  &:hover {
    background-color: rgba(237, 84, 29, 1);
  }
`;



const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
  text-align: center;
`;

export default LoginPage;
