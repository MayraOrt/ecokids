
import React from 'react';
import { Link } from 'react-router-dom'; // Falls du React Router verwendest

function Mathe(){
    return(
        <div className="main-container bg-red-50 flex flex-col items-center min-h-screen">
           <div className="flex items-center justify-center w-full pt-10">
        <h1 className="text-3xl font-bold text-black text-center">
          Mathematik in der Grundschule 
          <br></br>Themenübersicht
        </h1>
      </div> 
        
      <div className="max-w-4xl grid grid-cols-2 gap-10 pt-10">
        
        
      <Link to="/Mathematikerste" className="border-2 border-lime-500 shadow-md rounded-xl p-4 flex flex-col items-center text-stone-800">
      <div className="flex flex-col justify-center items-center h-full w-full">
            <div className="flex gap-5 justify-between items-center w-full font-bold text-2xl text-center">
              <div className="text-center">
                Mathematik <br />
                1.Klasse
              </div>
            <img src="/src/assets/mathe2.png" alt="Hoja" className="w-1/2 h-auto object-cover rounded-lg"/>
          </div>
          <div className="self-start text-sm pt-4">
          Zahlen und Zählen, Addition und Subtraktion,  <br />
          Formen und Geometrie, Maße und Größen, <br />
          Muster und Reihenfolgen, Raumvorstellung
          </div>
          </div>
        </Link>

        <Link to="/Mathematikerste" className="border-2 border-rose-600 shadow-md rounded-xl p-4 flex flex-col items-center text-stone-800">
          <div className="flex gap-5 justify-between w-full font-bold text-2xl text-center">
            <div className="my-auto">
              Mathematik <br />
              2.Klasse
            </div>
            <img src="/src/assets/mathe2.png" alt="Hoja" className="w-1/2 h-auto object-cover rounded-lg"/>
          </div>
          <div className="self-start text-sm pt-4">

          Zahlen und Rechnen, Zahlenräume erweitern <br/>
Geometrie, Maße und Größen, Zeit und Geld , <br/>
Muster und Reihenfolgen, Problemlösungsfähigkeiten 
            
          </div>
        </Link>
           
        <Link to="/Mathedritte" className="border-2 border-blue-400 shadow-md rounded-xl p-4 flex flex-col items-center text-stone-800">
        <div className="flex flex-col justify-between h-full w-full">
            <div className="flex gap-5 justify-between w-full font-bold text-2xl text-center">
              <div className="my-auto">
                Mathematik <br />
                3.Klasse
              </div>
            <img src="/src/assets/mathe2.png" alt="Hoja" className="w-1/2 h-auto object-cover rounded-lg"/>
          </div>
          <div className="self-start text-sm pt-4">
          Multiplikation und Division, Zahlenräume erweitern<br/>
Geometrie, Maße und Größen, Brüche<br/>
Zeit und Geld, Daten und Diagramme


           
          </div>
          </div>
        </Link>
        
        <Link to="/mathevierte" className="border-2 border-yellow-400 shadow-md rounded-xl p-4 flex flex-col items-center text-stone-800">
          <div className="flex gap-5 justify-between w-full font-bold text-2xl text-center">
            <div className="my-auto">
              Mathematik <br />
              4.Klasse
            </div>
            <img src="/src/assets/mathe2.png" alt="Hoja" className="w-1/2 h-auto object-cover rounded-lg"/>
          </div>
          <div className="self-start text-sm pt-4">
           
           Prozentrechnung , Daten und Diagramme <br/>
Geometrie ,Maße und Größen ,Zeit und Geld <br/>
Textaufgaben und Problemlösungsstrategien

          </div>
        </Link>
        </div>
    </div>
    )
}

export default Mathe