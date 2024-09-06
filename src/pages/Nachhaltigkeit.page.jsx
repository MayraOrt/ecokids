import TrashGame from "../components/TrashGame";  // Asegúrate de que la ruta es correcta
import { useState } from "react";

function NachhaltigkeitPage() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [isGameOpen, setIsGameOpen] = useState(false);

    return (
        <div className="main-container bg-contain bg-cover flex flex-col items-center min-h-screen" style={{ backgroundImage: 'url(/src/assets/fondo.jpg)' }}>
            <h1 className="text-4xl font-bold text-red-500 w-full text-center pt-16">
                Was ist Nachhaltigkeit?
            </h1>

            <div className="flex justify-center space-x-10 pt-14">
               
        <div
          className="card bg-cover bg-center w-96 h-72 rounded-lg shadow-lg cursor-pointer relative"
          style={{ backgroundImage: "url('/assets/Video_Screenshot.jpg')" }} // Cambia esta ruta a la imagen de tu video
          onClick={() => setIsVideoOpen(true)}
        >
          <div className="absolute inset-0 border-4 border-lime-500 bg-[#F3F2F0] bg-opacity-30 rounded-lg"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-700">
            <h2 className="text-2xl font-bold">Video ansehen</h2>
            <p className="text-lg">Was ist Nachhaltigkeit?</p>
          </div>
        </div>

        
        <div
          className="card bg-cover bg-center w-96 h-72 rounded-lg shadow-lg cursor-pointer relative"
          style={{ backgroundImage: "url('/assets/game-card-bg.jpg')" }} // Cambia esta ruta a la imagen del juego
          onClick={() => setIsGameOpen(true)}
        >
          <div className="absolute inset-0 border-4 border-[#FF6A4C] bg-[#F3F2F0] bg-opacity-30 rounded-lg"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-700">
            <h2 className="text-2xl font-bold">Spiel spielen</h2>
            <p className="text-lg">Recycling Abenteuer</p>
          </div>
        </div>
      </div>

            {isVideoOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-5 rounded-lg shadow-lg max-w-4xl">
                        <div className="flex justify-end">
                            <button
                                className="text-red-500 font-bold text-xl"
                                onClick={() => setIsVideoOpen(false)}
                            >
                                X
                            </button>
                        </div>
                        <div className="video-container">
                            <iframe
                                width="800"
                                height="450"
                                src="https://www.youtube.com/embed/KHRKpftiKpE?si=vjjOIGbL8rUZ4uPR"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}

            {isGameOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-2 rounded-lg shadow-lg max-w-4xl">
                        <div className="flex justify-end">
                            <button
                                className="text-red-500 font-bold text-xl"
                                onClick={() => setIsGameOpen(false)}
                            >
                                X
                            </button>
                        </div>
                        <div className="game-container">
                            <TrashGame />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NachhaltigkeitPage;