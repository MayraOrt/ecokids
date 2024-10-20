import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SessionContext } from '../contexts/SessionContext';

const LoginPage = () => {
  const { checkSession } = useContext(SessionContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    //Verbindung mit Backend - axios: HTTP anfrage 

    try {
      const response = await axios.post('http://localhost:8080/login', {
        email,
        password,       
      });

      if (response.status === 200 && response.data.token) {
        localStorage.setItem('ecotoken', response.data.token);
        checkSession();
        navigate('/dashboard');
      } else {
        setError('Unerwartete Serverantwort. Bitte versuchen Sie es erneut.');
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 401) {
          setError('Ungültige E-Mail oder Passwort. Bitte überprüfen Sie Ihre Eingaben.');
        } else {
          setError('Serverfehler. Bitte versuchen Sie es später erneut.');
        }
      } else if (err.request) {
        setError('Keine Antwort vom Server. Bitte überprüfen Sie Ihre Internetverbindung.');
      } else {
        setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
      }
      console.error('Loginfehler:', err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-red-50">
      <div className="p-10 bg-white w-96 rounded-lg shadow-md">
        <h2 className="text-center mb-6 text-gray-800 text-2xl">Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-gray-600">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-teal-400 text-white rounded-md hover:bg-purple-300 transition-colors mt-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
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
