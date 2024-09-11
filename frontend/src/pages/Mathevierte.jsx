import React, { useState } from 'react';

function App() {
  const [answers, setAnswers] = useState({
    percent1: '',
    data1: '',
    geom1: '',
    measure1: '',
    time1: '',
    money1: '',
    text1: '',
  });

  const [results, setResults] = useState({});

  const correctAnswers = {
    percent1: 50,   // 50% von 100
    data1: 4,      // Die häufigste Zahl in einem gegebenen Datensatz (z.B. 4)
    geom1: 16,     // Umfang eines Quadrats mit Seite 4 cm
    measure1: 500, // 0.5 Liter = 500 Milliliter
    time1: 90,     // 1,5 Stunden in Minuten
    money1: 3.75,  // 2 Euro 25 Cent + 1 Euro 50 Cent
    text1: 15,     // Ein Produkt kostet 25 Euro und es gibt einen Rabatt von 10 Euro
  };

  const checkAnswers = () => {
    const newResults = {};
    Object.keys(correctAnswers).forEach((key) => {
      newResults[key] = parseFloat(answers[key], 10) === correctAnswers[key];
    });
    setResults(newResults);
  };

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  const resetTasks = () => {
    setAnswers({
      percent1: '',
      data1: '',
      geom1: '',
      measure1: '',
      time1: '',
      money1: '',
      text1: '',
    });
    setResults({});
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-3xl relative">
        {/* Dekorative Elemente */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-teal-200 rounded-full opacity-50 -translate-x-1/2 transform"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-300 rounded-full opacity-40 -translate-y-1/2 transform"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-300 rounded-full opacity-30"></div>

        {/* Überschrift */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 relative z-10">
          🧠 Mathe - 4. Klasse 🚀
        </h1>

        {/* Aufgaben */}
        <section className="space-y-8">
          {/* Prozentrechnung */}
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Prozentrechnung</h2>
            <p className="text-gray-600 mb-4">
              Was sind 50% von 100?
            </p>
            <input
              type="text"
              name="percent1"
              value={answers.percent1}
              onChange={handleChange}
              className={`border border-gray-300 rounded-lg px-4 py-2 w-full ${results.percent1 === false ? 'border-red-500' : ''}`}
            />
            {results.percent1 === false && <span className="text-red-500 mt-2 block">Falsch!</span>}
          </div>

          {/* Daten und Diagramme */}
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. Daten und Diagramme</h2>
            <p className="text-gray-600 mb-4">
              In einem Datensatz kommt die Zahl 4 am häufigsten vor. Wie nennt man diese Zahl?
            </p>
            <input
              type="text"
              name="data1"
              value={answers.data1}
              onChange={handleChange}
              className={`border border-gray-300 rounded-lg px-4 py-2 w-full ${results.data1 === false ? 'border-red-500' : ''}`}
            />
            {results.data1 === false && <span className="text-red-500 mt-2 block">Falsch!</span>}
          </div>

          {/* Geometrie */}
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Geometrie</h2>
            <p className="text-gray-600 mb-4">
              Der Umfang eines Quadrats mit einer Seite von 4 cm beträgt wie viel?
            </p>
            <input
              type="text"
              name="geom1"
              value={answers.geom1}
              onChange={handleChange}
              className={`border border-gray-300 rounded-lg px-4 py-2 w-full ${results.geom1 === false ? 'border-red-500' : ''}`}
            />
            {results.geom1 === false && <span className="text-red-500 mt-2 block">Falsch!</span>}
          </div>

          {/* Maße und Größen */}
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Maße und Größen</h2>
            <p className="text-gray-600 mb-4">
              Wie viele Milliliter sind 0,5 Liter?
            </p>
            <input
              type="text"
              name="measure1"
              value={answers.measure1}
              onChange={handleChange}
              className={`border border-gray-300 rounded-lg px-4 py-2 w-full ${results.measure1 === false ? 'border-red-500' : ''}`}
            />
            {results.measure1 === false && <span className="text-red-500 mt-2 block">Falsch!</span>}
          </div>

          {/* Zeit */}
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. Zeit</h2>
            <p className="text-gray-600 mb-4">
              Wie viele Minuten sind 1,5 Stunden?
            </p>
            <input
              type="text"
              name="time1"
              value={answers.time1}
              onChange={handleChange}
              className={`border border-gray-300 rounded-lg px-4 py-2 w-full ${results.time1 === false ? 'border-red-500' : ''}`}
            />
            {results.time1 === false && <span className="text-red-500 mt-2 block">Falsch!</span>}
          </div>

          {/* Geld */}
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">6. Geld</h2>
            <p className="text-gray-600 mb-4">
              Was kostet ein Produkt, wenn der Preis 2 Euro 25 Cent beträgt und 1 Euro 50 Cent hinzugefügt werden?
            </p>
            <input
              type="text"
              name="money1"
              value={answers.money1}
              onChange={handleChange}
              className={`border border-gray-300 rounded-lg px-4 py-2 w-full ${results.money1 === false ? 'border-red-500' : ''}`}
            />
            {results.money1 === false && <span className="text-red-500 mt-2 block">Falsch!</span>}
          </div>

          {/* Textaufgaben */}
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">7. Textaufgaben</h2>
            <p className="text-gray-600 mb-4">
              Ein Produkt kostet 25 Euro. Wenn es einen Rabatt von 10 Euro gibt, wie viel kostet es dann?
            </p>
            <input
              type="text"
              name="text1"
              value={answers.text1}
              onChange={handleChange}
              className={`border border-gray-300 rounded-lg px-4 py-2 w-full ${results.text1 === false ? 'border-red-500' : ''}`}
            />
            {results.text1 === false && <span className="text-red-500 mt-2 block">Falsch!</span>}
          </div>
        </section>

        {/* Buttons */}
        <div className="flex justify-between space-x-4 mt-8 relative z-10">
          <button
            onClick={checkAnswers}
            className="bg-teal-500 text-white font-bold px-6 py-2 rounded-lg hover:bg-teal-600 transition"
          >
            Antworten überprüfen
          </button>

          <button
            onClick={resetTasks}
            className="bg-orange-500 text-white font-bold px-6 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Neue Aufgaben
          </button>
        </div>

        {/* Ergebnis-Anzeige */}
        {Object.keys(results).length > 0 && (
          <div className="mt-8 relative z-10">
            <h3 className="text-lg font-semibold text-gray-700">Ergebnisse:</h3>
            <ul className="list-disc pl-6 text-gray-600">
              {Object.entries(results).map(([key, isCorrect]) => (
                <li key={key} className={isCorrect ? 'text-green-500' : 'text-red-500'}>
                  {key}: {isCorrect ? 'Richtig!' : 'Falsch!'}
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
