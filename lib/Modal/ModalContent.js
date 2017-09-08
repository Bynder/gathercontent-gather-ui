import React, { PropTypes } from 'react';
import Modal from 'react-bootstrap/lib/Modal';

const ModalContent = props => (
  <Modal.Body className={`modal__content ${props.className}`}>
    {props.children}
  </Modal.Body>
);

ModalContent.defaultProps = {
  className: '',
};

ModalContent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  className: PropTypes.string,
};

export default ModalContent;
