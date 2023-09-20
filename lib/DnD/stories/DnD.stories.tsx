import React from "react";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'fake... Remove this comment to see the full error message
import faker from "faker";
import HTML5Backend from "react-dnd-html5-backend-cjs";
import { DndDropNotification } from "./DndDropNotification";
import { ItemDndMock } from "./ItemDndMock";
import { DndProvider } from "../DndProvider";
import { FolderDndMock } from "./FolderDndMock";

export default {
  title: "Legacy/Drag And Drop",
};

export function DragAndDrop() {
  return (
    <DndProvider backend={HTML5Backend}>
      <FolderDndMock name={faker.commerce.productName()} />
      <ItemDndMock>{faker.commerce.productName()}</ItemDndMock>
      <DndDropNotification />
    </DndProvider>
  );
}

DragAndDrop.parameters = {
  controls: { hideNoControlsWarning: true },
};
