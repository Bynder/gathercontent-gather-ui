import React from 'react';
import { Modal } from 'lib';
import { propTypes, defaultProps } from './common';
import SelectionModalBody from './SelectionModalBody';
import SelectionModalColumn from './SelectionModalColumn';
import SelectionModalColumnHeader from './SelectionModalColumnHeader';
import SelectionModalCategory from './SelectionModalCategory';

function SelectionModal({ children, className, ...rest }) {
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

export default SelectionModal;
