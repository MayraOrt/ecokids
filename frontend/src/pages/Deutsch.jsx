
import React from 'react';
import { Link } from 'react-router-dom'; // Falls du React Router verwendest

function Mathe(){
    return(
      <div className="main-container bg-red-50 flex flex-col items-center min-h-screen">
      <div className="flex items-center justify-center w-full pt-10">
        <h1 className="text-3xl font-bold text-black text-center">
          Deutsch in der Grundschule 
          <br></br>Themenübersicht
        </h1>
      </div>
        
      <div className="max-w-4xl grid grid-cols-2 gap-10 pt-10">
        
        
      <Link to="/deutscherste" className="border-2 border-black shadow-md rounded-xl p-4 flex flex-col items-center text-stone-800">
      <div className="flex flex-col justify-center items-center h-full w-full">
            <div className="flex gap-5 justify-between items-center w-full font-bold text-2xl text-center">
              <div className="text-center">
              Deutsch <br />
              1.Klasse
              </div>
            <img src="/src/assets/deutschflagge.png" alt="Hoja" className="w-1/3 h-auto object-cover rounded-lg"/>
          </div>
          <div className="self-start text-sm pt-4">
          Buchstaben, erste Wörter, Schreibschrift, <br />
            Groß- und Kleinschreibung, Leseverstehen, <br />
            Rechtschreibung, Satzbau, Silbentrennung
          </div>
          </div>
        </Link>

        <Link to="/deutschzweite" className="border-2 border-rose-600 shadow-md rounded-xl p-4 flex flex-col items-center text-stone-800">
          <div className="flex gap-5 justify-between w-full font-bold text-2xl text-center">
            <div className="my-auto">
            Deutsch <br />
            2.Klasse
            </div>
            <img src="/src/assets/deutschflagge.png" alt="Hoja" className="w-1/3 h-auto object-cover rounded-lg"/>
          </div>
          <div className="self-start text-sm pt-4">

          Lesefertigkeiten, längere Sätze, Grammatik, <br />
            Rechtschreibung, Aufsätze schreiben, <br />
            Texte verstehen, Wortarten 
            
          </div>
        </Link>
           
        <Link to="/deutschdritte" className="border-2 border-red-600 shadow-md rounded-xl p-4 flex flex-col items-center text-stone-800">
        <div className="flex flex-col justify-between h-full w-full">
            <div className="flex gap-5 justify-between w-full font-bold text-2xl text-center">
              <div className="my-auto">
              Deutsch <br />
              3.Klasse
              </div>
            <img src="/src/assets/deutschflagge.png" alt="Hoja" className="w-1/3 h-auto object-cover rounded-lg"/>
          </div>
          <div className="self-start text-sm pt-4">
          Erzählungen, Gedichte, Aufsätze, <br />
            Diktate, Lesen und Verstehen von Texten, <br />
            Wortschatz erweitern, Sprachspiele


           
          </div>
          </div>
        </Link>
        
        <Link to="/deutschvierte" className="border-2 border-black shadow-md rounded-xl p-4 flex flex-col items-center text-stone-800">
          <div className="flex gap-5 justify-between w-full font-bold text-2xl text-center">
            <div className="my-auto">
            Deutsch <br />
            4.Klasse
            </div>
            <img src="/src/assets/deutschflagge.png" alt="Hoja" className="w-1/3 h-auto object-cover rounded-lg"/>
          </div>
          <div className="self-start text-sm pt-4">
           
          Literatur, Sprachspiele, schwierige Wörter, <br />
            komplexe Texte lesen und verstehen, <br />
            freies Schreiben, Textanalyse

          </div>
        </Link>
        </div>
    </div>
    )
}

export default Mathe