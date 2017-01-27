import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalFooter = (props) => {
  return (
    <Modal.Footer>
      {props.children}
    </Modal.Footer>
  );
}

export default ModalFooter;
