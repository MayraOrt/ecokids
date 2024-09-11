import React, { useState } from 'react';


const buchstaben = [
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

function BuchstabenSpiel() {
  const [selectedLetter, setSelectedLetter] = useState('');
  const [correctCount, setCorrectCount] = useState(0);

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  const handleCheckAnswer = (word) => {
    if (selectedLetter === word.charAt(0)) {
      setCorrectCount(correctCount + 1);
      alert('Richtig!');
    } else {
      alert('Falsch, versuche es noch einmal!');
    }
    setSelectedLetter('');
  };

  return (
    <div className="p-4 bg-white">
      <h1 className="text-3xl font-bold mb-4">Buchstaben-Spiel</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Wähle einen Buchstaben:</h2>
        <div className="flex gap-4 mt-2">
          {buchstaben.map(({ letter }) => (
            <button
              key={letter}
              onClick={() => handleLetterClick(letter)}
              className="p-2 bg-blue-500 text-white rounded"
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
      {selectedLetter && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Finde das passende Bild:</h2>
          <div className="grid grid-cols-3 gap-4">
            {buchstaben.map(({ letter, imageUrl, word }) => (
              <div key={letter} className="text-center">
                <img
                  src={imageUrl}
                  alt={word}
                  className="object-cover w-22 h-28 mx-auto mb-2 cursor-pointer"
                  onClick={() => handleCheckAnswer(word)}
                />
                <p>{word}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mt-6">
        <p className="text-xl font-semibold">Punkte: {correctCount}</p>
      </div>
    </div>
  );
}

export default BuchstabenSpiel;
