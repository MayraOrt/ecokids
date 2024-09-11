import React, { useState } from 'react';

// Wörterbuch mit Beispielen für verschiedene Wortarten
const words = [
  { word: 'laufen', type: 'Verb', options: ['Nomen', 'Verb', 'Adjektiv'] },
  { word: 'Haus', type: 'Nomen', options: ['Nomen', 'Verb', 'Adjektiv'] },
  { word: 'schön', type: 'Adjektiv', options: ['Nomen', 'Verb', 'Adjektiv'] },
  { word: 'spielen', type: 'Verb', options: ['Nomen', 'Verb', 'Adjektiv'] }
];

function Deutschzweite() {
  const [currentWord, setCurrentWord] = useState(getRandomWord());
  const [selectedType, setSelectedType] = useState('');
  const [feedback, setFeedback] = useState('');

  // Funktion zum Zufallsgenerieren eines Worts
  function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  // Funktion zum Überprüfen der Antwort
  function checkAnswer() {
    if (selectedType === currentWord.type) {
      setFeedback('Richtig! Gute Wahl.');
    } else {
      setFeedback('Leider falsch. Versuche es noch einmal.');
    }
  }

  // Funktion zum Weiteren Wort
  function nextWord() {
    setCurrentWord(getRandomWord());
    setSelectedType('');
    setFeedback('');
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Wortarten-Quiz</h1>
      <div className="bg-white shadow-md rounded-lg p-8 w-96">
        <p className="text-lg mb-4">
          <strong>Welcher Typ ist das Wort:</strong>{' '}
          <span className="text-green-500 font-bold">{currentWord.word}</span>?
        </p>
        <div className="flex flex-col space-y-3 mb-6">
          {currentWord.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedType(option)}
              className={`py-2 px-4 rounded-lg border 
                ${selectedType === option ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700'}
                hover:bg-green-400 transition duration-200 ease-in-out`}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="flex justify-between">
          <button
            onClick={checkAnswer}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition duration-200 ease-in-out"
          >
            Überprüfen
          </button>
          <button
            onClick={nextWord}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg transition duration-200 ease-in-out"
          >
            Nächstes Wort
          </button>
        </div>
        {feedback && (
          <p className={`mt-4 text-lg font-semibold ${feedback.includes('Richtig') ? 'text-green-500' : 'text-red-500'}`}>
            {feedback}
          </p>
        )}
      </div>
    </div>
  );
}

export default Deutschzweite;
