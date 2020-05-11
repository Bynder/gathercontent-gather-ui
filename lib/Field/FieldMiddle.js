import React from 'react';
import { node, string } from 'prop-types';
import Col from 'react-bootstrap/lib/Col';

export const FieldMiddle = ({ children, className }) => (
  <Col xs={12} sm={8} className={`field__content--wrapper ${className}`}>
    <div className="field__content border border-solid border-neutral-90">
      <div className="field__child">{children}</div>
    </div>
  </Col>
);

FieldMiddle.propTypes = {
  children: node.isRequired,
  className: string
};

FieldMiddle.defaultProps = {
  className: ''
};
