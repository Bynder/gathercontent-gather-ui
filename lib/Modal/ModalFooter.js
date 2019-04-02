import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal';

const ModalFooter = ({ children, text, ...props }) => (
  <Modal.Footer {...props}>
    {text && <span className="modal__footer-text">{text}</span>}

    {children}
  </Modal.Footer>
);

ModalFooter.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

ModalFooter.defaultProps = {
  text: null
};

export default ModalFooter;
