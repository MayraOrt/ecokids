import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Help = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [faqData] = useState([
    { question: 'Wie kann ich mein Passwort zurücksetzen?', answer: 'Gehe auf die Profil und klicke auf "Passwort ändern".' },
   
    { question: 'Wie kann ich meinen Fortschritt einsehen?', answer: 'Klicke auf den Verlauf im Profil, um deinen Lernfortschritt zu sehen.' },
    { question: 'Wie kann ich mich abmelden?', answer: 'Klicke im Profilbereich auf "Logout", um dich abzumelden.' },
  ]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredFaqs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="help-page bg-[#fdf5e6] p-8">
      <h2 className="text-3xl font-semibold mb-6 text-center">Wie können wir dir helfen?</h2>

      {/* Search Bar */}
      <div className="search-bar mb-6 flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Suche nach einem Thema..."
          className="p-3 w-1/2 border border-gray-300 rounded-md"
        />
        <FontAwesomeIcon icon={faSearch} className="ml-2 mt-3 text-gray-500" />
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h3 className="text-2xl font-semibold mb-4">Häufig gestellte Fragen</h3>
        {filteredFaqs.length > 0 ? (
          <ul className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <li key={index} className="p-4 border border-gray-200 rounded-md bg-white">
                <h4 className="text-xl font-medium">{faq.question}</h4>
                <p className="text-gray-700 mt-2">{faq.answer}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Keine Ergebnisse gefunden. Versuche einen anderen Suchbegriff.</p>
        )}
      </div>

      {/* Instruction Videos Section */}
     
     

      {/* Contact Section */}
      <div className="contact-section mt-10">
        <h3 className="text-2xl font-semibold mb-4">Kontakt für weitere Unterstützung</h3>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="contact-item flex items-center mb-4 md:mb-0">
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-gray-500 mr-3" />
            <a href="mailto:support@elearning.com" className="text-lg font-medium text-gray-700">support@elearning.com</a>
          </div>
          <div className="contact-item flex items-center">
            <FontAwesomeIcon icon={faPhone} className="text-2xl text-gray-500 mr-3" />
            <span className="text-lg font-medium text-gray-700">+49 123 456 789</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
