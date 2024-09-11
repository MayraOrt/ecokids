import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import FormenGame from '../components/FormenGame';

function Mathezweite() {
    return (
      <div className="bg-purple-100 min-h-screen flex flex-col items-center justify-center">
        <DndProvider backend={HTML5Backend}>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8">Formen-Detektiv</h1>
            <p className="text-xl mb-4">
              Ziehe die richtigen Namen zu den passenden Formen!
            </p>
            <FormenGame/>
          </div>
        </DndProvider>
      </div>
    );
  }
  
  export default Mathezweite;