import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal';

const ModalHeader = ({ children, text, useTitle, ...props }) => (
  <Modal.Header {...props}>
    <div className="modal-header-inner">
      {useTitle ? <Modal.Title>{children}</Modal.Title> : children}
      {text && <p className="modal__header-intro">{text}</p>}
    </div>
  </Modal.Header>
);

ModalHeader.propTypes = {
  children: PropTypes.node,
  closeButton: PropTypes.bool,
  text: PropTypes.string,
  useTitle: PropTypes.bool
};

ModalHeader.defaultProps = {
  children: null,
  closeButton: true,
  text: null,
  useTitle: true
};

export default ModalHeader;
