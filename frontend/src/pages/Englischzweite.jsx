import React, { useState } from 'react';

const topics = [
  { title: "Simple Sentences", icon: "✍️", prompt: "Make a sentence about your favorite food!" },
  { title: "Seasons and Weather", icon: "☀️", prompt: "What is your favorite season?" },
  { title: "Food and Drink", icon: "🍕", prompt: "What do you like to eat?" },
  { title: "Occupations", icon: "👩‍🏫", prompt: "What do you want to be when you grow up?" },
  { title: "Asking Questions", icon: "❓", prompt: "Ask a question about animals!" },
  { title: "Sustainability", icon: "🌍", prompt: "Name one thing you can recycle." },
];

function SecondGradeActivity() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [funFact, setFunFact] = useState("");

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setUserAnswer("");
    setFunFact("");
  };

  const handleAnswerSubmit = () => {
    if (selectedTopic.title === "Sustainability") {
      setFunFact("Did you know? Recycling helps save trees and reduces waste!");
    } else {
      setFunFact("Great job! Keep practicing your sentences!");
    }
  };

  return (
    <div className="self-start text-sm pt-4">
      <h2 className="text-lg font-bold text-center">2nd Grade English Activity</h2>
      <p className="text-center mb-4">Click on a topic to learn!</p>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {topics.map((topic) => (
          <div 
            key={topic.title} 
            className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:bg-gray-100 cursor-pointer" 
            onClick={() => handleTopicClick(topic)}
          >
            <div className="text-4xl">{topic.icon}</div>
            <h3 className="mt-2 text-center font-semibold">{topic.title}</h3>
          </div>
        ))}
      </div>

      {selectedTopic && (
        <div className="mt-4 p-4 border rounded-lg shadow-md bg-gray-100">
          <h3 className="text-lg font-bold">{selectedTopic.title}</h3>
          <p>{selectedTopic.prompt}</p>
          <input
            type="text"
            className="mt-2 p-2 border rounded w-full"
            placeholder="Type your answer here..."
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
          />
          <button
            className="mt-2 p-2 bg-blue-500 text-white rounded-lg"
            onClick={handleAnswerSubmit}
          >
            Submit Answer
          </button>
          {funFact && (
            <p className="mt-2 text-green-500">
              {funFact}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default SecondGradeActivity;
