import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log (email, password);

    try {
      const response = await axios.post('http://localhost:8080/Login', {
        email,
        password,       
      });

      if (response.status === 201) {
        // navigate('/login');
      } else {
        setError('Es gab ein Problem bei der Login.');
      }
    } catch (err) {
      console.error('Loginfehler:', err.response ? err.response.data : err.message);
      setError('Es gab ein Problem bei der Login. Bitte versuche es erneut.');
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
    background-color: rgba(202, 180, 239, 1);
  }
`;



const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
  text-align: center;
`;

export default LoginPage;
