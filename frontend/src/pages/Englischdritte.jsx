import React, { useState } from 'react';

function ThirdGradeEnglishAdventure() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const activities = {
    "Simple Stories and Texts": {
      question: "What animal is the main character in our story?",
      options: ["Cat", "Dog", "Elephant"],
      answer: "Cat",
    },
    "Hobbies and Leisure Activities": {
      question: "What do you like to do on weekends?",
      options: ["Play soccer", "Do homework", "Sleep all day"],
      answer: "Play soccer",
    },
    "Daily Routines": {
      question: "What do you do after waking up?",
      options: ["Brush your teeth", "Play games", "Watch TV"],
      answer: "Brush your teeth",
    },
    "Body Parts": {
      question: "Which part of your body do you use to see?",
      options: ["Eyes", "Hands", "Feet"],
      answer: "Eyes",
    },
    "Simple Descriptions": {
      question: "How would you describe a happy person?",
      options: ["Smiling", "Frowning", "Sleeping"],
      answer: "Smiling",
    },
  };

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setUserAnswer("");
    setIsCorrect(null);
  };

  const handleSubmit = () => {
    const correctAnswer = activities[selectedTopic].answer;
    setIsCorrect(userAnswer === correctAnswer);
  };

  return (
    <div className="self-start text-sm pt-4">
      <h2 className="text-lg font-bold text-center">3rd Grade English Adventure</h2>
      <p className="text-center mb-4">Choose a topic to start your adventure!</p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {Object.keys(activities).map((topic) => (
          <div 
            key={topic} 
            className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:bg-gray-100 cursor-pointer" 
            onClick={() => handleTopicClick(topic)}
          >
            <h3 className="text-2xl">{topic}</h3>
          </div>
        ))}
      </div>

      {selectedTopic && (
        <div className="mt-4 p-4 border rounded-lg shadow-md bg-gray-100">
          <h3 className="text-lg font-bold">{selectedTopic}</h3>
          <p>{activities[selectedTopic].question}</p>
          <div className="flex flex-col mt-2">
            {activities[selectedTopic].options.map((option) => (
              <button
                key={option}
                className="border p-2 m-1 rounded-lg hover:bg-blue-200"
                onClick={() => setUserAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className="mt-4 p-2 bg-blue-500 text-white rounded-lg"
            onClick={handleSubmit}
          >
            Submit Answer
          </button>
          {isCorrect !== null && (
            <p className={`mt-2 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
              {isCorrect ? 'Great Job!' : 'Oops! Try Again!'}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default ThirdGradeEnglishAdventure;
