import React, { PropTypes } from 'react';
import Modal from 'react-bootstrap/lib/Modal';

const ModalBody = props => (
  <Modal.Body className={props.className}>
    {props.children}
  </Modal.Body>
);

ModalBody.defaultProps = {
  className: '',
};

ModalBody.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  className: PropTypes.string,
};

export default ModalBody;
