import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { faSearch, faPlusSquare, faEllipsis, faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Schülerverwaltung = () => {
  const [user, setUser] = useState([]);
  const [filteredUser, setFilteredUser] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [popupState, setPopupState] = useState({});
  const iconRefs = useRef([]);
  const popupRefs = useRef([]);

  useEffect(() => {
    axios.get("http://localhost:8080/schülerverwaltung")
      .then(response => {
        const { data } = response;
        setUser(data);
        setFilteredUser(data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = user.filter((userData) =>
      (userData.first_name && userData.first_name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (userData.last_name && userData.last_name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setFilteredUser(filtered);
  };

  const handleDeleteUser = async (user_id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/schülerverwaltung/${user_id}`);
      console.log('Benutzer erfolgreich gelöscht:', response.data);
      setUser(prevUser => prevUser.filter(user => user.user_id !== user_id));
      setFilteredUser(prevUser => prevUser.filter(user => user.user_id !== user_id));
    } catch (error) {
      console.error('Fehler beim Löschen des Benutzers:', error);
    }
  };

  const handleOptionClick = (event, index) => {
    const newState = { ...popupState };
    newState[index] = !newState[index];
    setPopupState(newState);
    event.stopPropagation();
  };

  const closePopup = (index) => {
    const newState = { ...popupState };
    newState[index] = false;
    setPopupState(newState);
  };

  return (
    <div className="p-5">
      <Link to="/schülerverwaltung" className="block text-2xl font-semibold mb-5 bg-red-200 p-3 rounded-md text-black">Schülerverwaltung</Link>
      <Link to="" className="block text-xl font-semibold mb-5 cursor-pointer text-black">Klassen</Link>
      <hr className="border-t-2 border-black mb-5" />
      <div className="flex items-center justify-between mb-5">
        <h5 className="text-lg ml-2">Schüler</h5>
        <div className="flex items-center">
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="text"
              placeholder="Personen Suchen"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mr-2 p-2 border rounded"
            />
            <button type="submit" className="border-2 border-red-600 p-1">
              <FontAwesomeIcon icon={faSearch} className="w-4 h-4" />
            </button>
          </form>
         
        </div>
      </div>

      <table className="w-full border-collapse bg-red-200 " >
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Vorname</th>
            <th className="border px-4 py-2">Nachname</th>
            <th className="border px-4 py-2">E-Mail</th>
            
          
            <th className="border px-4 py-2">Klasse</th>
            <th className="border px-4 py-2">Optionen</th>
          </tr>
        </thead>
        <tbody>
          {filteredUser && filteredUser.map((userData, index) => (
            <tr key={userData.user_id}>
              <td className="border px-4 py-2">{userData.user_id}</td>
              <td className="border px-4 py-2">{userData.first_name}</td>
              <td className="border px-4 py-2">{userData.last_name}</td>
              <td className="border px-4 py-2">{userData.email}</td>
             
             
              <td className="border px-4 py-2">{userData.class_level}</td>
              <td className="border px-4 py-2">
                <div className="relative inline-block">
                  <FontAwesomeIcon
                    icon={faEllipsis}
                    className="w-10 h-10 text-red-500 cursor-pointer"
                    onClick={(event) => handleOptionClick(event, index)}
                    ref={(el) => iconRefs.current[index] = el}
                  />
                  {popupState[index] && (
                    <div className="absolute left-0 top-10 w-40 bg-orange-100 text-black rounded shadow-lg z-10">
                      <div className="p-2">
                        <Link to={`/profilsehen/${userData.user_id}`} className="flex items-center text-black mb-2">
                          Profil sehen
                          <FontAwesomeIcon icon={faEye} className="ml-1" />
                        </Link>
                        <p onClick={() => handleDeleteUser(userData.user_id)} className="cursor-pointer flex items-center mb-2">
                          Benutzer entfernen
                          <FontAwesomeIcon icon={faTrashCan} className="ml-1" />
                        </p>
                        <button onClick={() => closePopup(index)} className="bg-red-600 text-white py-1 px-2 rounded">Schließen</button>
                      </div>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schülerverwaltung;
