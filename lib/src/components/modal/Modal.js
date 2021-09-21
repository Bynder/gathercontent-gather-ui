import React from 'react';
import ReactModal from 'react-modal';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooterConfirm } from './ModalFooterConfirm';

export function Modal({
  children,
  show,
  onHide,
  srContentLabel,
  size,
  keyboard,
  className
}) {
  return (
    <ReactModal
      className={`Modal ${size} ${className}`}
      isOpen={show}
      closeTimeoutMS={300}
      onRequestClose={onHide}
      contentLabel={srContentLabel}
      shouldCloseOnEsc={keyboard}
    >
      <div className="react-modal-inner">{children}</div>
    </ReactModal>
  );
}

Modal.Footer = ModalFooter;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.FooterConfirm = ModalFooterConfirm;
