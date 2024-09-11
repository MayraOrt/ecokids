import React from 'react';
import { Link } from 'react-router-dom';

function Deutsch1() {
  return (
    <div className="main-container bg-yellow-50 flex flex-col items-center min-h-screen p-4">
      <h1 className="text-4xl font-bold text-black mb-6">Deutsch für die 1. Klasse</h1>
      <div className="max-w-3xl grid grid-cols-1 gap-6">
        
        {/* Lernspiel 1 */}
        <Link to="/buchstabenspiel" className="border-2 border-blue-500 shadow-md rounded-xl p-6 flex flex-col items-center text-center text-blue-800 bg-blue-100">
          <h2 className="text-2xl font-semibold mb-2">Buchstaben-Spiel</h2>
          <p className="text-sm mb-4">Lerne die Buchstaben des Alphabets auf spielerische Weise kennen.</p>
          <img src="src/assets/alfabetos-ingleses.png" alt="Buchstaben-Spiel" className="object-cover w-40 h-32 mb-2"/>
        </Link>
        
        {/* Lernspiel 2 */}
        <Link to="/woertermatching" className="border-2 border-green-500 shadow-md rounded-xl p-6 flex flex-col items-center text-center text-green-800 bg-green-100">
          <h2 className="text-2xl font-semibold mb-2">Wörter-Matching</h2>
          <p className="text-sm mb-4">Ordne die Bilder den richtigen Wörtern zu.</p>
          <img src="src/assets/Wötermatching.png" alt="Wörter-Matching" className="object-cover w-33 h-32 mb-2"/>
        </Link>

        <Link
      to="/leseecke"
      className="border-2 border-red-500 shadow-md rounded-xl p-6 flex flex-col items-center text-center text-red-800 bg-red-100 hover:bg-red-200 transition-colors duration-300"
    >
      <h2 className="text-2xl font-semibold mb-2">Leseecke</h2>
      <p className="text-sm mb-4">Lies spannende Geschichten und Gedichte für die erste Klasse.</p>
      <img
        src="src/assets/nino-sentado-suelo-leyendo-libro.png"
        alt="Leseecke"
        className="object-cover w-32 h-33 mb-2"
      />
    </Link>

    
        {/* Arbeitsblätter */}
        <Link to="/arbeitsmaterialien" className="border-2 border-purple-500 shadow-md rounded-xl p-6 flex flex-col items-center text-center text-purple-800 bg-purple-100">
          <h2 className="text-2xl font-semibold mb-2">Arbeitsblätter</h2>
          <p className="text-sm mb-4">Lade dir nützliche Arbeitsblätter für Übungen zu Hause herunter.</p>
          <img src="src/assets/nina-estudiando-escritorio.png" alt="Arbeitsblätter" className="object-cover w-32 h-35 mb-2"/>
        </Link>

      </div>
    </div>
  );
}

export default Deutsch1;
