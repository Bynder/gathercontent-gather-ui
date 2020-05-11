import React, { useContext } from 'react';
import Col from 'react-bootstrap/lib/Col';
import { node, string } from 'prop-types';
import { FieldInStructureEditModeContext } from './FieldInStructureEditModeProvider';

export const FieldLeft = ({ children, className }) => {
  const { inStructureEditMode } = useContext(FieldInStructureEditModeContext);

  return (
    <Col
      xs={12}
      sm={inStructureEditMode ? 3 : 4}
      className={`field__data ${className}`}
    >
      {children}
    </Col>
  );
};

FieldLeft.propTypes = {
  children: node.isRequired,
  className: string
};

FieldLeft.defaultProps = {
  className: ''
};
