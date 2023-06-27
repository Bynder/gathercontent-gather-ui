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

export const DragAndDrop = () => (
  <DndProvider backend={HTML5Backend}>
    {/* @ts-expect-error TS(2322): Type '{ name: any; }' is not assignable to type 'I... Remove this comment to see the full error message */}
    <FolderDndMock name={faker.commerce.productName()} />
    <ItemDndMock>{faker.commerce.productName()}</ItemDndMock>
    <DndDropNotification />
  </DndProvider>
);

DragAndDrop.parameters = {
  controls: { hideNoControlsWarning: true },
};
