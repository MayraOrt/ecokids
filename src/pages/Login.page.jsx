import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
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

export default LoginPage;
