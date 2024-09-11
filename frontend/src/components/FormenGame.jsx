import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

// Datos de las formas geométricas y sus nombres
const formen = [
    { id: 1, name: 'Kreis', image: '/src/assets/kreis.png' },
    { id: 2, name: 'Quadrat', image: '/src/assets/quadrat.png' },
    { id: 3, name: 'Dreieck', image: '/src/assets/dreieck.png' },
    { id: 4, name: 'Rechteck', image: '/src/assets/rechteck.png' },
  ];
  
  // Componente de arrastrar y soltar para los nombres de las formas
  const Name = ({ name }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: 'name',
      item: { name },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));
  
    return (
      <div
        ref={drag}
        className={`w-24 h-12 bg-blue-400 text-xl font-bold flex items-center justify-center rounded cursor-pointer ${
          isDragging ? 'opacity-50' : 'opacity-100'
        }`}
      >
        {name}
      </div>
    );
  };
  
  // Componente para mostrar las formas donde se sueltan los nombres
  const Form = ({ image, name, ergebnis, onDrop }) => {
    const [{ isOver }, drop] = useDrop(() => ({
      accept: 'name',
      drop: (item) => onDrop(item.name),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }));
  
    return (
      <div
        ref={drop}
        className={`w-32 h-32 flex items-center justify-center border-4 border-dashed rounded-md ${
          isOver ? 'bg-yellow-100' : 'bg-none'
        }`}
      >
        <img src={image} alt={name} className="w-full h-full object-contain" />
        {ergebnis !== null && (
          <div className="text-center text-sm mt-2">
            {ergebnis === name ? 'Richtig!' : 'Falsch!'}
          </div>
        )}
      </div>
    );
  };
  
  // Componente principal del juego sin sistema de puntos, con imágenes
  const FormenGame = () => {
    const [ergebnis, setErgebnis] = useState(Array(formen.length).fill(null));
  
    const handleDrop = (name, index) => {
      const neuesErgebnis = [...ergebnis];
      neuesErgebnis[index] = name;
      setErgebnis(neuesErgebnis);
    };
  
    return (
      <div className="grid grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Ziehe die Namen der Formen:</h2>
          <div className="grid grid-cols-2 gap-4">
            {formen.map((form) => (
              <Name key={form.id} name={form.name} />
            ))}
          </div>
        </div>
  
        <div>
          <h2 className="text-2xl font-bold mb-4">Finde die richtige Form:</h2>
          <div className="grid grid-cols-2 gap-6">
            {formen.map((form, index) => (
              <Form
                key={form.id}
                image={form.image}
                name={form.name}
                ergebnis={ergebnis[index]}
                onDrop={(name) => handleDrop(name, index)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default FormenGame;