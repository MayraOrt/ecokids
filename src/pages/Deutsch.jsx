import React from 'react';
import { Link } from 'react-router-dom'; // Falls du React Router verwendest


function Deutsch() {
  return (
    <div className="main-container bg-red-50 flex flex-col items-center min-h-screen">
      <div className="flex items-center justify-center w-full pt-10">
        <h1 className="text-3xl font-bold text-black text-center">
          Deutsch in der Grundschule 
          <br></br>Themenübersicht
        </h1>
      </div>

      <div className="max-w-4xl grid grid-cols-2 gap-10 pt-10">
        {/* Container 1 */}
        <Link to="/deutscherste" className="border-2 border-black shadow-md rounded-xl p-4 flex flex-col items-center text-stone-800">
          <div className="flex gap-5 justify-between w-full font-bold text-2xl text-center">
            <div className="my-auto">
              Deutsch <br />
              1.Klasse
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2"
              className="object-contain shrink-0 max-w-full aspect-[1.48] w-[148px]"
              alt="Beispielbild"
            />
          </div>
          <div className="self-start text-sm pt-4">
            Buchstaben, erste Wörter, Schreibschrift, <br />
            Groß- und Kleinschreibung, Leseverstehen, <br />
            Rechtschreibung, Satzbau, Silbentrennung
          </div>
        </Link>
        {/* Container 2 */}
        <div className="border-2 border-red-600 shadow-md rounded-xl p-4 flex flex-col items-center text-stone-800">
          <div className="flex gap-5 justify-between w-full font-bold text-2xl text-center">
            <div className="my-auto">
              Deutsch <br />
              2.Klasse
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2"
              className="object-contain shrink-0 max-w-full aspect-[1.48] w-[148px]"
              alt="Beispielbild"
            />
          </div>
          <div className="self-start text-sm pt-4">
            Lesefertigkeiten, längere Sätze, Grammatik, <br />
            Rechtschreibung, Aufsätze schreiben, <br />
            Texte verstehen, Wortarten
          </div>
        </div>

        {/* Container 3 */}
        <div className="border-2 border-red-600 shadow-md rounded-xl p-4 flex flex-col items-center text-stone-800">
          <div className="flex gap-5 justify-between w-full font-bold text-2xl text-center">
            <div className="my-auto">
              Deutsch <br />
              3.Klasse
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2"
              className="object-contain shrink-0 max-w-full aspect-[1.48] w-[148px]"
              alt="Beispielbild"
            />
          </div>
          <div className="self-start text-sm pt-4">
            Erzählungen, Gedichte, Aufsätze, <br />
            Diktate, Lesen und Verstehen von Texten, <br />
            Wortschatz erweitern, Sprachspiele
          </div>
        </div>

        {/* Container 4 */}
        <div className="border-2 border-black shadow-md rounded-xl p-4 flex flex-col items-center text-stone-800">
          <div className="flex gap-5 justify-between w-full font-bold text-2xl text-center">
            <div className="my-auto">
              Deutsch <br />
              4.Klasse
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c730c8fe6ee180de5ae117e55da179a75fd86d2af5a98f53a9ea2585af7e8a01?placeholderIfAbsent=true&apiKey=6e5b978c12414454851ab41f0b4d0cb2"
              className="object-contain shrink-0 max-w-full aspect-[1.48] w-[148px]"
              alt="Beispielbild"
            />
          </div>
          <div className="self-start text-sm pt-4">
            Literatur, Sprachspiele, schwierige Wörter, <br />
            komplexe Texte lesen und verstehen, <br />
            freies Schreiben, Textanalyse
          </div>
        </div>

      </div>
    </div>
  );
}

export default Deutsch;
