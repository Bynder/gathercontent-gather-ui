import React from 'react';
import faker from 'faker';
import HTML5Backend from 'react-dnd-html5-backend-cjs';
import { DndDropNotification } from './DndDropNotification';
import { ItemDndMock } from './ItemDndMock';
import { DndProvider } from '../DndProvider';
import { FolderDndMock } from './FolderDndMock';

const stories = storiesOf('Components', module);

export const DragAndDrop = () => (
  <DndProvider backend={HTML5Backend}>
    <FolderDndMock name={faker.commerce.productName()} />
    <ItemDndMock>{faker.commerce.productName()}</ItemDndMock>
    <DndDropNotification />
  </DndProvider>
);

DragAndDrop.story = {
  name: 'Drag and Drop',
};
