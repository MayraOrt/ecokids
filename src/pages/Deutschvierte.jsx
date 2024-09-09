import React, { useState } from 'react';

const texts = [
  {
    title: 'Der Fuchs und die Trauben',
    text: 'Ein Fuchs versuchte vergeblich, Trauben von einer hohen Rebe zu erreichen. Nachdem er es mehrfach versucht hatte, gab er auf und sagte, die Trauben seien wahrscheinlich sauer.',
    questions: [
      {
        question: 'Warum gab der Fuchs auf?',
        options: ['Weil er müde war', 'Weil die Trauben zu hoch hingen', 'Weil er die Trauben nicht mochte'],
        correct: 'Weil die Trauben zu hoch hingen',
      },
    ],
  },
  // Weitere Texte können hier hinzugefügt werden
];

const hardWords = [
  {
    word: 'melancholisch',
    options: ['traurig', 'glücklich', 'wütend','sauer' , 'schön', 'faul'],
    correct: 'traurig',
  },
  // Weitere schwierige Wörter können hier hinzugefügt werden
];

const creativePrompts = [
  'Schreibe eine Geschichte über ein verlorenes Abenteuer.',
  'Beschreibe einen Tag im Leben eines Superhelden.',
  // Weitere kreative Schreibaufforderungen können hier hinzugefügt werden
];

const App = () => {
  const [currentSection, setCurrentSection] = useState('textAnalysis'); // Neue State für den aktuellen Abschnitt
  const [currentText, setCurrentText] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [currentWord, setCurrentWord] = useState(0);
  const [selectedWordAnswer, setSelectedWordAnswer] = useState('');
  const [userStory, setUserStory] = useState('');
  const [currentPrompt, setCurrentPrompt] = useState(0);

  const checkAnswer = () => {
    const correctAnswer = texts[currentText].questions[currentQuestion].correct;
    if (selectedAnswer === correctAnswer) {
      alert('Richtig!');
    } else {
      alert('Leider falsch.');
    }
  };

  const nextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % texts[currentText].questions.length);
    setSelectedAnswer('');
  };

  const checkWordAnswer = () => {
    const correctWordAnswer = hardWords[currentWord].correct;
    if (selectedWordAnswer === correctWordAnswer) {
      alert('Richtig!');
    } else {
      alert('Leider falsch.');
    }
  };

  const nextWord = () => {
    setCurrentWord((prev) => (prev + 1) % hardWords.length);
    setSelectedWordAnswer('');
  };

  const nextPrompt = () => {
    setCurrentPrompt((prev) => (prev + 1) % creativePrompts.length);
    setUserStory(''); // Leere das Textfeld für eine neue Geschichte
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">Deutsch für die 4. Klasse</h1>

      {/* Navigations-Buttons */}
      <div className="mb-6">
  <button
    onClick={() => setCurrentSection('textAnalysis')}
    className={`py-2 px-4 rounded-lg ${currentSection === 'textAnalysis' ? 'bg-purple-500 text-white' : 'bg-gray-300 text-gray-800'} mr-4`}
  >
    Textanalyse
  </button>
  <button
    onClick={() => setCurrentSection('wordGame')}
    className={`py-2 px-4 rounded-lg ${currentSection === 'wordGame' ? 'bg-purple-500 text-white' : 'bg-gray-300 text-gray-800'} mr-4`}
  >
    Wortspiel
  </button>
  <button
    onClick={() => setCurrentSection('creativeWriting')}
    className={`py-2 px-4 rounded-lg ${currentSection === 'creativeWriting' ? 'bg-purple-500 text-white' : 'bg-gray-300 text-gray-800'}`}
  >
    Kreatives Schreiben
  </button>
</div>


      {/* Horizontaler Container für alle Abschnitte */}
      <div className="flex flex-row space-x-8 items-start w-full justify-center">

        {/* Textanalyse */}
        {currentSection === 'textAnalysis' && (
          <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xs h-[500px] flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-4">Textanalyse</h2>
              <h3 className="text-lg font-bold mb-2">{texts[currentText].title}</h3>
              <p className="mb-4">{texts[currentText].text}</p>
              <p className="mb-2 font-semibold">{texts[currentText].questions[currentQuestion].question}</p>
              <div className="flex flex-col space-y-2">
                {texts[currentText].questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedAnswer(option)}
                    className={`py-2 px-4 rounded-lg border 
                      ${selectedAnswer === option ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-700'}
                      hover:bg-purple-400 transition duration-200`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={checkAnswer}
                className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg"
              >
                Überprüfen
              </button>
              <button
                onClick={nextQuestion}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg"
              >
                Nächste Frage
              </button>
            </div>
          </div>
        )}

        {/* Wortspiel */}
        {currentSection === 'wordGame' && (
          <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xs h-[500px] flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-4">Wortspiel: Schwierige Wörter</h2>
              <p className="mb-2 font-semibold">Was bedeutet das Wort: <span className="text-purple-500">{hardWords[currentWord].word}</span>?</p>
              <div className="flex flex-col space-y-2">
                {hardWords[currentWord].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedWordAnswer(option)}
                    className={`py-2 px-4 rounded-lg border 
                      ${selectedWordAnswer === option ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-700'}
                      hover:bg-purple-400 transition duration-200`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={checkWordAnswer}
                className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg"
              >
                Überprüfen
              </button>
              <button
                onClick={nextWord}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg"
              >
                Nächstes Wort
              </button>
            </div>
          </div>
        )}

        {/* Kreatives Schreiben */}
        {currentSection === 'creativeWriting' && (
          <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xs h-[500px] flex flex-col">
            <div className="flex flex-col flex-grow">
              <h2 className="text-xl font-semibold mb-4">Kreatives Schreiben</h2>
              <p className="mb-4">{creativePrompts[currentPrompt]}</p>
              <textarea
                value={userStory}
                onChange={(e) => setUserStory(e.target.value)}
                className="w-full h-full max-h-[280px] p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 overflow-auto"
                placeholder="Schreibe hier deine Geschichte..."
              />
            </div>
            <div className="flex justify-end mt-6">
              <button
                onClick={nextPrompt}
                className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg"
              >
                Nächstes Schreibspiel
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default App;
