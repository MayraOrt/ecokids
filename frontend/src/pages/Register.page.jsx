import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const TEACHER_DOMAINS = [
  'schule.de',
  'teacher.de',
  'admin.de'
]

function validateEmailDomain(email, allowedDomains) {
    const escapedDomains = allowedDomains.map(domain => 
        domain.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    );
    
    const pattern = new RegExp(
        `^[a-zA-Z0-9._%+-]+@(${escapedDomains.join('|')})$`,
        'i'
    );
    
    return pattern.test(email);
}

const RegisterPage = () => {
  const navigate = useNavigate();
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [is_teacher, setIsTeacher] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setIsTeacher(validateEmailDomain(email, TEACHER_DOMAINS))
  }, [email])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/register', {
        first_name,
        last_name,
        email,
        password,
        is_teacher
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
    <div className="flex justify-center items-center h-screen bg-red-50">
      <div className="p-8 bg-white w-full max-w-xs rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-semibold mb-4 text-gray-800">Registrierung</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="text-red-500 text-center mb-3">{error}</div>}
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">Vorname</label>
            <input
              type="text"
              id="firstName"
              name="first_name"
              placeholder="Vorname eingeben"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Nachname</label>
            <input
              type="text"
              id="lastName"
              name="last_name"
              placeholder="Nachname eingeben"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-Mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-Mail eingeben"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            { is_teacher && <div className="w-full text-center text-emerald-600"> Ich bin ein Lehrer </div> }
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Passwort</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Passwort eingeben"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-400 text-white py-2 rounded-lg hover:bg-teal-500 transition"
          >
            Registrieren
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
