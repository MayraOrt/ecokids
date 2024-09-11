import React, { useState } from 'react';

// Beispielhafte Daten: Wörter und Bilder
const woerter = [
  { letter: 'A', imageUrl: 'src/assets/Apfel.png', word: 'Apfel' }, // Bild aus public-Ordner
  { letter: 'B', imageUrl: 'src/assets/banane.png', word: 'Banane' },
  { letter: 'C', imageUrl: 'src/assets/coumputer.png', word: 'Computer' },
  { letter: 'D', imageUrl: 'src/assets/Delfin.png', word: 'Delfin' },
  { letter: 'E', imageUrl: 'src/assets/elefant.png', word: 'Elefant' },
  { letter: 'F', imageUrl: 'src/assets/forsch.png', word: 'Frosch' },
  { letter: 'G', imageUrl: 'src/assets/giraffe.png', word: 'Giraffe' },
  { letter: 'H', imageUrl: 'src/assets/haus.png', word: 'Haus' },
  { letter: 'I', imageUrl: 'src/assets/igel.png', word: 'Igel' },
  { letter: 'J', imageUrl: 'src/assets/Jaguar.png', word: 'Jaguar' },
  { letter: 'K', imageUrl: 'src/assets/katze2.png', word: 'Katze' },
  { letter: 'L', imageUrl: 'src/assets/löwe.png', word: 'Löwe' },
  { letter: 'M', imageUrl: 'src/assets/maulwurf.png', word: 'Maulwurf' },
  { letter: 'N', imageUrl: 'src/assets/Nashorn.png', word: 'Nashorn' },
  { letter: 'O', imageUrl: 'src/assets/forsch.png', word: 'Oberst' },
  { letter: 'P', imageUrl: 'src/assets/Papagei.png', word: 'Papagei' },
  { letter: 'Q', imageUrl: 'src/assets/Qualle.png', word: 'Qualle' },
  { letter: 'R', imageUrl: 'src/assets/radiugummie.png', word: 'Radiergummi' },
  { letter: 'S', imageUrl: 'src/assets/sonne.png', word: 'Sonne' },
  { letter: 'T', imageUrl: 'src/assets/Tiger.png', word: 'Tiger' },
  { letter: 'U', imageUrl: 'src/assets/uhu.png', word: 'Uhu' },
  { letter: 'V', imageUrl: 'src/assets/vogel.png', word: 'Vogel' },
  { letter: 'W', imageUrl: 'src/assets/Wal.png', word: 'Wal' },
  { letter: 'X', imageUrl: 'src/assets/Xylophon.png', word: 'Xylophon' },
  { letter: 'Y', imageUrl: 'src/assets/yacht.png', word: 'Yacht' },
  { letter: 'Z', imageUrl: 'src/assets/zebra.png', word: 'Zebra' },
];

function WoerterMatching() {
  const [selectedWord, setSelectedWord] = useState('');
  const [matches, setMatches] = useState([]);

  const handleWordClick = (word) => {
    setSelectedWord(word);
  };

  const handleImageClick = (imageWord) => {
    if (selectedWord) {
      setMatches([...matches, { word: selectedWord, image: imageWord }]);
      setSelectedWord('');
    }
  };

  return (
    <div className="p-4 bg-white">
      <h1 className="text-3xl font-bold mb-4">Wörter-Matching-Spiel</h1>
      
      {/* Auswahl von Wörtern */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Wähle ein Wort:</h2>
        <div className="flex gap-4 mt-2">
          {woerter.map(({ word }) => (
            <button
              key={word}
              onClick={() => handleWordClick(word)}
              className={`p-2 ${selectedWord === word ? 'bg-green-500' : 'bg-blue-500'} text-white rounded`}
            >
              {word}
            </button>
          ))}
        </div>
      </div>

      {/* Bilder zum Matching */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Ordne das Wort dem Bild zu:</h2>
        <div className="grid grid-cols-3 gap-4 mt-2">
          {woerter.map(({ word, imageUrl }) => (
            <div key={word} className="text-center">
              <img
                src={imageUrl}
                alt={word}
               className="object-cover w-22 h-28 mx-auto mb-2 cursor-pointer"
                onClick={() => handleImageClick(word)}
              />
              <p>{word}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Übereinstimmungen anzeigen */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Deine Übereinstimmungen:</h2>
        <ul>
          {matches.map(({ word, image }, index) => (
            <li key={index} className="mb-2">
              Wort: {word} - Bild: {image}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WoerterMatching;
