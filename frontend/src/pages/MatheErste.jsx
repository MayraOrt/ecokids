import React, { useState } from 'react';
import SpielDerZahlen from '../components/NumbersGameErste';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function MatheErste() {
  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center">
      <DndProvider backend={HTML5Backend}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Kenne die Zahlen</h1>
          <p className="text-xl mb-4">Ziehe die richtige Zahl über die Menge der Objekte.</p>
          <SpielDerZahlen />
        </div>
      </DndProvider>
    </div>
  );
}

export default MatheErste;