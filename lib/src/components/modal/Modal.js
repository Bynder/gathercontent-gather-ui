import React from 'react';
import ReactModal from 'react-modal';
import cx from 'classnames';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';

function Modal({ children, className, show }) {
  const classNames = cx(className);

  return (
    <ReactModal className={classNames} isOpen={show} closeTimeoutMS={1000}>
      <div className="modal-inner">{children}</div>
    </ReactModal>
  );
}

Modal.Footer = ModalFooter;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;

export { Modal };
