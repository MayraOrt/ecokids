
import React from 'react';
import { Link } from 'react-router-dom'; // Falls du React Router verwendest

function English(){
    return (
      <div className="main-container bg-red-50 flex flex-col items-center min-h-screen">
        <div className="flex items-center justify-center w-full pt-10">
          <h1 className="text-3xl font-bold text-black text-center">
            Englisch in der Grundschule
            <br></br>Themenübersicht
          </h1>
        </div>

        <div className="max-w-4xl grid grid-cols-2 gap-10 pt-10">
          <Link
            to="/englsicherste"
            className="border-2 border-lime-500 shadow-md rounded-xl p-4 flex flex-col items-center text-stone-800"
          >
            <div className="flex flex-col justify-center items-center h-full w-full">
              <div className="flex gap-5 justify-between items-center w-full font-bold text-2xl text-center">
                <div className="text-center">
                1st Grade
                </div>
                <img
                   src="/src/assets/englisch.jpg"
                  alt="Hoja"
                  className="w-1/2 h-auto object-cover rounded-lg"
                />
              </div>
              <div className="self-start text-sm pt-4">
              Greetings and Farewells, Colors and Shapes <br />
            Everyday Vocabulary, Family members <br />
            Numbers up to 20, Animals
              </div>
            </div>
          </Link>

          <Link
            to="/englischzweite"
            className="border-2 border-rose-600 shadow-md rounded-xl p-4 flex flex-col items-center text-stone-800"
          >
            <div className="flex gap-5 justify-between w-full font-bold text-2xl text-center">
              <div className="my-auto">
              2nd Grade
              </div>
              <img
                  src="/src/assets/englisch.jpg"
                alt="Hoja"
                className="w-1/2 h-auto object-cover rounded-lg"
              />
            </div>
            <div className="self-start text-sm pt-4">
            Forming Simple Sentences, Seasons and Weathe <br></br>
            Food and Drink, Occupations, Asking Simple Questions
            </div>
          </Link>

          <Link
            to="/englischdritte"
            className="border-2 border-blue-400 shadow-md rounded-xl p-4 flex flex-col items-center text-stone-800"
          >
            <div className="flex flex-col justify-between h-full w-full">
              <div className="flex gap-5 justify-between w-full font-bold text-2xl text-center">
                <div className="my-auto">
                3rd Grade
                </div>
                <img
                    src="/src/assets/englisch.jpg"
                  alt="Hoja"
                  className="w-1/2 h-auto object-cover rounded-lg"
                />
              </div>
              <div className="self-start text-sm pt-4">
              Simple Stories and Texts, Hobbies and Leisure Activities <br></br>
              Daily Routines, Body Parts, Simple Descriptions
              <br></br>
              <br></br>
              </div>
            </div>
          </Link>

          <Link
            to="/englsichvierte"
            className="border-2 border-yellow-400 shadow-md rounded-xl p-4 flex flex-col items-center text-stone-800"
          >
            <div className="flex gap-5 justify-between w-full font-bold text-2xl text-center">
              <div className="my-auto">
              4th Grade
              </div>
              <img
                 src="/src/assets/englisch.jpg"
                alt="Hoja"
                className="w-1/2 h-auto object-cover rounded-lg"
              />
            </div>
            <div className="self-start text-sm pt-4">
            Expanded Vocabulary,  Basic Grammar , Shopping and Money <br></br>
            Holidays and Celebrations, Introduction to Simple Texts
            <br></br>
            <br></br>
            </div>
          </Link>
        </div>
      </div>
    );
}

export default English;