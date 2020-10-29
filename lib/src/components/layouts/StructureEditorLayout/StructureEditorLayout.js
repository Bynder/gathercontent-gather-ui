import React from 'react';
import { Row } from 'react-bootstrap';
import { InventoryContainer } from './InventoryContainer';
import { FieldsContainer } from './FieldsContainer';

function StructureEditorLayout({ children }) {
  return (
    <div className="structure-editor h-full">
      <Row className="pl-2 h-full">{children}</Row>
    </div>
  );
}

StructureEditorLayout.InventoryContainer = InventoryContainer;
StructureEditorLayout.FieldsContainer = FieldsContainer;

export { StructureEditorLayout };
