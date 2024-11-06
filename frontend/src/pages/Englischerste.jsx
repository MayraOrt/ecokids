import React from 'react';

function FirstGradeEnglishTopics() {
  const topics = [
    { title: "Greetings and Farewells", icon: "👋", description: "Learn how to say hello and goodbye!" },
    { title: "Colors and Shapes", icon: "🌈", description: "Explore different colors and shapes around us!" },
    { title: "Everyday Vocabulary", icon: "📚", description: "Discover words we use every day!" },
    { title: "Family Members", icon: "👨‍👩‍👧", description: "Learn the names of your family members!" },
    { title: "Numbers up to 20", icon: "🔢", description: "Count and learn numbers from 1 to 20!" },
    { title: "Animals", icon: "🐾", description: "Meet different animals and learn their names!" },
  ];

  const handleQuizClick = (topic) => {
    switch (topic) {
      case "Greetings and Farewells":
        alert("Starting quiz on Greetings and Farewells!");
        break;
      case "Colors and Shapes":
        alert("Starting quiz on Colors and Shapes!");
        break;
      case "Everyday Vocabulary":
        alert("Starting quiz on Everyday Vocabulary!");
        break;
      case "Family Members":
        alert("Starting quiz on Family Members!");
        break;
      case "Numbers up to 20":
        alert("Starting quiz on Numbers up to 20!");
        break;
      case "Animals":
        handleAnimalClick();
        break;
      default:
        alert("Unknown topic!");
    }
  };

  const handleAnimalClick = () => {
    // Display a list of common animals or fun facts about animals
    alert("Here are some common animals:\n- Dog\n- Cat\n- Elephant\n- Tiger\n- Lion\n- Giraffe\n- Bear\n\nFun Fact: Did you know that elephants are the largest land animals on Earth?");
  };

  return (
    <div className="self-start text-sm pt-4">
      <h2 className="text-lg font-bold text-center">1st Grade English Topics</h2>
      <p className="text-center mb-4">Let's explore these fun topics!</p>
      <div className="grid grid-cols-2 gap-4">
        {topics.map((topic, index) => (
          <div key={index} className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl">{topic.icon}</div>
            <h3 className="mt-2 text-center font-semibold">{topic.title}</h3>
            <p className="mt-1 text-center text-sm">{topic.description}</p>
            <button 
              onClick={() => handleQuizClick(topic.title)} 
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
            >
              {topic.title === "Animals" ? "Discover Animals!" : "Take a Quiz!"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FirstGradeEnglishTopics;
