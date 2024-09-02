import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [class_level, setClassLevel] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost8080/register', {
        first_name,
        last_name,
        email,
        password,
        class_level
      });

      if (response.status === 201) {
        navigate('/login');
      } else {
        setError('Es gab ein Problem bei der Registrierung.');
      }
    } catch (err) {
      console.error('Registrierungsfehler:', err.response ? err.response.data : err.message);
      setError('Es gab ein Problem bei der Registrierung. Bitte versuche es erneut.');
    }
  };

  return (
    <Container>
      <FormContainer>
        <FormTitle>Registrierung</FormTitle>
        <form onSubmit={handleSubmit}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <FormGroup>
            <FormLabel htmlFor="firstName">Vorname</FormLabel>
            <FormInput
              type="text"
              id="firstName"
              name="first_name" // Name für das Backend
              placeholder="Vorname eingeben"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="lastName">Nachname</FormLabel>
            <FormInput
              type="text"
              id="lastName"
              name="last_name" // Name für das Backend
              placeholder="Nachname eingeben"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="classLevel">Klasse</FormLabel>
            <FormSelect
              id="classLevel"
              name="class_level" // Name für das Backend
              value={class_level}
              onChange={(e) => setClassLevel(e.target.value)}
              required
            >
              <option value="">Bitte wählen</option>
              <option value="1">1. Klasse</option>
              <option value="2">2. Klasse</option>
              <option value="3">3. Klasse</option>
              <option value="4">4. Klasse</option>
              <option value="5">5. Klasse</option>
              <option value="6">6. Klasse</option>
            </FormSelect>
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="email">E-Mail</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email" // Name für das Backend
              placeholder="E-Mail eingeben"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="password">Passwort</FormLabel>
            <FormInput
              type="password"
              id="password"
              name="password" // Name für das Backend
              placeholder="Passwort eingeben"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>
          <SubmitButton type="submit">Registrieren</SubmitButton>
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
  height: 100vh;
  background-color: rgba(245, 232, 232, 1);
`;

const FormContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  width: 100%;
  max-width: 360px;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 15px;
  color: #333;
`;

const FormGroup = styled.div`
  margin-bottom: 10px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #555;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: rgba(132, 219, 210, 1);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
  &:hover {
    background-color: rgba(202, 180, 239, 1);
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
  text-align: center;
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export default RegisterPage;
