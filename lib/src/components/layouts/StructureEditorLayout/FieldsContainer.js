import React from 'react';
import { Col } from 'react-bootstrap';

function FieldsContainer({ children }) {
  return (
    <Col md={9} xs={12} className="structure-editor__fields-container h-full">
      {children}
    </Col>
  );
}

export { FieldsContainer };
