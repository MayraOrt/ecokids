import React, { useState } from 'react';
import { FaBookOpen, FaStar, FaVolumeUp } from 'react-icons/fa';




const geschichten = [
  {
    title: 'Die abenteuerliche Reise der kleinen Raupe',
    content: `Es war einmal eine kleine Raupe, die immer neue Abenteuer erleben wollte...`,
    imageUrl: 'src/assets/Apfel.png',
  },
  {
    title: 'Der mutige Frosch und sein großer Sprung',
    content: `Ein mutiger kleiner Frosch beschloss eines Tages, den größten Sprung seines Lebens zu wagen...`,
    image: '/images/frosch.png',
  },
  {
    title: 'Der Zauberer und der verlorene Stern',
    content: `Ein alter Zauberer suchte nach einem Stern, der vom Himmel gefallen war...`,
    image: '/images/zauberer.png',
  },
];

function Leseecke() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [isReading, setIsReading] = useState(false);

  const handleStoryClick = (story) => {
    setSelectedStory(story);
    setIsReading(false);
  };

  const startReading = () => {
    if (!isReading && selectedStory) {
      // Text-to-Speech starten
      const utterance = new SpeechSynthesisUtterance(selectedStory.content);
      utterance.lang = 'de-DE'; // Sprache auf Deutsch einstellen

      // Anpassungen für kindgerechten Sound
      utterance.pitch = 1.8; // Höhere Tonhöhe, klingt fröhlicher
      utterance.rate = 1.2;  // Schnellere Sprechgeschwindigkeit

      // Eine kindgerechte Stimme auswählen (sofern verfügbar)
      const voices = speechSynthesis.getVoices();
      const childVoice = voices.find(voice => voice.name.includes("Google UK English Female")); // Beispiel für eine höhere Stimme
      if (childVoice) {
        utterance.voice = childVoice;
      }

      speechSynthesis.speak(utterance);
    } else {
      // Text-to-Speech stoppen
      speechSynthesis.cancel();
    }
    setIsReading(!isReading);
  };

  return (
    <div className="p-6 bg-red-200 transition-colors duration-300 min-h-screen text-black">
      <h1 className="text-4xl font-bold mb-6 text-center">📚 Willkommen in der Leseecke! 📚</h1>
      
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Geschichtenliste */}
        <div className="md:w-1/3 mb-6">
          <h2 className="text-3xl font-semibold mb-4">Geschichten</h2>
          <ul className="space-y-4">
            {geschichten.map((story, index) => (
              <li
                key={index}
                className="bg-white text-black p-4 rounded-lg shadow-lg cursor-pointer hover:bg-blue-500 transform hover:scale-105 transition-transform duration-300"
                onClick={() => handleStoryClick(story)}
              >
                <FaBookOpen className="inline-block mr-2" /> {story.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Geschichtenanzeige */}
        {selectedStory && (
          <div className="md:w-2/3 md:pl-6">
            <h2 className="text-3xl font-bold mb-4">{selectedStory.title}</h2>
            <div className="flex items-center mb-4">
              <img src={selectedStory.image} alt={selectedStory.title} className="w-32 h-32 mr-4 rounded-lg shadow-lg"/>
              <p className="text-lg">{selectedStory.content}</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <button 
                onClick={startReading} 
                className="bg-blue-500 p-3 rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300 flex items-center">
                <FaVolumeUp className="mr-2" /> {isReading ? "Stoppen" : "Vorlesen"}
              </button>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Leseecke;
