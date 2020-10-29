import React from 'react';
import { Col } from 'react-bootstrap';

function InventoryContainer({ children }) {
  return (
    <Col md={1} sm={2} className="structure-editor__inventory-container">
      {children}
    </Col>
  );
}

export { InventoryContainer };
