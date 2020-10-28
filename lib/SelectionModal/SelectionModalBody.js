import React from 'react';
import { Modal, LoadingOverlay } from 'lib';
import { propTypes, defaultProps } from './common';

function SelectionModalBody({ children, className, isLoading, ...rest }) {
  return (
    <Modal.Body
      className={`overflow-hidden flex p-0 flex-grow ${className}`}
      {...rest}
    >
      {isLoading ? <LoadingOverlay /> : children}
    </Modal.Body>
  );
}

export default SelectionModalBody;

SelectionModalBody.propTypes = propTypes;

SelectionModalBody.defaultProps = defaultProps;
