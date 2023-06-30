import React from "react";
import { Modal } from "lib";
import { propTypes, defaultProps } from "./common";
import SelectionModalBody from "./SelectionModalBody";
import SelectionModalColumn from "./SelectionModalColumn";
import SelectionModalColumnHeader from "./SelectionModalColumnHeader";
import SelectionModalCategory from "./SelectionModalCategory";
import SelectionModalColumnLoader from "./SelectionModalColumnLoader";

export function SelectionModal({ children, className, ...rest }: any) {
  return (
    <Modal.Container className={`selection-modal ${className}`} {...rest}>
      {children}
    </Modal.Container>
  );
}

SelectionModal.propTypes = propTypes;

SelectionModal.defaultProps = defaultProps;

SelectionModal.Body = SelectionModalBody;
SelectionModal.Column = SelectionModalColumn;
SelectionModal.ColumnHeader = SelectionModalColumnHeader;
SelectionModal.Category = SelectionModalCategory;
SelectionModal.ColumnLoader = SelectionModalColumnLoader;

export default SelectionModal;
