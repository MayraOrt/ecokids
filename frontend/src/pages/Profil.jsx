import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faQuestion, faUserGear, faListCheck } from '@fortawesome/free-solid-svg-icons';
import MeinProfil from './MeinProfil';
import Schülerverwaltung from './Schülerverwaltung';
import Help from './Help';
import { SessionContext } from '../contexts/SessionContext';

const Profil = () => {
  const {session} = useContext(SessionContext); 
  const [activeView, setActiveView] = useState('profile'); // Verwende einen String, um die aktive Ansicht zu steuern

  const handleProfileClick = () => {
    setActiveView('profile'); // Wechselt zur Profilansicht
  };

  const handleSchülerverwaltung = () => {
    setActiveView('schülerverwaltung'); // Wechselt zur Schülerverwaltungsansicht
  };

  const handleHelp = () => {
    setActiveView('help'); // Wechselt zur Hilfeansicht
  };

  return (
    <div className="flex flex-row h-[100vh] bg-[#fdf5e6]">
      {/* Sidebar */}
      <div className="w-[250px] h-full p-4 shadow-md flex flex-col justify-center items-center bg-[#fcedd1]">
        {/* Button Container */}
        <button
          onClick={handleProfileClick}
          className="flex flex-row items-center text-base h-[61px] w-[260px] mb-2 px-4 text-inherit bg-transparent border-none cursor-pointer justify-start hover:bg-[#fdf5e6] hover:text-[#c75959] transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faUser} className="w-[30px] h-[30px]" />
          <span className="ml-4 text-[18px] leading-[30px]">Profil</span>
        </button>

        <button
          onClick={() => setActiveView('verlauf')}
          className="flex flex-row items-center text-base h-[61px] w-[260px] mb-2 px-4 text-inherit bg-transparent border-none cursor-pointer justify-start hover:bg-[#fdf5e6] hover:text-[#c75959] transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faListCheck} className="w-[30px] h-[30px]" />
          <span className="ml-4 text-[18px] leading-[30px]">Verlauf</span>
        </button>

        {
          session.isTeacher && 
            <button
              onClick={handleSchülerverwaltung}
              className="flex flex-row items-center text-base h-[61px] w-[260px] mb-2 px-4 text-inherit bg-transparent border-none cursor-pointer justify-start hover:bg-[#fdf5e6] hover:text-[#c75959] transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faUserGear} className="w-[30px] h-[30px]" />
              <span className="ml-4 text-[18px] leading-[30px]">Schülerverwaltung</span>
            </button>
        }

        <button
          onClick={handleHelp}
          className="flex flex-row items-center text-base h-[61px] w-[260px] mb-2 px-4 text-inherit bg-transparent border-none cursor-pointer justify-start hover:bg-[#fdf5e6] hover:text-[#c75959] transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faQuestion} className="w-[30px] h-[30px]" />
          <span className="ml-4 text-[18px] leading-[30px]">Help</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Content area - bedingtes Rendern basierend auf der aktiven Ansicht */}
        {activeView === 'profile' && <MeinProfil />}
        {activeView === 'schülerverwaltung' && <Schülerverwaltung />}
        {activeView === 'help' && <Help />}
        {/* Du kannst weitere Ansichten hinzufügen, z.B. Verlauf */}
        {activeView === 'verlauf' && <div>Hier wird der Verlauf angezeigt.</div>}
      </div>
    </div>
  );
};

export default Profil;
