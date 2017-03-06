import React, { PropTypes } from 'react';
import { Modal } from 'react-bootstrap';

const ModalFooter = props =>
  <Modal.Footer>
    {props.children}
  </Modal.Footer>;

ModalFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalFooter;
