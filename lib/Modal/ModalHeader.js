import React, { PropTypes } from 'react';
import Modal from 'react-bootstrap/lib/Modal';

const ModalHeader = props => (
  <Modal.Header {...props}>
    <Modal.Title>{props.children}</Modal.Title>
  </Modal.Header>
);

ModalHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

ModalHeader.defaultProps = {
  closeButton: true,
};

export default ModalHeader;
