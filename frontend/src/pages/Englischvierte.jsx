import React, { useState } from 'react';

const topics = [
  { 
    title: "Expanded Vocabulary", 
    prompt: "Today I saw a ___ in the park.",
    wordBank: ["cat", "elephant", "rainbow", "car", "tree", "dog"] 
  },
  { 
    title: "Basic Grammar", 
    prompt: "I ___ to the store yesterday.",
    wordBank: ["go", "went", "going", "will go"] 
  },
  { 
    title: "Shopping and Money", 
    prompt: "I bought a ___ for my birthday.",
    wordBank: ["toy", "cake", "book", "balloon"] 
  },
  { 
    title: "Holidays and Celebrations", 
    prompt: "On my birthday, I want to ___ with my friends.",
    wordBank: ["play", "dance", "sing", "cook"] 
  },
  { 
    title: "Introduction to Simple Texts", 
    prompt: "A good book is about ___ and ___ characters.",
    wordBank: ["funny", "sad", "brave", "magical"] 
  },
];

function FourthGradeStoryBuilder() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [story, setStory] = useState("");
  const [wordBank, setWordBank] = useState([]);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setStory("");
    setWordBank(topic.wordBank);
  };

  const handleWordClick = (word) => {
    setStory(prev => prev + " " + word);
    setWordBank(prev => prev.filter(w => w !== word));
  };

  const handleSubmit = () => {
    alert("Your story: " + story);
    setStory("");
    setSelectedTopic(null);
    setWordBank([]);
  };

  return (
    <div className="self-start text-sm pt-4">
      <h2 className="text-lg font-bold text-center">4th Grade English Story Builder</h2>
      <p className="text-center mb-4">Select a topic to create your story!</p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {topics.map((topic) => (
          <div 
            key={topic.title} 
            className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:bg-gray-100 cursor-pointer" 
            onClick={() => handleTopicClick(topic)}
          >
            <h3 className="text-2xl">{topic.title}</h3>
          </div>
        ))}
      </div>

      {selectedTopic && (
        <div className="mt-4 p-4 border rounded-lg shadow-md bg-gray-100">
          <h3 className="text-lg font-bold">{selectedTopic.title}</h3>
          <p>{selectedTopic.prompt}</p>
          <div className="flex flex-col mt-2">
            <h4 className="text-md font-semibold">Word Bank:</h4>
            <div className="flex flex-wrap">
              {wordBank.map((word) => (
                <button
                  key={word}
                  className="border p-2 m-1 rounded-lg hover:bg-blue-200"
                  onClick={() => handleWordClick(word)}
                >
                  {word}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h4 className="text-md font-semibold">Your Story:</h4>
            <p>{story || "Build your story here..."}</p>
          </div>
          {story && (
            <button
              className="mt-4 p-2 bg-blue-500 text-white rounded-lg"
              onClick={handleSubmit}
            >
              Finalize My Story
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default FourthGradeStoryBuilder;
