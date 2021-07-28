import React from 'react';
import PropTypes from 'prop-types';
import { NewModal } from 'lib';

const ModalHeader = ({ children, text, ...props }) => (
  <NewModal.Header headerText={children} className="modal-header">
    {text && <p className="modal__header-intro">{text}</p>}
  </NewModal.Header>
);

ModalHeader.propTypes = {
  children: PropTypes.node,
  closeButton: PropTypes.bool,
  text: PropTypes.string,
};

ModalHeader.defaultProps = {
  children: null,
  closeButton: true,
  text: null
};

export default ModalHeader;
