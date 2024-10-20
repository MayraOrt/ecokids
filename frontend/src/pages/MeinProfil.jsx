import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const MeinProfil = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
    email: '',
    role: '',
    class_level: '', // Klassenstufe
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleUpdate = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      // Send a PUT/POST request to update user profile (adjust the URL as per your API)
      const response = await axios.put('/api/user/update', values); // Assuming a PUT request for updating user info
      console.log('Profile updated:', response.data);

      // Navigate to a different page after successful update, if required
      // navigate('/some-page'); 

    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  // Handle user logout (placeholder function, to be implemented)
  const handleLogout = () => {
    // Implement logout logic here (e.g., clearing auth tokens, etc.)
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="flex justify-center items-center h-[80vh] bg-[#fdf5e6]">
      <div className=" p-8 rounded-lg w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-center mb-6">User Profil</h2>
        <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Vorname */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="first_name">Vorname</label>
            <input
              type="text"
              name="first_name"
              value={values.first_name}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          {/* Nachname */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="last_name">Nachname</label>
            <input
              type="text"
              name="last_name"
              value={values.last_name}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          {/* E-Mail */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">E-Mail</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          {/* Passwort */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">Passwort</label>
            <input
              id="password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <FontAwesomeIcon icon={faLock} className="absolute right-3 top-10 text-gray-500" />
          </div>

          {/* Klassenstufe */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="class_level">Klassenstufe</label>
            <input
              type="text"
              name="class_level"
              value={values.class_level}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          {/* Benutzerrolle */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="role">Benutzerrolle</label>
            <input
              id="role"
              name="role"
              value={values.role}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col col-span-2 mt-6">
            <button
              type="submit"
              className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-200 mb-2"
            >
              Speichern
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-200"
            >
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MeinProfil;
