import React from 'react';
import { Modal } from 'lib';
import { propTypes, defaultProps } from './common';

function SelectionModalBody({ children, className, ...rest }) {
  return (
    <Modal.Body className={`overflow-hidden flex p-0 ${className}`} {...rest}>
      {children}
    </Modal.Body>
  );
}

export default SelectionModalBody;

SelectionModalBody.propTypes = propTypes;

SelectionModalBody.defaultProps = defaultProps;
