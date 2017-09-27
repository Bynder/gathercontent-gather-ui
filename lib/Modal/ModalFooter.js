import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal';

const ModalFooter = props => (
  <Modal.Footer {...props}>{props.children}</Modal.Footer>
);

ModalFooter.propTypes = {
  children: PropTypes.node.isRequired
};

export default ModalFooter;
