import { useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";

function DashboardPage() {
  const {session} = useContext(SessionContext); 

  if(!session.isTeacher && !session.userClass) {
    return <div className="h-96 w-full bg-red-100 p-32 text-center text-2xl">
      Sie sind noch keiner Klasse zugeteilt. <br/> Sprechen Sie mit Ihrem Lehrer, <br/> um die Aktivitäten und Übungen zu sehen.
      </div>
  }

  return (
    <div
      className="main-container bg-contain bg-center flex flex-col items-center min-h-screen mx-auto px-10"
      style={{ backgroundImage: "url(/src/assets/fondo.jpg)" }}
    >
      <h1 className="text-4xl font-bold text-red-500 w-full text-center pt-16">
        Lasst uns lernen!
      </h1>
      <div className="max-w-10xl flex flex-row gap-8 pt-10">
        <a href="/Nachhaltigkeit">
          <div className="min-h-80 border-4 border-lime-500 bg-[#F3F2F0] shadow-md rounded-xl p-8 w-80 flex justify-between items-center">
            <div className="text-center mb-4 flex flex-col gap-8 justify-between items-center">
              <p className="font-sans text-2xl font-bold">
                Was bedeutet Nachhaltigkeit?
              </p>
              <img
                src="/src/assets/hoja.png"
                alt="Hoja"
                className="w-1/2 h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </a>
        <a href="/deutsch">
          <div className="min-h-80 border-4 border-rose-600 bg-[#F3F2F0] shadow-md rounded-xl p-8 w-80 flex justify-between items-center">
            <div className="text-center mb-4 flex flex-col gap-8 justify-between items-center">
              <p className="font-sans text-2xl font-bold">
                Deutsch <br /> Freu(n)de
              </p>
              <img
                src="/src/assets/bandera.png"
                alt="Flagge"
                className="w-1/2 h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </a>
        <a href="/Mathe">
          <div className="min-h-80 border-4 border-blue-400 bg-[#F3F2F0] shadow-md rounded-xl p-8 w-80 flex justify-between items-center">
            <div className="text-center mb-4 flex flex-col gap-8 justify-between items-center">
              <p className="font-sans text-2xl font-bold">
                Auf ein Mathe-Abenteuer!
              </p>
              <img
                src="/src/assets/math.png"
                alt="Math"
                className="w-1/2 h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </a>
        <a href="/englisch">
          <div className="min-h-80 border-4 border-yellow-500 bg-[#F3F2F0] shadow-md rounded-xl p-8 w-80 flex justify-between items-center">
            <div className="text-center mb-4 flex flex-col gap-8 justify-between items-center">
              <p className="font-sans text-2xl font-bold">
                Learn <br></br>Englisch!
              </p>
              <img
                 src="/src/assets/englisch.jpg"
                alt="Math"
                className="w-1/2 h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default DashboardPage;
