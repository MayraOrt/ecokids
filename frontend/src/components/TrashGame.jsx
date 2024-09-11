import React from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ItemTypes = {
  TRASH: "trash",
};

const TrashItem = ({ id, type, image }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TRASH,
    item: { id, type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={drag}
      src={image}
      alt={`Trash ${id}`}
      className={`w-20 h-20 object-contain cursor-pointer ${isDragging ? "opacity-50" : "opacity-100"}`}      
    />
  );
};

const TrashBin = ({ accept, onDrop, image }) => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ItemTypes.TRASH,
    drop: (item) => onDrop(item),
    canDrop: (item) => item.type === accept,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`w-52 h-24 m-4 flex justify-center items-center border-2 ${
        canDrop ? "border-none" : "border-none"
      } ${isOver ? "bg-green-100" : "bg-none"}`}
    >
      <img src={image} alt={`Bin for ${accept}`} className="w-full h-56 object-contain" /> 
    </div>
  );
};

const TrashGame = () => {
  const handleDrop = (item) => {
    alert(`Richtig! Du hast deinen Müll in der richtigen Tonne entsorgt.`);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className="game-container bg-cover bg-center flex flex-col items-center justify-end"
        style={{ backgroundImage: "url('/src/assets/paisaje.png')" }}
      >
        <h1 className="text-3xl font-bold text-slate-600 p-6">Müll recyceln!</h1>
        
        <div className="trash-container relative w-full h-48 flex mt-4 items-start justify-evenly">
          <TrashItem id={1} type="plastic" image="/src/assets/flasche2.png" />
          <TrashItem id={2} type="organic" image="/src/assets/manzana.png" />
          <TrashItem id={3} type="glass" image="/src/assets/glass.png" />
          <TrashItem id={4} type="paper" image="/src/assets/karton.png" />
        </div>

        <div className="bins-container flex justify-around w-full p-14">
          <TrashBin accept="plastic" image="/src/assets/bote_amarillo.png" onDrop={handleDrop} />
          <TrashBin accept="paper" image="/src/assets/bote_azul.png" onDrop={handleDrop} />
          <TrashBin accept="glass" image="/src/assets/bote_verde.png" onDrop={handleDrop} />
          <TrashBin accept="organic" image="/src/assets/bote_rojo.png" onDrop={handleDrop} />
        </div>

      </div>
    </DndProvider>
  );
};

export default TrashGame;