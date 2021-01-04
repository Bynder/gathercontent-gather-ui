import React, { createContext, useState } from 'react';
import { DndProvider as DragAndDropProvider } from 'react-dnd-cjs';
import { func, node } from 'prop-types';
import { DragPreview } from './DragPreview';

export const DndContext = createContext({});

function DndProvider({ children, backend }) {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState(null);
  const [failurePreview, setFailurePreview] = useState(null);

  const sharedState = {
    isDragging,
    setIsDragging,
    preview,
    setPreview,
    setFailurePreview,
    failurePreview
  };

  return (
    <DragAndDropProvider backend={backend}>
      <DndContext.Provider value={sharedState}>
        {isDragging && (preview || failurePreview) && (
          <DragPreview>{failurePreview || preview}</DragPreview>
        )}

        {children}
      </DndContext.Provider>
    </DragAndDropProvider>
  );
}

DndProvider.propTypes = {
  children: node.isRequired,
  backend: func.isRequired
};

export { DndProvider };
