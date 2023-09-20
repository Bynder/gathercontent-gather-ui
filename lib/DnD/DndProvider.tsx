import React, { createContext, useState } from "react";
import { DndProvider as DragAndDropProvider } from "react-dnd-cjs";
import { DragPreview } from "./DragPreview";

export const DndContext = createContext({});

function DndProvider({ children, backend }: any) {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState(null);
  const [failurePreview, setFailurePreview] = useState(null);

  const sharedState = {
    isDragging,
    setIsDragging,
    preview,
    setPreview,
    setFailurePreview,
    failurePreview,
  };

  return (
    // @ts-expect-error Type '{ children: Element; backend: any; }' is not assignable to type 'IntrinsicAttributes & DndProviderProps<any, any>'.
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

export { DndProvider };
