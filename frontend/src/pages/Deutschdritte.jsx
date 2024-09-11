import React, { useState } from 'react';

// Texte und Fragen für das Textverständnis
const stories = [
  {
    text: 'Ein kleiner Vogel lebte in einem großen Wald. Jeden Tag sang er fröhliche Lieder, und alle Tiere hörten ihm gerne zu.',
    questions: [
      {
        question: 'Wo lebte der kleine Vogel?',
        options: ['Im Meer', 'Im Wald', 'In der Stadt'],
        answer: 'Im Wald',
      },
      {
        question: 'Was machte der Vogel jeden Tag?',
        options: ['Er sang Lieder', 'Er baute ein Nest', 'Er flog umher'],
        answer: 'Er sang Lieder',
      },
    ],
  },
  {
    text: 'Lisa ging gerne in die Schule. Sie liebte es, neue Dinge zu lernen und mit ihren Freunden zu spielen.',
    questions: [
      {
        question: 'Was liebte Lisa?',
        options: ['Mit Freunden spielen', 'Zu Hause bleiben', 'In die Schule gehen'],
        answer: 'In die Schule gehen',
      },
      {
        question: 'Was tat Lisa mit ihren Freunden?',
        options: ['Lernen', 'Spielen', 'Singen'],
        answer: 'Spielen',
      },
    ],
  },
];

// Wörter und Definitionen für das Wortschatzspiel
const words = [
  {
    word: 'fröhlich',
    options: ['traurig', 'glücklich', 'müde'],
    answer: 'glücklich',
  },
  {
    word: 'schön',
    options: ['hässlich', 'attraktiv', 'langweilig'],
    answer: 'attraktiv',
  },
];

function Deutschdritte() {
  const [currentStory, setCurrentStory] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const [currentWord, setCurrentWord] = useState(0);
  const [selectedWordAnswer, setSelectedWordAnswer] = useState('');

  // Überprüfung der Antwort im Textverständnis
  function checkAnswer() {
    const question = stories[currentStory].questions[currentQuestion];
    if (selectedAnswer === question.answer) {
      setFeedback('Richtig!');
    } else {
      setFeedback('Falsch. Versuche es noch einmal.');
    }
  }

  // Nächste Frage oder nächste Geschichte
  function nextQuestion() {
    if (currentQuestion < stories[currentStory].questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentStory((currentStory + 1) % stories.length);
      setCurrentQuestion(0);
    }
    setSelectedAnswer('');
    setFeedback('');
  }

  // Überprüfung der Antwort im Wortschatzspiel
  function checkWordAnswer() {
    const word = words[currentWord];
    if (selectedWordAnswer === word.answer) {
      setFeedback('Richtig!');
    } else {
      setFeedback('Falsch. Versuche es noch einmal.');
    }
  }

  // Nächstes Wort im Wortschatzspiel
  function nextWord() {
    setCurrentWord((currentWord + 1) % words.length);
    setSelectedWordAnswer('');
    setFeedback('');
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Deutsch für die 3. Klasse</h1>
      
      {/* Textverständnis */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Textverständnis</h2>
        <p className="mb-4">{stories[currentStory].text}</p>
        <p className="mb-2 font-semibold">{stories[currentStory].questions[currentQuestion].question}</p>
        <div className="flex flex-col space-y-2">
          {stories[currentStory].questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedAnswer(option)}
              className={`py-2 px-4 rounded-lg border 
                ${selectedAnswer === option ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}
                hover:bg-blue-400 transition duration-200`}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={checkAnswer}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
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
        {feedback && <p className="mt-4 font-semibold">{feedback}</p>}
      </div>

      {/* Wortschatzspiel */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Wortschatzspiel</h2>
        <p className="mb-2 font-semibold">Was bedeutet das Wort: <span className="text-blue-500">{words[currentWord].word}</span>?</p>
        <div className="flex flex-col space-y-2">
          {words[currentWord].options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedWordAnswer(option)}
              className={`py-2 px-4 rounded-lg border 
                ${selectedWordAnswer === option ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700'}
                hover:bg-green-400 transition duration-200`}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={checkWordAnswer}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
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
        {feedback && <p className="mt-4 font-semibold">{feedback}</p>}
      </div>
    </div>
  );
}

export default Deutschdritte;
