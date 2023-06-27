import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { Modal, LoadingOverlay } from 'lib';
import { propTypes, defaultProps } from './common';

function SelectionModalBody({
  children,
  className,
  isLoading,
  ...rest
}: any) {
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
