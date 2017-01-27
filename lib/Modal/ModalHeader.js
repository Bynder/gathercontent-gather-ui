import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalHeader = (props) => {
  return (
    <Modal.Header>
      <Modal.Title>{props.children}</Modal.Title>
    </Modal.Header>
  );
}

export default ModalHeader;
