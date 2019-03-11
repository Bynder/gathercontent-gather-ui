import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/lib/Modal";

const ModalHeader = props => (
  <Modal.Header {...props}>
    <div className="modal-header-inner">
      <Modal.Title>{props.children}</Modal.Title>
    </div>
  </Modal.Header>
);

ModalHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default ModalHeader;
