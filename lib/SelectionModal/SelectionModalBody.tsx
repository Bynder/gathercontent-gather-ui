import React from "react";
import { Modal, LoadingOverlay } from "lib";
import { defaultProps } from "./common";

function SelectionModalBody({ children, className, isLoading, ...rest }: any) {
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

SelectionModalBody.defaultProps = defaultProps;
