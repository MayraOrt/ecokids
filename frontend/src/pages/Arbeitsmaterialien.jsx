// Arbeitsmaterialien.js
import React from 'react';
import { FaFileDownload, FaSearch, FaBook } from 'react-icons/fa';

const materialien = [
  
  {
    category: 'Deutsch',
    items: [
      { title: 'Buchstaben lernen', file: '/materials/deutschersteklasse.pdf' },
      // Weitere Materialien
    ],
  },

  {
    category: 'Deutsch',
    items: [
      { title: 'Wörter kennenlernen', file: '/materials/Wörter kennenlernen.pdf' },
      // Weitere Materialien
    ],
  },
  
  // Weitere Kategorien
];

function Arbeitsmaterialien() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMaterialien = materialien.map(category => ({
    ...category,
    items: category.items.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())),
  }));
 
  return (
    <div className="p-6 bg-purple-200 min-h-screen text-black">
      <h1 className="text-4xl font-bold mb-6 text-center">📚 Arbeitsmaterialien für die erste Klasse 📚</h1>

      {/* Suchfeld */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Suche nach Materialien..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-3 border rounded-lg w-full max-w-md"
        />
        <FaSearch className="ml-2 text-gray-600" />
      </div>

      {/* Kategorien */}
      <div className="space-y-6">
        {filteredMaterialien.map((category, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 flex items-center">
              <FaBook className="mr-2" /> {category.category}
            </h2>
            <ul className="space-y-2">
              {category.items.map((item, idx) => (
                <li key={idx} className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
                  <span>{item.title}</span>
                  <a href={item.file} download className="text-blue-500 flex items-center">
                    <FaFileDownload className="mr-1" /> Download
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Arbeitsmaterialien;
