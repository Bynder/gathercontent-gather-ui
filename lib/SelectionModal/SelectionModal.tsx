import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { Modal } from 'lib';
import { propTypes, defaultProps } from './common';
import SelectionModalBody from './SelectionModalBody';
import SelectionModalColumn from './SelectionModalColumn';
import SelectionModalColumnHeader from './SelectionModalColumnHeader';
import SelectionModalCategory from './SelectionModalCategory';
import SelectionModalColumnLoader from './SelectionModalColumnLoader';

function SelectionModal({
  children,
  className,
  ...rest
}: any) {
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
