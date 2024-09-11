import React, { useState } from 'react';

function App() {
  // Verwende useState, um die Eingabewerte zu speichern
  const [answers, setAnswers] = useState({
    mul1: '',
    mul2: '',
    mul3: '',
    mul4: '',
    div1: '',
    div2: '',
    div3: '',
    geom1: '',
    time1: '',
    money1: '',
  });

  const [results, setResults] = useState({});

  // Die korrekten Antworten für die Aufgaben
  const correctAnswers = {
    mul1: 30,  // 5 × 6
    mul2: 56,  // 8 × 7
    mul3: 36,  // 9 × 4
    mul4: 27,  // 3 × 9
    div1: 8,   // 56 ÷ 7
    div2: 8,   // 72 ÷ 9
    div3: 9,   // 45 ÷ 5
    geom1: 12, // Umfang eines Rechtecks: Länge = 3, Breite = 3
    time1: 120, // 2 Stunden in Minuten
    money1: 1.5, // 1 Euro 50 Cent
  };

  // Funktion zum Überprüfen der Antworten
  const checkAnswers = () => {
    const newResults = {};
    Object.keys(correctAnswers).forEach((key) => {
      newResults[key] = parseFloat(answers[key], 10) === correctAnswers[key];
    });
    setResults(newResults);
  };

  // Funktion zum Aktualisieren der Eingabewerte
  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  // Funktion zum Zurücksetzen der Aufgaben
  const resetTasks = () => {
    setAnswers({
      mul1: '',
      mul2: '',
      mul3: '',
      mul4: '',
      div1: '',
      div2: '',
      div3: '',
      geom1: '',
      time1: '',
      money1: '',
    });
    setResults({});
  };

  
  return (
    
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex items-center justify-center">
    <div className="bg-white shadow-xl rounded-3xl p-10 max-w-xl w-full relative overflow-hidden">
      {/* Gelber Kreis hinter der Überschrift */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400 rounded-full opacity-20 z-0"></div>
   
        
      <div className="absolute top-0 right-0 w-40 h-40 transform -translate-x-1/2 -translate-y-1/2  bg-yellow-400 rounded-full opacity-30 z-0"></div>
      
      {/* Überschrift */}
      <h1 className="relative z-10 text-3xl font-extrabold text-center text-gray-800 mb-8">
        📚 Mathe - 3. Klasse 
      </h1>

        {/* Multiplikation */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Multiplikation</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li>
              5 × 6 ={' '}
              <input
                type="text"
                name="mul1"
                value={answers.mul1}
                onChange={handleChange}
                className={`border rounded-lg px-3 py-2 ${results.mul1 === false ? 'border-red-500' : ''}`}
              />
              {results.mul1 === false && <span className="text-red-500 ml-2">Falsch!</span>}
            </li>
            <li>
              8 × 7 ={' '}
              <input
                type="text"
                name="mul2"
                value={answers.mul2}
                onChange={handleChange}
                className={`border rounded-lg px-3 py-2 ${results.mul2 === false ? 'border-red-500' : ''}`}
              />
              {results.mul2 === false && <span className="text-red-500 ml-2">Falsch!</span>}
            </li>
            <li>
              9 × 4 ={' '}
              <input
                type="text"
                name="mul3"
                value={answers.mul3}
                onChange={handleChange}
                className={`border rounded-lg px-3 py-2 ${results.mul3 === false ? 'border-red-500' : ''}`}
              />
              {results.mul3 === false && <span className="text-red-500 ml-2">Falsch!</span>}
            </li>
            <li>
              3 × 9 ={' '}
              <input
                type="text"
                name="mul4"
                value={answers.mul4}
                onChange={handleChange}
                className={`border rounded-lg px-3 py-2 ${results.mul4 === false ? 'border-red-500' : ''}`}
              />
              {results.mul4 === false && <span className="text-red-500 ml-2">Falsch!</span>}
            </li>
          </ul>
        </section>

        {/* Division */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. Division</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li>
              56 ÷ 7 ={' '}
              <input
                type="text"
                name="div1"
                value={answers.div1}
                onChange={handleChange}
                className={`border rounded-lg px-3 py-2 ${results.div1 === false ? 'border-red-500' : ''}`}
              />
              {results.div1 === false && <span className="text-red-500 ml-2">Falsch!</span>}
            </li>
            <li>
              72 ÷ 9 ={' '}
              <input
                type="text"
                name="div2"
                value={answers.div2}
                onChange={handleChange}
                className={`border rounded-lg px-3 py-2 ${results.div2 === false ? 'border-red-500' : ''}`}
              />
              {results.div2 === false && <span className="text-red-500 ml-2">Falsch!</span>}
            </li>
            <li>
              45 ÷ 5 ={' '}
              <input
                type="text"
                name="div3"
                value={answers.div3}
                onChange={handleChange}
                className={`border rounded-lg px-3 py-2 ${results.div3 === false ? 'border-red-500' : ''}`}
              />
              {results.div3 === false && <span className="text-red-500 ml-2">Falsch!</span>}
            </li>
          </ul>
        </section>

        {/* Geometrie */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Geometrie</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li>
              Ein Rechteck hat die Länge 3 cm und die Breite 3 cm. Wie groß ist der Umfang?{' '}
              <input
                type="text"
                name="geom1"
                value={answers.geom1}
                onChange={handleChange}
                className={`border rounded-lg px-3 py-2 ${results.geom1 === false ? 'border-red-500' : ''}`}
              />
              {results.geom1 === false && <span className="text-red-500 ml-2">Falsch!</span>}
            </li>
          </ul>
        </section>

        {/* Zeit */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Zeit</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li>
              Wie viele Minuten sind 2 Stunden?{' '}
              <input
                type="text"
                name="time1"
                value={answers.time1}
                onChange={handleChange}
                className={`border rounded-lg px-3 py-2 ${results.time1 === false ? 'border-red-500' : ''}`}
              />
              {results.time1 === false && <span className="text-red-500 ml-2">Falsch!</span>}
            </li>
          </ul>
        </section>

        {/* Geld */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. Geld</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li>
              Wie viel ist 1 Euro und 50 Cent in Dezimalform?{' '}
              <input
                type="text"
                name="money1"
                value={answers.money1}
                onChange={handleChange}
                className={`border rounded-lg px-3 py-2 ${results.money1 === false ? 'border-red-500' : ''}`}
              />
              {results.money1 === false && <span className="text-red-500 ml-2">Falsch!</span>}
            </li>
          </ul>
        </section>

        {/* Buttons */}
        <div className="flex justify-between space-x-4">
          <button
            onClick={checkAnswers}
            className="bg-rose-500 text-white font-bold px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Antworten überprüfen
          </button>

          <button
            onClick={resetTasks}
            className="bg-blue-500 text-white font-bold px-6 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Neue Aufgaben
          </button>
        </div>

        {/* Ergebnis-Anzeige */}
        {Object.keys(results).length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-700">Ergebnisse:</h3>
            <ul className="list-disc pl-6 text-gray-600">
              {Object.entries(results).map(([key, isCorrect]) => (
                <li key={key} className={isCorrect ? 'text-green-500' : 'text-red-500'}>
                  {isCorrect ? `${key}: Richtig!` : `${key}: Falsch!`}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
