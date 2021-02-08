import React from 'react';
import ReactModal from 'react-modal';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooterConfirm } from './ModalFooterConfirm';

function Modal({ children, show, onHide, srContentLabel, size, keyboard }) {
  return (
    <ReactModal
      className={`Modal ${size}`}
      isOpen={show}
      closeTimeoutMS={300}
      onRequestClose={onHide}
      contentLabel={srContentLabel}
      shouldCloseOnEsc={keyboard}
    >
      <div className="modal-inner">{children}</div>
    </ReactModal>
  );
}

Modal.Footer = ModalFooter;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.FooterConfirm = ModalFooterConfirm;

export { Modal };
