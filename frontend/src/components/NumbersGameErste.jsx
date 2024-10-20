import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

// Los números que los niños arrastrarán
const zahlen = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
    { id: 6, value: 6 },
    { id: 7, value: 7 },
    { id: 8, value: 8 },
    { id: 9, value: 9 },
    { id: 10, value: 10 },
  ];
  

  const objekte = [
    { id: 1, anzahl: 3 }, 
    { id: 2, anzahl: 5 }, 
    { id: 3, anzahl: 7 }, 
  ];
  

  const Zahl = ({ value }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: 'zahl',
      item: { value },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));
  
    return (
      <div
        ref={drag}
        className={`w-16 h-16 bg-yellow-400 text-2xl font-bold flex items-center justify-center rounded-full cursor-pointer ${
          isDragging ? 'opacity-50' : 'opacity-100'
        }`}
      >
        {value}
      </div>
    );
  };
  

  const Box = ({ anzahl, ergebnis, onDrop }) => {
    const [{ isOver }, drop] = useDrop(() => ({
      accept: 'zahl',
      drop: (item) => onDrop(item.value),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }));
  
    return (
      <div
        ref={drop}
        className={`w-32 h-32 bg-white border-2 border-dashed flex flex-col items-center justify-center p-4 rounded-md ${
          isOver ? 'bg-green-100' : 'bg-white'
        }`}
      >
        <div className="text-lg font-semibold">Objekte: {anzahl}</div>
        {ergebnis !== null ? (
          <div className="text-2xl font-bold mt-2">
            {ergebnis === anzahl ? 'Richtig!' : 'Falsch!'}
          </div>
        ) : (
          <div className="text-gray-400 mt-2">Ziehe hier</div>
        )}
      </div>
    );
  };
  

  const SpielDerZahlen = () => {
    const [ergebnis, setErgebnis] = useState(Array(objekte.length).fill(null));
  
    const handleDrop = (zahl, index) => {
      const neuesErgebnis = [...ergebnis];
      neuesErgebnis[index] = zahl;
      setErgebnis(neuesErgebnis);
    };
  
    return (
      <div className="grid grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Ziehe die Zahlen:</h2>
          <div className="flex space-x-4">
            {zahlen.map((zahl) => (
              <Zahl key={zahl.id} value={zahl.value} />
            ))}
          </div>
        </div>
  
        <div>
          <h2 className="text-2xl font-bold mb-4">Finde die richtige Zahl:</h2>
          <div className="grid grid-cols-1 gap-6">
            {objekte.map((objekt, index) => (
              <Box
                key={objekt.id}
                anzahl={objekt.anzahl}
                ergebnis={ergebnis[index]}
                onDrop={(zahl) => handleDrop(zahl, index)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

export default SpielDerZahlen;